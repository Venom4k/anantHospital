 
 import "./Bookanappointment.css"

function Bookanappointment (){
    return (
        <>
        <div className="bgimger">
        <div className="bgblack5">
            <div className="getcontact">
                
            <div className="containerappointment">
            <h2>BOOK AN APPOINTMENT</h2>
        
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    {/* <input type="text" name="" required="required"/>
                    <span className="text"> */}
                        <select id="input-group" >
                            
                            <option value="Select Department" selected style={{textAlign:"center"}}>Select Department</option>
                            <option value="" style={{textAlign:"center"}}>Neurosurgery</option>
                            <option value="" style={{textAlign:"center"}}>Cardiology</option>
                            <option value="" style={{textAlign:"center"}}>General Surgery & Gastrologist</option>
                            <option value="" style={{textAlign:"center"}}>Neurophysician</option>
                        </select>
                    
                     <span className="line"></span> 
                </div>
            </div>
            {/* <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">Consultant name</span>
                    <span className="line"></span>
                </div>
            </div> */}
        </div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">Consultant Name</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">Patient Name</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="date" name="" required="required"/>
                    <span className="text">Appointment date</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                    <input type="time" name="" required="required"/>
                    <span className="text">Appointment time</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="" name="" required="required"/>
                    <span className="text">Mobile no.</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                    <input type="email" name="" required="required"/>
                    <span className="text">Email</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        
        <div className="row100">
            <div className="col">
                <div className="inputBox textarea">
                    <textarea required="required"></textarea>
                    <span className="text">Address</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox textarea">
                    <textarea required="required"></textarea>
                    <span className="text">Concern</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>

        <div className="btnsection">
        <button className="btnerr">Reset</button>
        <button className="btnerr">Submit</button>
        </div>
        
        </div>

            </div>
            </div>
            </div>
        </>
    )
}
export {Bookanappointment};