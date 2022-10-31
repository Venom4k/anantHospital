import "../src/Footer.css"
function Footer(){
    return (
        <>
        <div className="Footer">
        
     <div className=" abouthospital footerSections">
     
     <h1 className="subheadingfooter">About AIMS</h1>
<p className="parahospital">
ANANT INSTITUTE OF MEDICAL SCIENCES Jabalpur is one of the finest hospital in Madhya Pradesh. It is just 3kms away from Jabalpur Main Station & 1/2 km from Madan Mahal Station. We provide the best medical care at lowest cost.</p>
     </div>
     <div className=" quickLink footerSections">
     <h1 className="subheadingfooter">Quick Links</h1>
     <ul className="quicklinklist">
    <li>Health Tips</li>
    <li>News & Event</li>
    <li>Privacy & Policy</li>
    <li>Health & Checkup Packages</li>
    <li>Coperate & Insurances</li>
    <li>Book Appointment</li>
    <li>Admin Login</li>
    <li>FAQs</li>
     
     </ul>
     </div>
     <div className=" contactSection footerSections">
     
     <h1 className="subheadingfooter">Contact Us</h1>
<div className="subcontactsections">
<img className="contactIcon" src={require("./placeholder.png")}/>
<p className="subcontactdetail" >Madan Mahal Station Road
Wright Town,Jabalpur(M.P) </p>
</div>
<div className="subcontactsections">
<img className="contactIcon" src={require("./call.png")}/>
<p className="subcontactdetail" >+91-0761-2402594, 2411962 </p>
</div>
<div className="subcontactsections">
<img className="contactIcon" src={require("./gmail.png")}/>
<p className="subcontactdetail" >appointment@ananthospital.org </p>
</div>
 
     </div>
     <div className=" socialMedia footerSections">
     

     <h1 className="subheadingfooter">Social Media</h1>
<div className="subcontactsections">
<img className="contactIcon" src={require("./facebook.png")}/>
<p className="subcontactdetail" >FaceBook</p>
</div>
<div className="subcontactsections">
<img className="contactIcon" src={require("./instagram.png")}/>
<p className="subcontactdetail" >Instagram </p>
</div>
<div className="subcontactsections">
<img className="contactIcon" src={require("./twitter.png")}/>
<p className="subcontactdetail" >Twitter </p>
</div>







     </div>
        </div>
        <div className="developeby">
        <h1 className="developheading">Design & Developed By : Aditya Kanojiya</h1>
        </div>









        </>
    );
}

export {Footer}