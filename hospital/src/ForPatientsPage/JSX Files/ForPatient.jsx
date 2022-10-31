import {Navigation} from "../../Navigation.jsx";
import {Heading} from "./Heading";
import {AddmissionSection} from "./AddmissionSection";
import {DischargeSection} from "./DischargeSection"
import {VisitorSection} from "./VisitorSection";
import {SafetySection} from "./SafetySection";
import {OurResponsibilities} from "./OurResponsibilities";
import {CashlessSection} from "./CashlessSection";
import {LoginForm} from "./LoginForm";
import {FAQSection} from "./FAQSection";
import {Footer} from "../../Footer";
 
function ForPatient(){
    return(<>
       
        <Navigation/>
        <Heading/>
        <AddmissionSection/>
        <DischargeSection/>
        <VisitorSection/>
        <SafetySection/>
        <OurResponsibilities/>
        <CashlessSection/>
        <LoginForm/>
        <FAQSection/>
         
        <Footer/>
       
        
        
        
  
        

        
        </>)
}
export {ForPatient};