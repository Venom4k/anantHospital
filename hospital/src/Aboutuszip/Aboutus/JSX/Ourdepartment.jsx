import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Ourdepartment.css";

function Department(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
        <div className='headingdepart'data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60"> <h1>Our Department</h1></div>
        <sectionmd className='containerdepart'>
        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/NEUROLOGIST.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>NEUROLOGY & NEUROPHYSICIAN</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/GeneralSurgery.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>GENERAL SURGERY & GASTROENTROLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row">
                    <div className="col-sm-3 ">
                        <img src={require("../JSX/Images/Orthopaedic.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>ORTHOPEDIC & JOINT REPLACEMENT SURGERY</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Criticalcare.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>MEDICINE & CRITICAL CARE</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Dentist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>ORAL & MAXOFACIAL SURGERY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/ent.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>ENT & OTORHINOLARYNGOLOGY</h4>
                    </div>
                </div>
            </div>
        </div>  

        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/CARDIOLOGIST.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>CARDIOLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Endoscopic Surgeon.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>LAPROSCOPIC SURGERY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row">
                    <div className="col-sm-3 ">
                        <img src={require("../JSX/Images/Gynaecologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>GYNAEC & OBSTETRICS</h4>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3 ">
                        <img src={require("../JSX/Images/Plastic.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>PLASTIC SURGERY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Peadiatrics.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>PEADIATRICS</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row">
                    <div className="col-sm-3 ">
                        <img src={require("../JSX/Images/Oncologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>ONCOLOGY SURGERY</h4>
                    </div>
                </div>
            </div>
        </div>  

        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Urologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>UROLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3  ">
                        <img src={require("../JSX/Images/Anesthesiologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>ANESTHESIOLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row">
                    <div className="col-sm-3 ">
                        <img src={require("../JSX/Images/Opthalmologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>OPTHALMOLOGY</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Pathology.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>PATHOLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
                <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Nephrologist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>NEPHROLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart">
            <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Psychiatric.png")} alt=""/>
                    </div>
                    <div className="col-sm-9" >
                        <h4>PSYCHIATRIC</h4>
                    </div>
                </div>
            </div>
        </div>  

        <div className="containerdepart">
            <div className="boxdepart">
                <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Radiology.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>RADIOLOGY</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart" >
                <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Chest Physician.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>GENERAL PHYSICIAN</h4>
                    </div>
                </div>
            </div>
            <div className="boxdepart" >
            <div className="row" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                    <div className="col-sm-3 " data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">
                        <img src={require("../JSX/Images/Physiotherepist.png")} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h4>PHYSIOTHERAPY</h4>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="containerdepart">
            <div className="boxdepart">
                <div className="row">
                    <div className="col-sm-3 bg-dark ">
                        <img src={"./Images/Dietician.png"} alt=""/>
                    </div>
                    <div className="col-sm-9  ">
                        <h5>DIETICIAN</h5>
                    </div>
                </div> */}
            {/* </div> */}
           
        {/* </div>   */}
        </sectionmd>
        </>
    )
}
export default Department;