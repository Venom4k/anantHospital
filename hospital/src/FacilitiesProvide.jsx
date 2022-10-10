import "./FacilitiesProvide.css"
function FacilitiesProvide() {
    return (
        <>
            <div className='contains'>
                <h1 className='heading'>What Facilities we Provide ?</h1>
                <div className='boxx'>

                    <div className='leftt'> <img className="girlDoctor" src={require('./images/Doctor.png')}/> </div>
                    <div className='rightt'>

                        <div className='fbox'>

                            <div className='s-left'><img className="responsiveimg" src={require(`./images/Fimage/ambulance.png`)} /></div>
                            <div className='s-right'>AIMS PROVIDE 24/7 AMBULANCE FACILITIES AROUND JABALPUR SANSKARDHANI</div>

                        </div>

                        <div className='fbox'>

                          <div className='s-left'><img className="responsiveimg" src={require("./images/Fimage/accident.png")}/></div>
                            <div className='s-right'>AIMS HAVE EXPERT & DEDICATED DOCTORS WITH BEST ACCIDENTAL TRAUMA UNIT</div>

                            </div>

                        <div className='fbox'> 

                           <div className='s-left '><img className="responsiveimg" src={require("./images/Fimage/medical.png")} /></div>
                            <div className='s-right'>AIMS HAVE BEST SUPER SPECIALIST EXPERT & DEDICATED DOCTORS TEAM.</div>

                            </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export { FacilitiesProvide };
