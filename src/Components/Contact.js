import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Title } from "./Title";
import contactImg from "../Img/contact.png";
import Facebook3d from "../Img/Facebook 3d logo.svg";
import Instagram3d from "../Img/Instagram 3d logo.svg";
import Twitter3d from "../Img/Twitter 3d logo.svg";
import LinkedIn3d from "../Img/Linkedin 3d logo.svg";
import { RiMailCheckLine, RiMailCloseLine } from "react-icons/ri";

export const Contact = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [formError, setFormError] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [notSubmited, setNotSubmited] = useState(false);


    function sendEmail(e) {
        e.preventDefault();

        if (Name && Email && Message.length > 1) {
            emailjs.sendForm('service_h7kden8', 'template_ub1nxag', e.target, 'user_7n6ZITbpFxCgqB08wzZUx')
                .then(
                    (result) => {
                        console.log(result.text);
                        setSubmited(true);
                        setTimeout(() => {
                            setSubmited(false);
                        }, 5000);
                    }, (error) => {
                        console.log(error.text);
                        setNotSubmited(true);
                        setTimeout(() => {
                            setNotSubmited(false);
                        }, 5000);
                    });
            e.target.reset();
        } else {
            // setSubmited(true);
            // setNotSubmited(true);
            setFormError(true);
            setTimeout(() => {
                setFormError(false);
            }, 8000);
        }

    }

    return (
        <>
            <div className="container" id="Contact">
                <div className="row">
                    <div data-aos="fade-right" className="col-1">
                        <h1>Contact Me</h1>
                        <div className="contact-links">
                            <div className="contact-link">
                                <a href="https://www.facebook.com/" className="C-facebook">
                                    <img src={Facebook3d} alt="" />
                                    <h3>Like me on Facebook</h3>
                                </a>
                            </div>
                            <div className="contact-link">
                                <a href="https://www.instagram.com/" className="C-instagram">
                                    <img src={Instagram3d} alt="" />
                                    <h3>Follow me on Instagram</h3>
                                </a>
                            </div>
                            <div className="contact-link">
                                <a href="https://twitter.com/" className="C-twitter">
                                    <img src={Twitter3d} alt="" />
                                    <h3>Follow me on Twitter</h3>
                                </a>
                            </div>
                            <div className="contact-link">
                                <a href="https://www.linkedin.com/" className="C-linkedin">
                                    <img src={LinkedIn3d} alt="" />
                                    <h3>Connect me on LinkedIn</h3>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="col-1 contactImg">
                        <img src={contactImg} alt="portfolio Img" />
                    </div>
                </div>

                <Title title="Send me a email" />


                <form className="email-content" onSubmit={sendEmail} data-aos="fade">
                    <div className="input-1 C-inputs">
                        <label htmlFor="">Name</label>
                        <input type="text" name="Name" id="Name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-2 C-inputs">
                        <label htmlFor="">Email</label>
                        <input type="email" name="Email" id="Email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="input-3 C-inputs">
                        <label htmlFor="">Your message</label>
                        <textarea type="text" name="Message" id="Message" rows="6" cols="" onChange={(event) => setMessage(event.target.value)} />
                    </div>
                    <div className="submit-btn">
                        {submited ?  <div className="submited submit-notSub"><h5> Sent!! Thanks for the mail. &nbsp;<RiMailCheckLine size="22" color="#4BB543" /> </h5></div> : ""}
                        {notSubmited ?  <div className="notSubmited submit-notSub"><h5> Oops!! There is a problem try again later. &nbsp;<RiMailCloseLine size="22" color="#FC100D" /></h5></div> : ""}
                        <button className="custom-btn btn-17 d-flex-center" type="submit">Send email</button>
                    </div>
                </form>
                {formError ? <div className="formError d-flex-center"><h5>Validation errors occurred. Please confirm the fields and submit it again.</h5></div> : ""}

            </div>
        </>

    )
}