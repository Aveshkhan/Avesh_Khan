import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaFacebookSquare, FaTwitter} from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
// import FBsvg from "../Img/bxl-facebook-square.svg";


export const Footer = () => {
    return (
        <>
            <footer data-aos="slide-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" id="footer" className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="social-links">
                            <div className="s-link">
                                <a href="https://www.facebook.com/">
                                <AiFillFacebook color='var(--font-color)' size="24"/>
                                </a>
                            </div>
                            <div className="s-link">
                                <a href="https://www.instagram.com/">
                                <AiFillInstagram color='var(--font-color)' size="24"/>
                                </a>
                            </div>
                            <div className="s-link">
                                <a href="https://twitter.com/">
                                <AiOutlineTwitter color='var(--font-color)' size="24"/>
                                </a>
                            </div>
                            <div className="s-link">
                                <a href="https://www.instagram.com/">
                                <AiFillLinkedin color='var(--font-color)' size="24"/>
                                </a>
                            </div>
                        </div>
                        <div className="f-content d-flex-center">
                            <h5>&copy; 2021 Avesh Khan</h5>
                        </div>
                        <div className="pageLinks ">
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
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
