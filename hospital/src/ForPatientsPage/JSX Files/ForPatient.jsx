import {Navigation} from "../../Navigation.jsx";
import {Heading} from "./Heading";
import {AddmissionSection} from "./AddmissionSection";
import {DischargeSection} from "./DischargeSection"
import {VisitorSection} from "./VisitorSection"
import {SafetySection} from "./SafetySection"
function ForPatient(){
    return(<>
        
        <Navigation/>
        <Heading/>
        <AddmissionSection/>
        <DischargeSection/>
        <VisitorSection/>
        
  
        

        
        </>)
}
export {ForPatient};