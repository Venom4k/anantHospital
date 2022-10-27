import "./Neumorphisms.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function NeumorphismsCard() {
    useEffect(()=>{
        AOS.init(
           
            
        );
       },[])



    return (
        <> 
        <div className="bigBox">
            <div className="containerr">
                <div className="carder"    data-aos-offset="320" data-aos="zoom-in-up" data-aos-duration="550">
                    <div className="boxer">
                        <div className="contenter">
                            <img className="responsiveicon" src={require('./vision.png')} />
                            <h3>OUR VISION</h3>
                            <p>To provide the best Quality HealthCare Services with human touch and holistic approach for patients with utmost care and complete dedication.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="carder"  data-aos-offset="320" data-aos="zoom-in-up"  >
                    <div className="boxer">
                        <div className="contenter">
                            <img className="responsiveicon" src={require("./value.png")} />


                            <h3>OUR MISSION</h3>
                            <p>To provide the best Quality HealthCare Services with human touch and holistic approach for patients with utmost care and complete dedication.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="carder"  data-aos-offset="325" data-aos="zoom-in-up" data-aos-duration="550">
                    <div className="boxer">
                        <div className="contenter">

                            <img className="responsiveicons" src={require("./mission.png")} />
                            <h3>OUR VALUE</h3>
                            <p>To be a Multi specialty health provider with modern technology and advanced therapies as well as an educational and research institute dedicated for excellence</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="carder"  data-aos-offset="325" data-aos="zoom-in-up" data-aos-duration="550">
                    <div className="boxer">
                        <div className="contenter">
                            <img className="responsiveicons" src={require("./dedication.png")} />
                            <h3>OUR DEDICATION</h3>
                            <p>AIMS has a team of Dedicated doctors, well equipped Laboratories and Operation Theatres. Our team of doctors are always ready to deal with every critical condition</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export {NeumorphismsCard};