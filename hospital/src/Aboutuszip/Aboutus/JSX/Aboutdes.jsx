import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Aboutdes.css";

function About(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
        <sectionaboutdes className='containerdes'>
        <div className='carddess' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
            <h4>ANANT INSTITUTE OF MEDICAL SCIENCES AIMS</h4>
            <p>The Anant Institute Of Medical Sciences (AIMS) Super-Specialty Hospital Brings Together A Group Of Outstanding Doctors,
                    Scientists And Clinical Researchers To Promote Collaborative And Multidisciplinary Research, Inspire New Ideas And Discoveries;
                     And Transform Scientific Advances Into Diagnoses Faster And New Ways To Treat Patients And Prevent Diseases. AIMS Is A Unique
                      Facility In The World That, Through Its Research, Integrates Modern And Traditional Forms Of Medicine To Provide Accessible 
                      And Affordable Healthcare.</p>
            <h4>"COMMITTED TO THE BEST CARE OF OUR PATIENTS"</h4>
                     <p> "All the AIMS staff and surgeons involved in
                       the care of the morbidly obese are to be congratulated for their dedication to making a difference in so many lives. Our 
                       faculty and staff work together as a team to bring each patient the highest quality of care in a warm, friendly and 
                       professional environment".AIMS Hospital is one of India's best Super speciality Hospital in Jabalpur M.P. located at 
                       central India, a bustling town in the National Capital Region. Founded by neurosurgeon, Dr. B. K. Pansey, who is the 
                       pioneer in bringing the Neurosurgery in Mahakaushal in 13 September 1989. The institution has been envisioned with the
                        AIMS of bringing to the highest standards of medical care along with clinical research, education and training. An AIMS
                         is governed under the guiding principles of providing medical services to patients with care, compassion, commitment. 
                         The top, best and finest Neurology hospitals in Jabalpur. Also expaneded and has become one of the Top hospital in Jabalpur .</p> 
                         
        </div>
        </sectionaboutdes>
        </>
        )
}

export default About;
