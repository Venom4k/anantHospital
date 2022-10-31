import "../Css Files/AddmissionSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function AddmissionSection(){
    useEffect(()=>{
        AOS.init(
           
            
        );
       },[])

    return(
        <>
  

        <div className="containerr">

        <div className="carder12" data-aos="fade-right" data-aos-duration="800">
            <div className="boxer21">
                <div className="contenter21">
                     
                    <h3>01</h3>
                    <p>Please write or enquire us about your health related problems via email at consultant@ananthospital.org or by directly calling us on our given fixed line numbers.
                    </p>
                   
                </div>
            </div>
        </div>
        <div className="carder12" data-aos="fade-right" data-aos-duration="800"  data-aos-delay="150">
            <div className="boxer21">
                <div className="contenter21">
                    


                    <h3>02</h3>
                    <p>After the contact is made with the earlier medical records.Our doctor will go through the medical records and Institute.
                    </p>
                   
                </div>
            </div>
        </div>
        <div className="carder12" data-aos="fade-right" data-aos-duration="800" data-aos-delay="250">
            <div className="boxer21">
                <div className="contenter21">

                     
                    <h3>03</h3>
                    <p>Based on the doctor's advice,the patient will be given a date of appointment on which the patient has to come to the Hospital for registration and consultation with our doctor.
                    </p>
                   
                </div>
            </div>
        </div>

        <div className="carder12" data-aos="fade-right" data-aos-duration="800" data-aos-delay="150">
            <div className="boxer21">
                <div className="contenter21">
                     
                    <h3>04</h3>
                    <p>Depending on the intensity of the patient's condition,the doctor will add them to our computerized list of patients,and they will be called as soon as their turn comes.</p>
             
                </div>
            </div>
        </div>
    </div>


        </>
    )
}
export {AddmissionSection};