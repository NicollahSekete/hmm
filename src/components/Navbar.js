import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Employment from './Employment';



const Navbar = () => {
    return (
        <Router>
            <div class ="Navbar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/employment'>Employment</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/About'>
                        <About />
                    </Route>
                    <Route path='/employment'>
                        <Employment />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;