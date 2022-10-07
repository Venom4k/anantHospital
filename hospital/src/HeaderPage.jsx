import "./index.css"
import {Navigation} from "./Navigation"
import {FrontPage} from "./FrontPage"
import {AboutHospital} from "./AboutHospital";


function HeaderPage(){
return(
    <>
    <Navigation/>
    <FrontPage/>
    <AboutHospital/>
    </>
);
}
export {HeaderPage};