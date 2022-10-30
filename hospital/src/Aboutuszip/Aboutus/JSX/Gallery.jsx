import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../CSS/Gallery.css";

function Gallery(){
  
    useEffect(()=>{
        AOS.init(
             
        );
          },[])
    return(
        <>

<div className="InternationalSection">
   <div className="bigheading">
   <div className="bigheadingbox">
   <h1 className="realbigheading">Gallery</h1>
   </div>
   </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Cervical Cancer</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Conferance Hall</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Dr. Nachiket Sir Birthday Celebration </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className='groupofimage'>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02456.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02456.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02456.jpg")} alt=""/>
  <img  className='respimagegallery' src={require("../JSX/Images/DSC02456.jpg")} alt=""/>
  </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className='groupofimage'>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02459.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02459.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02459.jpg")} alt=""/>
  
  </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className='groupofimage'>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02452.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02452.jpg")} alt=""/>
  <img className='respimagegallery' src={require("../JSX/Images/DSC02452.jpg")} alt=""/>
  <img  className='respimagegallery' src={require("../JSX/Images/DSC02452.jpg")} alt=""/>
  
  </div>
  </div>
</div>
    </div>
      </>
    )
}
export default Gallery