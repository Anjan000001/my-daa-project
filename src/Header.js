import React from 'react'
import Logo from './nitj_logo-removebg-preview.png'

import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header__heading">
                <h1>DR BR AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</h1>
                <img src={Logo} alt="nitj-logo" />
            </div>
            <div className="header__projectTitle">
                <h2>DESIGN AND ANALYSIS OF ALGORITHMS</h2>
                <h4>TOPIC : LONGEST COMMON SUBSEQUENCE</h4>
            </div>
        </div>
    )
}

export default Header