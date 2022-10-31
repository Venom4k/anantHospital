import "../Css Files/OurResponsibilities.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function OurResponsibilities(){

  useEffect(()=>{
    AOS.init(
       
        
    );
   },[])


return(

    <> 
    <div className="containes">
    <div className="bigHeadingBox" data-aos="fade-up" data-aos-duration="900" >
    <h1 className="bigHeading"> Our Responsibilities</h1>
    </div>
  <div className="skewed skewed-left" data-aos="flip-left" data-aos-duration="900" data-aos-offset="200">
  <div className="image">
  <div>
  <img src={require("../Css Files/OurResponsibilities.jpg")} alt="There is a images"/>
  </div>
  </div>
  <div className="text">
   
  <h1 className="smallHeading">To Help Us To Provide You With The Best Possible Care Please</h1>
  <ul style={{listStyle:"disc"}}>
  <li>
  Tell us about your aliments and previous hospital visits,symptoms expericed,medications(if any),allergies,and other health problems.</li>
  <li>Tell us about your any religious practise,culture believe system or any other requirements.</li>
  <li>Treat everyone in the Hospital including staff,patients,their families with respect,compassion,senstivity and kindness.</li>
  <li>
  Do consult with your family,friends or guradian before any health care related decision or surgeries.</li>
  <li>
  Follows staff instructions regardings your treatment and care.</li>
  <li>Be on Time for appointments and let your health consultant know if you need to cancel or reschedule,and notify us if your contact detail change.</li>
  <li>Respect the confidentially and privacy of others.</li>
  </ul>
 
  </div>
  
  </div>
  </div>
    </>
)
}

export {OurResponsibilities};