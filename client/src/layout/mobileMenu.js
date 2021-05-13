import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default function MobileMenu(){
  return(
    <div className="mobile-nav" id="mobile-menu">
      <div className="mobile-nav-wrapper">
        <NavLink to="/" exact className="mobile-nav-link" activeClassName="current-mobile">Welcome</NavLink>
        <NavLink to="/about" className="mobile-nav-link" activeClassName="current-mobile">About Me</NavLink>
        <NavLink to="/projects" className="mobile-nav-link" activeClassName="current-mobile">Projects</NavLink>
        <NavLink to="/blog" className="mobile-nav-link" activeClassName="current-mobile">Blog</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" activeClassName="current-mobile">Contact</NavLink>
      </div>
    </div>
    )
}