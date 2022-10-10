import "./OurVision.css";
function OurVision(){
    return(
        <>
             <div className="containerr">

<div className="carder">
    <div className="boxer">
        <div className="contenter">
            <img className="responsiveicone" src={require('./images/vision.png')} />
            <h3>OUR VISION</h3>
            <p>To provide the best Quality HealthCare Services with human touch and holistic approach for patients with utmost care and complete dedication.</p>
            <a href="#">Read More</a>
        </div>
    </div>
</div>
<div className="carder">
    <div className="boxer">
        <div className="contenter">
            <img className="responsiveicone" src={require("./images/value.png")} />


            <h3>OUR MISSION</h3>
            <p>To provide the best Quality HealthCare Services with human touch and holistic approach for patients with utmost care and complete dedication.</p>
            <a href="#">Read More</a>
        </div>
    </div>
</div>
<div className="carder">
    <div className="boxer">
        <div className="contenter">

            <img className="responsiveicones" src={require("./images/mission.png")} />
            <h3>OUR VALUE</h3>
            <p>To be a Multi specialty health provider with modern technology and advanced therapies as well as an educational and research institute dedicated for excellence</p>
            <a href="#">Read More</a>
        </div>
    </div>
</div>

<div className="carder">
    <div className="boxer">
        <div className="contenter">
            <img className="responsiveicones" src={require("./images/dedication.png")} />
            <h3>OUR VALUE</h3>
            <p>AIMS has a team of Dedicated doctors, well equipped Laboratories and Operation Theatres. Our team of doctors are always ready to deal with every critical condition</p>
            <a href="#">Read More</a>
        </div>
    </div>
</div>
</div>
        </>
    );
}
export {OurVision};