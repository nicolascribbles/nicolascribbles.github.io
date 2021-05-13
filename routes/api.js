const express = require('express');
const router = express.Router();

const BlogPost = require('../models/blogPost');
const User = require('../models/user');


//==========================
// Blog Routes
//==========================

// Get All Blogs
router.get('/blogs', (req, res) => {
  
  BlogPost.find({ })
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error: ', error)
    });
});

// Create a new blog
router.post('/blogs', (req, res) => {
  data = req.body;
  
  const newBlogPost = new BlogPost(data)
  newBlogPost.save((error) => {
    if (error) {
      console.log('Oops something went wrong');
      return;
    }
    return res.json({
      msg: 'Your data has been saved.'
    })
  });
  
});

//  router.get("/published", blogs.findAllPublished);
//  
//  router.get("/:id", blogs.findOne);
//  
//  router.put("/:id", blogs.update);
//  
//  router.delete("/:id", blogs.delete);

//==========================
// User Routes
//==========================

// Get All Users
router.get('/users', (req, res) => {
  
  User.find({ })
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error: ', error)
    });
});

// Create a new user
router.post('/users', (req, res) => {
  data = req.body;
  
  const newUser = new User(data)
  newUser.save((error) => {
    if (error) {
      console.log('Oops something went wrong');
      return;
    }
    return res.json({
      msg: 'Your data has been saved.'
    })
  });
  
});

// Find a user
router.get('/users/findone/:username', (req, res) => {
  const username = req.params.username;
  User.findOne({ username: username }, 'password firstName lastName email')
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: "Something went wrong."
        })
      }
      res.json(data)
      console.log(data)
    })
    .catch( error => {
      console.log(error);
      res.status(500).json({
        message: error.message || "Something ocurred while fetching the user." });
    });
});

// Authenticate a user
router.get('/users/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: "Something went wrong."
        })
      }
      data.comparePassword(password, function(err, isMatch) {
        if (err) throw err;
        console.log(password, isMatch)
      })
    })
    .catch( error => {
      console.log(error);
      res.status(500).json({
        message: error.message || "Something ocurred while fetching the user." });
    });
});



module.exports = router;