import "./FacilitiesProvide.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function FacilitiesProvide() {
    useEffect(()=>{
        AOS.init(
           
            
        );
       },[])


    return (
    
        <>
        <div className="facilitiesSection">
            <div className='contains'>
                <div className="headingboxer"><h1 data-aos="fade-down"   data-aos-offset="180" data-aos-duration="1000"  className="headingfacilities">What Facilities We Provide ?</h1></div>
                <div className='boxx'>

                    <div className='leftt'> <img data-aos="fade-right"   data-aos-offset="300" data-aos-duration="1300" className="girlDoctor" src={require('./images/Doctor.png')}/> </div>
                    <div className='rightt'>

                        <div className='fbox'  data-aos="fade-left"   data-aos-offset="300" data-aos-duration="1000"  data-aos-delay="350">

                            <div className='s-left'><img className="responsiveimg" src={require(`./images/Fimage/ambulance.png`)} /></div>
                            <div className='s-right'> <p className="facilitiespara"> AIMS PROVIDE 24/7 AMBULANCE FACILITIES AROUND JABALPUR SANSKARDHANI</p></div>

                        </div>

                        <div className='fbox' data-aos="fade-left"   data-aos-offset="250" data-aos-duration="1000"  data-aos-delay="400">

                          <div className='s-left'><img className="responsiveimg" src={require("./images/Fimage/accident.png")}/></div>
                            <div className='s-right'> <p className="facilitiespara"> AIMS HAVE EXPERT & DEDICATED DOCTORS WITH BEST ACCIDENTAL TRAUMA UNIT</p></div>

                            </div>

                        <div className='fbox' data-aos="fade-left"   data-aos-offset="245" data-aos-duration="1000"  data-aos-delay="420"> 

                           <div className='s-left '><img className="responsiveimg" src={require("./images/Fimage/medical.png")} /></div>
                            <div className='s-right'> <p className="facilitiespara"> AIMS HAVE BEST SUPER SPECIALIST EXPERT & DEDICATED DOCTORS TEAM.</p></div>

                            </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
}
export { FacilitiesProvide };
