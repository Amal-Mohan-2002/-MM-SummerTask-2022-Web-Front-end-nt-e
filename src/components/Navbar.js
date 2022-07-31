import React from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import "../Styles/Navbar.css";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom"
import SignIn from "../pages/SignIn"
import Home from "../pages/Home"
import Error from "../pages/Error";
import  App from "../App"
import { createTheme } from '@mui/material/styles';
import black from '@mui/material/colors/blue';




export default function Navbar(){
    const navRef= useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <div className="container">
            <nav ref={navRef}>
                        <Link to="/">Home</Link>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                </nav>
                
                
                <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
                <div className="container-logo">
                    <Link className="Signin-btn" to="/">
                        <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/1042/1042782.png" alt="logo-img"/>
                    </Link>
                    <Link className="Signin-btn" to="/"><h5 className="logo-text">Everyday News</h5></Link>
                </div>
                <div>
                    <div className="nav-right">
                        <Link className="Signin-btn" to="/signin"><Button variant="outlined">Sign In</Button></Link>
                        <Link className="CreatePost" to="/CreatePost"><Button color="success"variant="contained">Create Article</Button></Link>
                        
                        
                    </div>                    
                    <div>
                    </div>
                </div>

        </div>

    )
}