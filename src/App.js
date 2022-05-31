import React from "react"
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Error from "./pages/Error";
import './index.css';
import Navbar from "./components/Navbar.js"



export default function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="*" element={<Error/>} />

                </Routes>
            </Router>       
        </div>
    )
}