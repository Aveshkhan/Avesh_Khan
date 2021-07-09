import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../Img/AK Logo Dark.svg";
import { DarkMode } from './DarkMode';
import { ResponsiveNavbar } from './ResponsiveNavbar';



export const Navbar = () => {
    return (
        <>
            <nav data-aos="slide-down" data-aos-duration="1000" id="Navbar">
                <div className="container-fluid" id="Nav-1">
                    <div className="row">
                        <div className="logo">
                            <NavLink to="/"><img src={Logo} alt="Logo" id="logo_togglr" /></NavLink>
                        </div>
                        <div className="navLinks">
                            <ul>
                                <li className="link-background"><NavLink className="middle" exact to="/" activeClassName="Active-link">Home</NavLink>
                                </li>
                                <li className="link-background"><NavLink className="middle" exact to="/portfolio" activeClassName="Active-link">Portfolio</NavLink>
                                </li>
                                <li className="link-background"><NavLink className="middle" exact to="/about" activeClassName="Active-link">About</NavLink>
                                </li>
                                <li className="link-background"><NavLink className="middle" exact to="/contact" activeClassName="Active-link">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* <label className="label">
                            <div className="toggle">
                                <input className="toggle-state" id="checkbox" type="checkbox" name="check" value="check" />
                                <div className="indicator"><box-icon name='sun' color='var(--font-color)' ></box-icon><box-icon name='moon' color='var(--font-color)' ></box-icon></div>
                            </div>
                        </label> */}
                        <DarkMode />
                        {/* <div className="Searchbar">
                            <box-icon name='search-alt' className="searchsvg" color="var(--font-color)" ></box-icon>
                            <input type="text" placeholder="Search..." color="var(--font-color)" />
                        </div> */}
                    </div>
                </div>

                <ResponsiveNavbar />
            </nav>
        </>

    )
}