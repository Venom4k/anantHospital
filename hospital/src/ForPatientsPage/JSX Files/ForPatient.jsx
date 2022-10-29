import {Navigation} from "../../Navigation.jsx";
import {Heading} from "./Heading";
import {AddmissionSection} from "./AddmissionSection";
import {VisitorSection} from "./VisitorSection";
import {SafetySection} from "./SafetySection";
import {OurResponsibilities} from "./OurResponsibilities";
import {CashlessSection} from "./CashlessSection";
import {LoginForm} from "./LoginForm"
// import {FAQSection} from "./FAQSection"
function ForPatient(){
    return(<>
       
        <Navigation/>
        <Heading/>
        <AddmissionSection/>
        <VisitorSection/>
        <SafetySection/>
        <OurResponsibilities/>
        <CashlessSection/>
        <LoginForm/>
       
        
        
        
  
        

        
        </>)
}
export {ForPatient};