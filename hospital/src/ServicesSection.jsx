import "./ServicesSection.css";
function ServicesSection() {

   

    return (

        <>
        <h1 className="serviceHeading" data-aos="fade-down" data-aos-duration="800" data-aos-offset="300">Our Services</h1>
            <div className="servicesSection">
                <div className="boxer1">
                <div className="aos_less" data-aos="fade-right" data-aos-duration="800" data-aos-offset="400">
                    <div   className="servicesBox"  ><div className="content"><div className="imgbox"><img className="imgresponsive" src={require("./images/image1.png")} /></div> <div className="details">
                        <h3 className="smallHeading">Anant Spine Clinic</h3>
                        <div className="sdetail">Anant Spine Clinic at Anant Institute of Medical Sciences offers a wide range of services for Spinal diseases</div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="aos_less"
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="250"
                data-aos-duration="800"
                    >
                    <div className="servicesBox"><div className="content"><div className="imgbox"><img className="imgresponsive" src={require("./images/image2.png")} /></div> <div className="details">
                        <h3 className="smallHeading">Our Facilities</h3>
                        <div className="sdetail">We provide best facilities to the patients, AIMS has multi-specialty facilities and dedicated team of doctors to breakthrough any critical case.</div>
                    </div>
                    </div></div>
                    </div>

                    <div className="aos_less"
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="350"
                data-aos-duration="800"
                    >
                    <div className="servicesBox"><div className="content"><div className="imgbox"><img className="imgresponsive" src={require("./images/image3.png")} /></div> <div className="details">
                        <h3 className="smallHeading">Anant Spine Clinic</h3>
                        <div className="sdetail">Anant Spine Clinic at Anant Institute of Medical Sciences offers a wide range of services for Spinal diseases</div>
                    </div>
                    </div></div>
                    </div>



                </div>
          
            </div>
                  <div className="secondBox" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="400">


            <div className="servicesBox opd">
                <h3 className="opdHeading">OPD Hours</h3>

                <ul>
                    <li className="time">Monday 09:00am-06:00pm</li>
                    <li className="time">Wednesday 09:00am-06:00pm</li>
                    <li className="time">Thursday 09:00am-06:00pm</li>
                    <li className="time">Friday 09:00am-06:00pm</li>
                    <li className="time">Saturday 09:00am-02:00pm</li>
                    <li className="time">Sunday 10:00am-12:00pm</li>
                </ul>

            </div>
        </div>
        </>
    )
}
export { ServicesSection };