import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Aboutus.css";

function Aboutus(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
<div className="container-fluid box">
    {/* <h1 className="h-1" data-aos="fade-up" data-aos-duration="1200">Welcome to Anant Hospital</h1> */}
    <div className="headingBox2">
            <h1 className="bigHeading2">ABOUT US</h1>
        <div class="custom-shape-divider-bottom-1665995319">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
         </div>
        </div>

    <p className="para container-fluid pl-0 pr-0" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">Anant Institute of Medical Sciences (AIMS) - The best Super specialty Hospital in Jabalpur brings together an outstanding pool of doctors, scientists and clinical researchers to foster collaborative, multidisciplinary investigation, inspiring new ideas and discoveries; and translating scientific advances more swiftly into new ways of diagnosing and treating patients and preventing diseases. A one-of-its-kind facility across the world, AIMS through its research integrates modern and traditional forms of medicine to provide accessible and affordable healthcare.

</p>

</div>
        </>
    )
}

export default Aboutus;