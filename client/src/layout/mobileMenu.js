import {useEffect, useState, setState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function MobileMenu({ logged, menuOpened, setMenuOpened }){
  return(

      <div className={menuOpened ? "mobile-nav open" : "mobile-nav"} id="mobile-menu">
        <div className="mobile-nav-wrapper">
          <NavLink to="/" exact className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>About Me</NavLink>
          <NavLink to="/projects" className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>Github Projects</NavLink>
          <NavLink to="/blog" className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>Blog</NavLink>
          { logged 
              ? <NavLink to="/blog-dashboard" className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>Dashboard</NavLink>
              : <NavLink to="/login" className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>Login</NavLink>
          }
          { logged 
              ? <NavLink to="/logout" className="mobile-nav-link" activeClassName="current-mobile" onClick={() => setMenuOpened(!menuOpened)}>Logout</NavLink>
              : <></>
          }
        </div>
      </div>
    )
}
MobileMenu.defaultProps = {
  menuOpened: false,
  logged: false,
  setMenuOpened: null
}
export default MobileMenu;