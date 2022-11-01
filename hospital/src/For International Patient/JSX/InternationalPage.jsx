import {Navigation} from "../../Navigation";
import {Getappointment} from "./Getappointment";
import {InternationalPatient} from "./InternationalPatient";
import {Footer} from "../../Footer"
function InternationalPage(){
    return(
        <>
        <Navigation/>
        <Getappointment/>
        <InternationalPatient/>
        <Footer/>
        

        </>
    )
}

export {InternationalPage}