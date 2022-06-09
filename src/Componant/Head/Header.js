import React from 'react'
import "./Header.css"


const Header = () => {
    return (
        <>
            <header className=''>
                <div className="container d_flex">
                    <div className="logo">
                       <h3>SHOWMITTRO</h3>
                    </div>
                    <div className="navLink">
                        <ul className='link f_flex uppercase'>
                            <li><a href="#home">home</a></li>
                            <li><a href="#features">features</a></li>
                            <li><a href="#portfolio">portfolio</a></li>
                            <li><a href="#resume">resume</a></li>
                            <li><a href="#clients">clients</a></li>
                            <li><a href="#blogs">blogs</a></li>
                            <li><a href="#contact me">contact me</a></li>
                            <li><button className='home-btn'>Hire Me</button></li>
                        </ul>
                        <button className='toggle'>
                            <i className='fa fa_times'></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header