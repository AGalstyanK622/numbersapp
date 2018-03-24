import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap'
import logo from '../images/logo.svg';
import '../styles/index.css';
import FetchApiTrivia from './FetchApiTrivia';
import FetchApiYear from './FetchApiYear';
import FetchApiDate from './FetchApiDate';
import FetchApiMath from './FetchApiMath';

/*  ============================================================= */
const Header = () => {
  return (
  <header>
    <NavLink className="navlink" activeClassName="is-active" to="/" exact={true}>
      Project
    </NavLink>
    <NavLink className="navlink" activeClassName="is-active" to="/about">
      About
    </NavLink>
    <NavLink className="navlink" activeClassName="is-active" to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink className="navlink" activeClassName="is-active" to="/contact">
      Contact
    </NavLink>
  </header>
  )
};

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h4 className="footer-title">About TUMO</h4>
              <p className="footer-paragraph">TUMO is a new kind of educational experience at the intersection of technology and design.
At TUMO, teens learn because they want to. They’re given the tools and knowhow they need to reach their maximum potential, and they chart their own learning path through hands-on activities, workshops and projects.</p>
              <ul className="social-icon">
                 <a href="https://twitter.com/GArman777" target="_blank" rel="noopener noreferrer"><img src="http://pngimg.com/uploads/twitter/twitter_PNG29.png" className="rf-logo rf-logo--twitter" alt="twitter" width="45px" height="45px"/></a>
        <a href="https://www.facebook.com/arman.galstyan.338" target="_blank" rel="noopener noreferrer"><img src="https://www.shareicon.net/download/2015/09/23/106006_logo_512x512.png" alt="fb" width="45px" height="45px" className="rf-logo rf-logo--fb" /></a>
        <a href="https://www.linkedin.com/in/gak622/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" width="45px" height="45px" className="rf-logo rf-logo--linkedin" /></a>
        <a href="https://tumo.org/en/whatistumo/" target="_blank" rel="noopener noreferrer"><img src="http://newplayground.tumo.org/img/logo.png" width="120px" height="45px" alt="tumo" className="rf-logo rf-logo--linkedin" /></a>       
              
              </ul>
            </div>
            <div className="col-sm-3">
              <h4 className="title">My Account</h4>
              <span className="acount-icon">          
                <a href="https://github.com/AGalstyanK622" target="_blank" rel="noopener noreferrer"><i className="fa fa-heart" aria-hidden="true"/> Github</a>
                <a href="https://arm-personalportfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-users" aria-hidden="true" />Personal Project</a>
                <a href="https://mysterious-cove-86356.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-user" aria-hidden="true" /> Personal Project</a>       
              </span>
            </div>
            <div className="col-sm-3">
              <h4 className="title">Category</h4>
              <div className="category">
                <a>number</a>
                <a>trivia</a>
                <a>date</a>
                <a>math</a>
                <a>mathematics</a>     
                <a>magic numbers</a>     
                <a>all about numbers</a>            
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center"><a href="http://tumo.org/" style={{color: '#fff'}}>Made in ARMENIA.
    All member work copyright of respective owner, otherwise ©2018 TUMO</a></div>
        </div>	
      </footer>
    );
};

const ProjectHeader = () => {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Numbers API</h1>
        </div>
      </div>
      <div className="logo-outer">
                <h1 className="logo">Let your statistics tell tales and dates come to life</h1>
            </div>
    <Nav className = "navo" bsStyle="pills">
    <NavItem eventKey={1} componentClass="span">
      <NavLink className="navlink" activeClassName="is-active" to="/trivia" exact={true}>
            TRIVIA
    </NavLink>
 
    </NavItem>
    <NavItem eventKey={2} title="Item" componentClass="span">
      <NavLink className="navlink" activeClassName="is-active" to="/year">
            YEAR
    </NavLink>
    </NavItem>
    <NavItem eventKey={3} componentClass="span">
      <NavLink className="navlink" activeClassName="is-active" to="/date">
            DATE
    </NavLink>
    </NavItem>
    <NavItem eventKey={3} componentClass="span">
      <NavLink className="navlink" activeClassName="is-active"  to="/math">
            MATH
    </NavLink>
    </NavItem>
  </Nav>
    </div>
  );
}

const About = () => {
  return (
    <div className="data center">
      <h1>This is about page!</h1>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="data center">
      <h1>Welcome to my Portfolio!</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="data center">
      <h1>Welcome to my contact page!</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="data center">
      <h1>404 - the page is not found!</h1>
    </div>
  );
};

const Project = () => {
  return (
    <div className="project">
      <ProjectHeader />
        <FetchApiTrivia />
    </div>
  );
};

const YearE = () => {
  return (
    <div className="project">
      <ProjectHeader />
        <FetchApiYear />
    </div>
  );
};

const DateE = () => {
  return (
      <div className="project">
      <ProjectHeader />
        <FetchApiDate />
      </div>
  );
};

const MathE = () => {
  return (
       <div className="project">
      <ProjectHeader />
        <FetchApiMath />
      </div>
  );
};


/*  ============================================================= */

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Project} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/trivia" component={Project} />
        <Route path="/year" component={YearE} />
        <Route path="/date" component={DateE} />
        <Route path="/math" component={MathE} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
