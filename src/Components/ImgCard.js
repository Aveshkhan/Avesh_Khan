import React from 'react';

export const ImgCard = (props) => {
    return (
        <>
            <div data-aos="fade-up" className="ImgCard d-flex-center">
                <img src={props.cardImg} alt="" />
            </div>
        </>
    )
}
