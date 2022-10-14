import "./FrontPage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
 
function FrontPage() {
    useEffect(()=>{
AOS.init();
    },[])
  return (
    <>
      <div className="frontPage">
        <   div>
        <div className="container-fluid backgroundBlack">
        <div className="headingSection container-fluid" >
        <h1 data-aos="fade-up"     data-aos-duration="1200" data-aos-easing="ease-in-out"
        >"WE ARE COVID SAFE"</h1>
        <h1 className="secondHeading" data-aos="fade-up" data-aos-duration="1500"     data-aos-delay="60" data-aos-easing="ease-in-out"
        >YOUR SAFETY IS OUR TOP PRIORITY</h1>
         <div className="sideHeading" data-aos="fade-out" data-aos-duration="5000" data-aos-delay="80" >Best Infection Control,Safest Enviroment</div><br/>
     <a href="#" className="btn" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800"     
     data-aos-offset="5"
     >
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     Book a Appointment
     </a>
  
        </div>
        </div>
        <img className="bgimg" src={require("./images/background.jpg")} />
         
  
        

        </div>
      
 
      </div>
    </>
  );
}

export { FrontPage };
