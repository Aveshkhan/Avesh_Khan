import React from 'react'
import { NavLink } from 'react-router-dom'


export const PortfolioCard = (props) => {
    return (
        <>
            <div className="cardbg d-flex-center col-2" data-aos="fade">
                <div className="card">
                    <NavLink to="/" className="d-flex-center">
                        <div className="cardImg">
                            <img src={props.cardImg} alt="" />
                        </div>
                        <div className="cardTitle">
                            <h4>{props.cardTitle}</h4>
                        </div>
                        <div className="cardP">
                            <p>{props.cardSpecify}</p>
                        </div>
                    </NavLink>
                    <div className="siteurl">
                        <a href={props.url} rel="noreferrer" target="_blank">Tap here to view site</a>
                    </div>
                </div>
            </div>
        </>
    )
}
