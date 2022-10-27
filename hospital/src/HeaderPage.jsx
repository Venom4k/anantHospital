import { Navigation } from "./Navigation";
import { FrontPage } from "./FrontPage";
import { AboutHospital } from "./AboutHospital";
import { NeumorphismsCard } from "./NeumorphismsCard";
import { FacilitiesProvide } from "./FacilitiesProvide";
import { ServicesSection } from "./ServicesSection";
import {OurPillars} from "./OurPillars"
import {Testimonialsection} from './Testimonialsection';


function HeaderPage() {
    return (
        <>
            <Navigation/>
            <FrontPage/>
            <AboutHospital/>
            <NeumorphismsCard/>
            <FacilitiesProvide/>
            <ServicesSection/>
            <OurPillars/>
            <Testimonialsection/>
            




        </>
    );
}
export { HeaderPage };