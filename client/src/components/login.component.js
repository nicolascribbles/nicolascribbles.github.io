import React, {useState, useEffect} from 'react';
import axios from 'axios';
import bcrypt from 'react-native-bcrypt';
import express from 'react-native-bcrypt';

import UserProvider, { UserContext } from "../context/User";

export default function Login() {
  const apiUrl = process.env.ENV_URL;
  const [ jwt, setJwt ] = '';
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cookie, setCookie ] = useState([]);
  const [ token, setToken ] = useState('');
  const [ authenticated, setAuthentication ] = useState(false);
  const [ state, dispatch ] = React.useContext(UserContext);
  
  useEffect(() => {
    axios({
      url: '/cookies',
      method: 'GET'
    })
    .then((data) => {
      setCookie([data])
      setToken(data.data.token)
      console.log("Data: ", data)
      console.log("Token: ", data.token)
     })
    .catch((err) => {
       return console.log(err)
     });
    
  }, []);
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  
  const compareThisPassword = (inputPassword, hash) => {
    bcrypt.compare(inputPassword, hash, (err, result) => {
      if (err) return console.log(err)
      console.log("Validation says: ", result)
      setAuthentication(result)
    })
  }
  
  const submit = (event) => {
    event.preventDefault();
    
    const user = username
    const pass = password
    
    const payload = {
      username: user,
      password: pass
    }
    
    axios({
      url: `/api/users/findone/${user}`,
      method: 'GET'
    })
    .then(( data ) => {
      console.log("Data: ", data)
      // validate
      const isMatch = compareThisPassword(pass, data.data.password);
      console.log(authenticated)
      resetUserInputs();
      console.log("Here!");
    })
    .catch((error) => {
      console.log('Internal server error: ', error)
    });
    
    if (authenticated === true) {
      console.log(authenticated)
      
      axios({
        url: '/jwt',
        method: 'GET'
        })
      .then((res) => {
        console.log("Hello World");
        if (res.ok) {
          console.log("Hello World res OK");
          return res.json();
        }
        throw res;
        })
        .then(res => {
          console.log(res);
          dispatch({type: "LOGIN", payload: res}) 
        })
        .catch((error) => {
          return console.log(error);
      });
    }
  };
  const resetUserInputs = () => {
    setUsername('');
    setPassword('');
  }
  
  return (
    <div>
      <h1> User Login </h1>
      <form onSubmit={submit}>
        <div className="form-input">
          <input 
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <input 
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}