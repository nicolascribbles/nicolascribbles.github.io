const dotenv = require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;
const db = process.env.DB_URL;

const jwtSecret = process.env.JWT_SECRET;
const routes = require('./routes/api');

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected <3")
});

app.use(cors());

app.get('/jwt', (req, res) => {
  const token = jsonwebtoken.sign({ user: 'john doe' }, jwtSecret);
  res.cookie('token', token, { httpOnly: true });
  res.json({ token });
});

app.use(cookieParser());

app.get('/cookies', (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.json(req.cookies)
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));