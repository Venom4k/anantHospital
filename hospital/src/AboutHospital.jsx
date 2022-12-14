import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "./AboutHospital.css";

function AboutHospital(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
<div className="container-fluid box">
    <h1 className="h-1" data-aos="fade-up" data-aos-duration="1200">Welcome to Anant Hospital</h1>
    <p className="para container-fluid pl-0 pr-0" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">Anant Institute of Medical Sciences (AIMS) - The best Super specialty Hospital in Jabalpur brings together an outstanding pool of doctors, scientists and clinical researchers to foster collaborative, multidisciplinary investigation, inspiring new ideas and discoveries; and translating scientific advances more swiftly into new ways of diagnosing and treating patients and preventing diseases. A one-of-its-kind facility across the world, AIMS through its research integrates modern and traditional forms of medicine to provide accessible and affordable healthcare.

</p>

</div>
        </>
    )
}

export {AboutHospital};