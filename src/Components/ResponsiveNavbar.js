import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../Img/AK Logo Dark.svg";
import { DarkMode } from './DarkMode';
import { Divide as Hamburger } from 'hamburger-react';

export const ResponsiveNavbar = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <div className="Responsive-navbar" id="Nav-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="logo">
                            <NavLink to="/"><img src={Logo} alt="Logo" id="logo_togglr" /></NavLink>
                        </div>
                        <div className="nav-row">
                            <DarkMode />

                            <div className="hamburger" onClick={() => setOpen(!isOpen)}>
                                <Hamburger rounded duration="0.7" toggled={isOpen} toggle={setOpen}  color="var(--black-color)"/>
                            </div>
                        </div>

                        {/* <ul style={{display: isOpen ?"block" : "none"}}></ul> */}

                    </div>
                </div>
                    <div className="menuBar">
                        <div className="navLinks" style={{transform: isOpen ?"translateY(0)" : "translateY(-400px)"}}>
                            <ul>
                                <li className="link-background"><NavLink onClick={() => setOpen(!isOpen)} className="middle navlink" exact to="/" activeClassName="Active-link">Home</NavLink>
                                </li>
                                <li className="link-background"><NavLink onClick={() => setOpen(!isOpen)} className="middle" exact to="/portfolio" activeClassName="Active-link">Portfolio</NavLink>
                                </li>
                                <li className="link-background"><NavLink onClick={() => setOpen(!isOpen)} className="middle" exact to="/about" activeClassName="Active-link">About</NavLink>
                                </li>
                                <li className="link-background"><NavLink onClick={() => setOpen(!isOpen)} className="middle" exact to="/contact" activeClassName="Active-link">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}
