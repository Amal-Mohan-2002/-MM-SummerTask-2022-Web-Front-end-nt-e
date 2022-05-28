import React from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import "../Styles/Navbar.css";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Navbar(){
    const navRef= useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <div className="container">
            <nav ref={navRef}>
                <a href="#">Home</a>
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
                <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/1042/1042782.png" alt="logo-img"/>
                <h5 className="logo-text">Everyday News</h5>
            </div>
            <div>
                <div className="nav-right">
                    <Button variant="outlined">Sign In</Button>
                </div>
                <div>
                    {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                </div>
            </div>

        </div>

    )
}