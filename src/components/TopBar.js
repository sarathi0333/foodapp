import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => (
        <div className="top-bar" style={{"backgroundColor":"#cb202d"}}>
            <div style={{ cursor:'pointer' }} className="top-bar-left" style={{ paddingLeft: "50px"}}>
            <Link to='/' style={{color: "white", fontSize: "1.5em"}}>Zomato</Link>
            </div>
        </div>
)
   

export default TopBar;