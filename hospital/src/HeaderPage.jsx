import "./index.css"
import {Navigation} from "./Navigation"
import {FrontPage} from "./FrontPage"
import {AboutHospital} from "./AboutHospital";
import {FacilitiesProvide} from "./FacilitiesProvide"


function HeaderPage(){
return(
    <>
    <Navigation/>
    <FrontPage/>
    <AboutHospital/>
    <FacilitiesProvide/>
    
        </>
);
}
export {HeaderPage};