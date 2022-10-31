import "../Css Files/DischargeSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function DischargeSection(){

  useEffect(()=>{
    AOS.init(
    );
   },[])


    return(
    <>
  <div className="DischargeSection">
  <div className="fordischargeheading">
  <h1 className="dischargeheading">Discharge Process</h1>
  </div>
  <div className="sectionDivider">
  <div className="aos_less"  data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"> 
   <div className="processBox">
  <ol className="processlistbox" style={{listStyleType:"number"}} >
    <li> When the doctor feels that the patient has recovered from the illness and is completely fit be discharge.</li>
    <li>He will ask the medical staff to get the patient discharged.</li>
    <li>The patients are relieved with all the discharge documentation includes their fitness certificate</li>
    <li>Proper instruction and medication regime,will be provided to the patient with a doctor"s prescription for the continued care</li>
    <li>For any further medical assitance or queries,you can connect us online via email or phone.</li>
    </ol>
  </div>
  </div>

<div className="aos_less" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"> 
 <div className="photobox">
  <img className="dischargeimg" src={require("../Css Files/OurResponsibilities.jpg")}/>
  </div>
  </div>



  </div>
  </div>

    </>
    )
}

export {DischargeSection};