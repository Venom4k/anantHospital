import "./FacilitiesProvide.css"

function FacilitiesProvide(){
    return(<>
        <div className="Containerbox">
        <h1 className="heading">What Facilities We Provide ? </h1>
        <div className="box">
        <div className="left-side">
        <img src={require("./images/Doctor.png")} className="imgset img-fluid"/>
        </div>
        <div className="right-side">
        <div className="item">Item-1</div>
        <div className="item">Item-2</div>
        <div className="item">Item-3</div>
        </div>

 
        </div>
         
        </div>
        
        
        </>);
}
export {FacilitiesProvide};