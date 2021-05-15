import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';

import ProtectedRoute from "./context/protectedRoute";
import UserProvider, { UserContext } from "./context/User";
import useDarkMode from "./context/darkMode";

import UserSVG from "./svgs/user";
import UserCheckSVG from "./svgs/userCheck";
import StarSVG from "./svgs/star";
import CodeSVG from "./svgs/code";
import DashboardSVG from "./svgs/dashboard";
import CommentSVG from "./svgs/comment";
import BookmarkSVG from "./svgs/bookmark";
import StoreSVG from "./svgs/store";

import Toggle from "./layout/toggle";
import MobileMenuButton from "./layout/mobileMenuButton";
import LightLogo from "./layout/lightLogo";
import DarkLogo from "./layout/darkLogo";
import California from "./layout/california";
import GithubPicture from "./layout/githubPicture";

import Login from './components/login.component';
import RegisterUsers from './components/registerUsers.component';
import Contact from './components/contact.component';
import BlogDashboard from './components/blogDashboard.component';

import Home from './pages/home';
import Blogs from './pages/blogPosts';
import Projects from './pages/projects';

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
  const [secretToken, setToken] = useState('');
  const [logged, setLogged] = useState(false);
  

  useEffect(() => {
    // get github data
    fetch("http://api.github.com/users/nicolascribbles")
      .then(res => res.json())
      .then(data => {
        console.log(setGithubData(data));
        console.log(data);
    });
    
    axios.get("/cookies")
      .then((data) => {
        setCookieData(data.data)
      })
      .catch((err) => {
        return console.log(err)
       });
    
    
  }, [])
  
  const setCookieData = ({ token }) => {
    const thetoken = token || ''
    setToken(thetoken)
    if (thetoken != '') {
      setLogged(true)
    }
  }
  
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
        
       <nav className="nav fixed w-full z-50">
        <div className="nav-container">
          <div className="relative flex items-center justify-between h-16">
            <MobileMenuButton />
            <div className="desktop-menu">
              <div className="menu-logo-wrapper">
               { colorTheme === "light" ?
                  <DarkLogo />
                  :
                  <LightLogo />
               }
              </div>
              <div className="desktop-menu-wrapper">
                <div className="nav-link-wrapper">

                  <NavLink to="/" exact className="nav-link" activeClassName="current">About Me</NavLink>

                  <NavLink to="/blog" className="nav-link" activeClassName="current">Blog</NavLink>

                  { logged 
                      ? <NavLink to="/blog-dashboard" className="nav-link" activeClassName="current">Dashboard</NavLink>
                      : <NavLink to="/login" className="nav-link" activeClassName="current">Login</NavLink>
                  }
                  { logged 
                      ? <NavLink to="/logout" className="nav-link" activeClassName="current">Logout</NavLink>
                      : <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    
        
        <div className="mobile-nav" id="mobile-menu">
          <div className="mobile-nav-wrapper">
            <NavLink to="/" exact className="mobile-nav-link" activeClassName="current-mobile">About Me</NavLink>
            <NavLink to="/projects" className="mobile-nav-link" activeClassName="current-mobile">Github Projects</NavLink>
            <NavLink to="/blog" className="mobile-nav-link" activeClassName="current-mobile">Blog</NavLink>
            { logged 
                ? <NavLink to="/blog-dashboard" className="mobile-nav-link" activeClassName="current-mobile">Dashboard</NavLink>
                : <NavLink to="/login" className="mobile-nav-link" activeClassName="current-mobile">Login</NavLink>
            }
            { logged 
                ? <NavLink to="/logout" className="mobile-nav-link" activeClassName="current-mobile">Logout</NavLink>
                : <></>
            }
          </div>
        </div>
    
        </nav>
    
        <div id="main" className="pt-16 absolute relative">

          <div className="sidebar bg-gray z-2 shadow-lg dark:bg-gray-700 relative h-full min-h-screen md:w-50 lg:w-70 fixed">
              <div className="xl:py-2 flex flex-col justify-start">
                  <div className="hidden md:block">
                     { colorTheme === "light" ?
                        <GithubPicture />
                        :
                        <California />
                     }
                  </div>
                  <div className="hidden md:block text-grey-darker px-4 pb-3">
                    <div className="stats flex rounded bg-primarylight dark:bg-gray-800 mb-4 items-center justify-between w-full px-2">
                      <span className="relative flex dark:text-white" title="Followers">
                        <UserSVG className="h-4 z-2 relative dark:text-white" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 mr-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-cashmere rounded-full text-xs z-1">{followers}</span>
                      </span>
                      <span className="relative flex dark:text-white" title="Public Repositories">
                        <CodeSVG className="h-4 z-2 relative dark:text-white" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-cashmere rounded-full text-xs z-1">{repos}</span>
                      </span>
                      <span className="relative flex dark:text-white" title="Following">
                        <UserCheckSVG className="h-4 z-2 relative" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-cashmere rounded-full text-xs z-1">{following}</span>
                      </span>
                    </div>
                    <h1 className="font-mono uppercase font-bold text-lg dark:color">
                      {name}
                    </h1>
                    <p className="text-xs py-2">
                      I am a full stack software engineer currently <strong className="text-primarylight">looking for work.</strong> As a Software Engineer, I am responsible for implementing visual elements for our web products and applications. I combine the art of design with the science of programming providing the hemispheric synchronization bridge between the two departments.I am responsible for the translation of UI/UX design wireframes to production-ready code.
                    </p>
                  </div>
                  <div className="hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">
                    Main
                  </div>
                  <div className="group relative sidebar-item with-children">
                    <NavLink to="/projects" className="flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-primarylight dark:hover:bg-cashmere-400" activeClassName="bg-primarylight dark:bg-cashmere-400">
                      <DashboardSVG />
                      <div className="text-black font-bold dark:text-white text-xs">View Github Projects</div>
                    </NavLink>
                  </div>
                  <div className="group relative sidebar-item with-children">
                    <NavLink to="/contact" className="flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-primarylight dark:hover:bg-cashmere-400" activeClassName="bg-primarylight dark:bg-cashmere-400">
                      <CommentSVG />
                      <div className="text-black font-bold dark:text-white text-xs">Contact Me</div>
                    </NavLink>
                  </div>
                </div>


                <div className="py-4">
                  <div className="hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">
                    Controls
                  </div>

                  <div className="flex items-center justify-start px-4 mt-3">
                    <label htmlFor="checkbox" className="flex items-center cursor-pointer text-xs">
                      <div className="relative mr-3">
                        <input
                          type="checkbox"
                          id="checkbox"
                          name="checkbox"
                          className="sr-only"
                          checked={colorTheme === "light" ? true : false}
                          onChange={() => setTheme(colorTheme)} />
                        <div className="block bg-gray-600 w-8 h-5 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
                      </div>
                      {colorTheme === "light" ? "Dark" : "Light"} Mode
                    </label>
                  </div>
                </div>
              </div>
          <div className="body bg-pampas z-0 dark:bg-gray-600 pt-8 overflow-auto pb-24">

            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blogs} />
              <Route path="/register" component={RegisterUsers} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <ProtectedRoute path="/blog-dashboard" component={BlogDashboard} loggedIn={logged} />
              <Route exact={true} path="/" component={Home} />
            </Switch>
          </div>
        </div>

      </BrowserRouter>
    </UserProvider>
  );
}
