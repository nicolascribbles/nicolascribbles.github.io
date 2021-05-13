import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import ProtectedRoute from "./context/protectedRoute";
import UserProvider, { UserContext } from "./context/User";
import useDarkMode from "./context/darkMode";

import Home from './components/home.component';
import Login from './components/login.component';
import RegisterUsers from './components/registerUsers.component';
import Blogs from './components/blogPosts.component';

export default function App () {
  
  const [colorTheme, setTheme] = useDarkMode();
  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // get github data
    fetch("http://api.github.com/users/nicolascribbles")
      .then(res => res.json())
      .then(data => {
        console.log(setGithubData(data));
        console.log(data);
    });
    
    
  }, [])
  
  const setGithubData = ({ name, login, followers, following, public_repos, avatar_url}) => {
    setName(name)
    setGithubUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    
  }
  //JSX
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="nav">
          <h2>Welcome to my app</h2>
          <Link to="/register">Click for users</Link>
          <Link to="/blogs">Click for blogs</Link>
          <Link to="/login">Click to login</Link>
        </div>
        <Switch>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/register">
            <RegisterUsers />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Login />
          </Route>
          <ProtectedRoute path="/blog-dashboard">
            <Blogs />
          </ProtectedRoute>
          <Route exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
