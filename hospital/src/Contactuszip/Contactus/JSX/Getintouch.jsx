import React from "react"
import "../CSS/Getintouch.css"

function Getintouch() {
    return (
        <>
            <section className="contact">
                <div className="content">
                    <h2>Contact Us </h2>
                    <p>Anant Multispeciality Hospital
                    </p>
                </div>
                <div className="containerr">
                
                    <div className="contactInfo">
                        <div className="box1">
                            <div className="icon"><img className="logoresponsive" src={require("../../../placeholder.png")} /></div>
                            <div className="text">
                                <h3>Our Location</h3>
                                <p className="contactusSubheading"> Madan Mahal Station Road,
                                Wright Town, Jabalpur M.P.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="icon"><img className="logoresponsive" src={require("../../../call.png")} /> </div>
                            <div className="text">
                                <h3>Phone Number</h3>
                                <p className="contactusSubheading">+91-761-2402594
                                +91-761-2411962
                                </p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="icon"><img className="logoresponsive" src={require("../../../gmail.png")} /></div>
                            <div className="text">
                                <h3>Email Address</h3>
                                <p className="contactusSubheading">appointment@ananthospital.org</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form>
                            <h2>Get In Touch</h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Phone no.</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" />
                                <span>Your message</span>
                            </div>
                            <div className="inputBox">
                                <input type="Submit" name="" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <h1 className="map1">Map</h1>
            <div className="containermap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.129222922398!2d79.92009341428522!3d23.165483316786435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae02d5920c73%3A0x8623eab44b5a82b8!2sAnant%20Hospital%20(Multispeciality)!5e0!3m2!1sen!2sin!4v1589436448286!5m2!1sen!2sin" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

        </>
    );
}
export { Getintouch };