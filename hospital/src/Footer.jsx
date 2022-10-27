 import "./Footer.css";

function Footer (){
    return (
        <>
                <div className="footerbox">
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className="colsfoot"><b/>About AIMS</h2>
                            <br/><p className="parafooter" >ANANT INSTITUTE OF MEDICAL SCIENCES Jabalpur is one of the finest hospitals in Madhya Pradesh.
                                It is just 3 Kms away from jabalpur Main station & 1/2 Km from Madan Mahal Station. We provide the 
                                best medical care at lowest cost.
                            </p>
                        </div>
                        <div className="col-sm-2" >
                            <h2 className="colsfoot"><b/>Quick Links</h2>
                                <br/><p className="parafooter"  >Health Tips<br/><br/>News & Event<br/><br/>Privacy Policy<br/><br/>Health & Checkup Packages<br/><br/>Corporate & Insurances<br/><br/>Book Appointments<br/><br/>Admin Login<br/><br/>FAQs
                                </p>
                        </div>
                         {/* <div className="col-sm-3" >
                            <h2 className="colsfoot"><b/>Contact Us</h2>
                                <br/><p className="parafooter" >Madan Mahal Station Road Wright Town,Jabalpur(M.P)<br/><br/>+91-0761-2402594, 2411962<br/><br/>appointment@ananthospital.org
                                </p>
                        </div>    */}
                        <div className="col-sm-3" >
                        <h2 className="colsfoot"><b/>Contact Us<br/></h2>
                        
                           <br/> <div className="row social">
                                <div className="col-sm-3 ">hhdfnf</div>
                                <div className="col-sm-9 ">Madan Mahal Station Road Wright Town,Jabalpur(M.P)</div>
                            </div>
                            <br/> <div className="row social">
                                <div className="col-sm-3 ">jhhgh</div>
                                <div className="col-sm-9">+91-0761-2402594, 2411962</div>
                            </div>
                            <br/><div className="row social">
                                <div className="col-sm-3 ">fvnj</div>
                                <div className="col-sm-9">appointment@ananthospital.org</div>
                            </div>
                    </div>

                    <div className="col-sm-3" >
                        <h2 className="colsfoot"><b/>Social Media</h2>
                        
                        <br/>  <div className="row social">
                                <div className="col-sm-3 ">hhdfnf</div>
                                <div className="col-sm-9 ">Facebook</div>
                            </div>
                            <br/><br/>  <div className="row social">
                                <div className="col-sm-3 ">jhhgh</div>
                                <div className="col-sm-9">Instagram</div>
                            </div>
                            <br/><br/>   <div className="row social">
                                <div className="col-sm-3 ">fvnj</div>
                                <div className="col-sm-9">Twitter</div>
                            </div>
                    </div>
                    </div>
                </div>

                 <div>
                 <footer className="belofooter">Design & Develop:- Doaguru</footer>
                </div>
                
    
   </>
    );
}
export {Footer};