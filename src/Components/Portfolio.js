import React from 'react';
import { Title } from "./Title";
import { PortfolioCard } from './PortfolioCard';
// import { NavLink } from 'react-router-dom';
import PortfolioImg from '../Img/portfolio image.png';
import cardImg1 from '../Img/Screenshot (3).png';
import cardImg2 from '../Img/Screenshot (2).png';
import cardImg3 from '../Img/Screenshot (6).png';

export const Portfolio = () => {
    return (
        <>
            <div className="container" id="Portfolio">
                <div className="row">
                    <div data-aos="fade-right" className="col-1">
                        <h1>Portfolio</h1>
                        <h4>Checkout some of my UIUX design & website.</h4>
                        <p>All of these work are done by me from scratch or using some framework, most of these are uploaded on github or other platforms.</p>
                    </div>
                    <div data-aos="fade-left" className="col-1">
                        <img src={PortfolioImg} alt="" />
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
                        <PortfolioCard
                            cardImg={cardImg3}
                            cardTitle="iCoderBootstrap"
                            cardSpecify="Blog website for developer using latest Bootstrap5."
                            url="https://aveshkhan.github.io/iCoderBootstrap/"
                        />
                        <PortfolioCard
                            cardImg={cardImg3}
                            cardTitle="iCoderBootstrap"
                            cardSpecify="Blog website for developer using latest Bootstrap5."
                            url="https://aveshkhan.github.io/iCoderBootstrap/"
                        />
                        <PortfolioCard
                            cardImg={cardImg3}
                            cardTitle="iCoderBootstrap"
                            cardSpecify="Blog website for developer using latest Bootstrap5."
                            url="https://aveshkhan.github.io/iCoderBootstrap/"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}