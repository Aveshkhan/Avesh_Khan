import React  from 'react';
import { NavLink } from 'react-router-dom';
import HomeImg from "../Img/HomeSVG.svg";
import { PortfolioCard } from './PortfolioCard';
import { Title } from "./Title";
import cardImg1 from '../Img/Screenshot (3).png';
import cardImg2 from '../Img/Screenshot (2).png';
import cardImg3 from '../Img/Screenshot (6).png';

export const Home = () => {

    return (
        <>
            <section className="container" >
                <div id="Home">
                    <div className="row">
                        <div data-aos="fade-right" className="col-1">
                            <h1>Crafting <br /> Awesomeness</h1>
                            <p>Avesh Khan is an India-based programmer who is a Web Developer & UIUX Designer and enjoys creating striking visuals. Follow him on Twitter, stalk him on Dribble, or just say hello.</p>
                            <NavLink to="/about" className="custom-btn btn-17 d-flex-center"> See more </NavLink>
                        </div>
                        <div data-aos="fade-left" className="col-1" >
                            <img src={HomeImg} alt="" />
                        </div>
                    </div>
                </div>
                <Title
                    title="SOME OF MY WORK"
                />
                <div className="works">
                    <div className="row">
                        <PortfolioCard
                            cardImg={cardImg1}
                            cardTitle="Aafiya Mediretreats"
                            cardSpecify="A Hospital website, I've made it for an internship."
                            url="https://aveshkhan.github.io/Aafiya-Mediretreats/"
                        />
                        <PortfolioCard
                            cardImg={cardImg2}
                            cardTitle="Red Store"
                            cardSpecify="An E-commerce webite design for sports wear."
                            url="https://aveshkhan.github.io/RedStore"
                        />
                        <PortfolioCard
                            cardImg={cardImg3}
                            cardTitle="iCoderBootstrap"
                            cardSpecify="Blog website for developer using latest Bootstrap5."
                            url="https://aveshkhan.github.io/iCoderBootstrap/"
                        />
                    </div>
                    <div className="row view-more d-flex-center">
                        <NavLink to="/portfolio"><h3 className="custom-btn btn-7"><span> View more</span></h3></NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}