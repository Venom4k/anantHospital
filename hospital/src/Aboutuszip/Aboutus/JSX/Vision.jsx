import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Vision.css";

function Vision(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
        {/* <div className='headingvision'> <h1>Our Vision & Mision</h1></div> */}
        <section className='containervision'>
            <div className='card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60" >
                <img className="responsiveimg1"  src={require("../JSX/Images/visionresize2.png")} alt=""/>
                <h2>Our Vision</h2>
                <p>"To provide patients with the highest quality medical care services, 
                humane and holistic approach, to provide services to patients with the
                 greatest care and complete dedication."</p>
            </div>
            <div className='card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                <img className="responsiveimg2"  src={require("../JSX/Images/missionresize2.png")} alt=""/>
                <h2>Our Mission</h2>
                <p>"A multi-specialty leading healthcare provider with modern
                 technology and advanced therapies, as well as an education and 
                 research institution dedicated to excellence."</p>
            </div>
            <div className='card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                <img className="responsiveimg3"  src={require("../JSX/Images/valuesresize2.png")} alt=""/>
                <h2>Our Values</h2>
                <p>The hospital is committed to the holistic approach of patient care,
                 and every hospital staff member must remain vigilant and serve mankind
                  with the utmost care and dedication.</p>
            </div>
        </section>
        </>
        )
}

export default Vision;