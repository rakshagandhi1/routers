import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
	render()
	{
		return(
            <div>
            <nav>
            <ul>
            <li className ="heading">NavBar</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Project">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul>
            </nav>
            </div>
        )
	}
}

export default Navbar;