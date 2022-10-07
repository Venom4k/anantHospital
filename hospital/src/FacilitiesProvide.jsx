import "./FacilitiesProvide.css"

function FacilitiesProvide(){
    return(<>
        <div className="Containerbox">
        <h1 className="heading">What Facilities We Provide ? </h1>
        <div className="box">
        <div className="left-side">
        <img src={require("./images/Doctor.png")} className="imgset"/>
        </div>
        <div className="right-side"></div>


        </div>
         
        </div>
        
        
        </>);
}
export {FacilitiesProvide};