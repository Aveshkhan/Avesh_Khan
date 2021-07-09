import React from 'react';
import { Title } from "./Title";
import Flag from "../Img/india flag.svg";
import QF_img from "../Img/QF img.png";
import AboutImg from "../Img/About Img.png";
import Resume from "../Img/Avesh Resume.pdf";
import { ImgCard } from './ImgCard';
import MyImg1 from '../Img/My-Img-3.jpg';
import MyImg2 from '../Img/My-Img-6.jpg';
import MyImg3 from '../Img/My-Img-5.jpg';
import MyImg4 from '../Img/My-Img-7.jpg';


export const About = () => {
    return (
        <div>
            <>
                <section className="container" id="About">
                    <div className="row">
                        <div data-aos="fade-right" className="col-1">
                            <h1>About Me</h1>
                            <h4>I am an Web Developer & UIUX Designer Based on Mumbai, India.</h4>
                            <p>I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not pushing pixels, you'll find me cooking, watching anime, or working out in the gym.</p>
                        </div>
                        <div data-aos="fade-left" className="col-1">
                            <img src={AboutImg} alt="portfolio Img" />
                        </div>
                    </div>

                    <div className="image-section">
                        <div className="row">
                            <ImgCard cardImg={MyImg1} className="myImg1" />
                            <ImgCard cardImg={MyImg2} className="myImg2"  />
                            <ImgCard cardImg={MyImg3} className="myImg3" />
                            <ImgCard cardImg={MyImg4} className="myImg4" />
                        </div>
                    </div>

                    <div className="row" id="pieChart">
                        <div className="col-3" id="p-designer">
                            <h4>Part Designer</h4>
                            <ul>
                                <li>UI design</li>
                                <li>UX design</li>
                                <li>Design system</li>
                                <li>Interaction design</li>
                                <li>"Making it pop"</li>
                            </ul>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" className="col-3" id="pie-diagram"></div>
                        <div className="col-3" id="p-coder">
                            <h4>Part Coder</h4>
                            <ul>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>React.JS</li>
                                <li>Node.js</li>
                                <li>Backend (kinda)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="skills-title">
                        <Title title="MY SKILLS" />
                    </div>

                    <div data-aos="fade" data-aos-easing="ease-in-out" data-aos-anchor-placement="center-bottom" className="row" id="barGraph"></div>

                    <Title title="QUICK FACTS" />

                    <div id="quickFacts">
                        <div data-aos="fade-right" className="detail item-1">
                            <h5>Home town</h5>
                            <p>Mumbai, India <span><img src={Flag} alt="" /></span></p>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="200" className="detail item-2">
                            <h5>When I started as a developer</h5>
                            <p>2020 (When the pandemic hits us hard).</p>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" className="detail-img d-flex-center">
                            <img src={QF_img} alt="" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="600" className="detail item-3">
                            <h5>Education</h5>
                            <p>Bachelor of Science in (Information Technology), lots of online tutorial, and years of practicing.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="800" className="detail item-4">
                            <h5>Other Knowledge</h5>
                            <p>GitHub, Figma, CSS Frameworks like Bootstrap or tailwind, Basic Knowledge of Backend development, and Adobe Photoshop - Illustrator - XD etc.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1000" className="detail item-5">
                            <h5>Hobbies</h5>
                            <p>Working out, cooking & Watching Animes.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1200" className="detail item-6">
                            <h5>Resume</h5>
                            <p>Tap to view <a target="_blank" rel="noreferrer" className="Links" href={Resume}>My-Resume</a></p>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}