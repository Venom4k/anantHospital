import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Mdmessage.css";

function Md(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>
        <sectionmd className='containermd'>
        <div className='cardmd'>
            <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">ANANT INSTITUTE OF MEDICAL SCIENCES AIMS</h4>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">I welcome all the visitors to the official portal of <b>ANANT INSTITUTE OF MEDICAL SCIENCES.</b>
                    The vision of ANANT INSTITUTE OF MEDICAL SCIENCES began many years before it was finally crystallized. A 
                    vision to provide world-class services to every citizen of india.<br/><br/> Neurosurgical development was done 
                    from scratch he has brought the concept of no joint operation theatre.<br/><br/> We developed the concept of a 
                    collaborative team, working together to provide comprehensive care to patients, and demonstrating that 
                    modern medicine, in totality, it could be practised only through organized, complementary multispecialty teams.<br/><br/>
                    ANANT INSTITUTE OF MEDICAL SCIENCES has the vision of providing establishments set on the principles of competence,
                    commitments, compassion, convenience and effectiveness. We through our outreach aim at redefining the meaning of 
                    healthcare and its dimentions. We believe in being the true 'Partners in Health'- for the community, ensuring that 
                    along with guidance, attention and care, expertise is delivered with cutting edge technology and precision.</p>
        </div>

        <div className="containerimg">
            {/* Carousel  */}
        <div id="demo" className="carousel slide " data-bs-ride="carousel">

                    {/* Indicators/d ots  */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

            {/* The slideshow/carousel  */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../JSX/Images/DSC02456.jpg")} alt="Los Angeles" className="d-block responsiveimageslider" style={{width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../JSX/Images/DSC02452.jpg")} alt="Chicago" className="d-block" style={{width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                         <img src={require("../JSX/Images/DSC02459.jpg")} alt="New York" className="d-block" style={{width:'100%'}}/>
                    </div>
                </div>

            {/* Left and right controls/icons  */}
                <button className="carousel-control-prev " type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
        </div></div>

        <div className='cardpara'>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="60">We at ANANT INSTITUTE OF MEDICAL SCIENCES believe that the journey of success 
            needs forces of passion & dedication. These are imperative for growth and quality 
            performance and we want to evolve as a corporate with a 'conscious'.The taproot
             of our hospital is to render sincere and prompt service with affordable rates to
              needy patients with a tenacious mind to avoid tedious opportunities to our clients.
             We have all important Departments with qualified and professional doctors and relevant
              staff even from different parts of India and equipped with all necessary advanced equipment.
            This realization laid the foundation of one of the components of our mission - making modern 
            medicine affordable and accessible to all.<br/>
            For us, our accomplishments and our happy moments shall encompass from saving lives and 
            making every patient who walks into the portals of ANANT INSTITUTE OF MEDICAL SCIENCES 
            healthy and fit.<br/>Wishing a healthy life to all.<br/>Dr.B.K PANSEY<br/>Managing Director</p>
        </div>


        </sectionmd>
        </>
        )
}

export default Md;