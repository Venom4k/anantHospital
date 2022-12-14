import "../Css Files/CashlessSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function CashlessSection() {
  useEffect(()=>{
    AOS.init(
       
            
    );
   },[])
  

  return (
    <>
    <div className="forpatientheading">
    <h1 className="patientheading">CASHLESS FACILITY</h1>
    </div>
      <div className="cashlessSection">

        <div className="DividerBox">
          <div className="leftBox">
          <h1 className="InsuranceHeading">INSURANCE HEALTHCARE PROVIDER </h1>

            <div className="InsuranceBoxer">
           
            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance1.jpg")}
              />
              <div className="details">
                <h2 className="logoname">STAR HEALTH & ALLIED INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>

            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance2.jpg")}
              />
              <div className="details">
                <h2 className="logoname">ICICI LOMBARD INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>

            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance3.jpg")}
              />
              <div className="details">
                <h2 className="logoname">MAX BUPA HEALTH INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>

            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance4.jpg")}
              />
              <div className="details">
                <h2 className="logoname">APOLLO MUNICH HEALTH INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>


            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance5.jpg")}
              />
              <div className="details">
                <h2 className="logoname">CIGNA TTK
                  HEALTH INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>


            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance6.jpg")}
              />
              <div className="details">
                <h2 className="logoname">RELIGARE
                  HEALTH INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>


            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance7.jpg")}
              />
              <div className="details">
                <h2 className="logoname">NEW INDIA
                  ASSURANCE
                  INSURANCE COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>


            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance8.jpg")}
              />
              <div className="details">
                <h2 className="logoname">ORIENTAL
                  INSURANCE
                  COMPANY LIMITED</h2>
                <button className="btner">Read More</button>
              </div>
            </div>

            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance9.jpg")}
              />
              <div className="details">
                <h2 className="logoname">NATIONAL
                  INSURANCE
                  COMPANY</h2>
                <button className="btner">Read More</button>
              </div>
            </div>


            <div className="InsuranceBox">
              <img
                className="imgresponsive"
                src={require("../Css Files/insurance10.jpg")}
              />
              <div className="details">
                <h2 className="logoname">BAJAJ ALLIANZ GENERAL INSURANCE</h2>
                <button className="btner">Read More</button>
              </div>
            </div>

          </div>
          </div>



          <div className="RightBox">
            <div className="pheadingbox">
              <div className="psheadingbox">
                <h1 className="pheading">PUBLIC SECTOR</h1>
              </div>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/CGHS.jpg")} />
              <h1 className="psubheading">CGHS (CENTRAL GOVERNMENT HEALTH SCHEME)</h1>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/ECHS.jpg")} />
              <h1 className="psubheading">CSMA (CENTRAL SERVICES MEDICAL ATTENDANCE)</h1>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/COAL.jpg")} />
              <h1 className="psubheading">ECHS (EX SERVICEMEN CONTRIBUTORY HEALTH SCHEME)</h1>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/WCR.jpg")} />
              <h1 className="psubheading">COAL INDIA MINING COMPANY</h1>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/MP POLICE.jpg")} />
              <h1 className="psubheading">WCR (WEST CENTRAL RAILWAY)
              </h1>
            </div>

            <div className="pbox">
              <img className="imgresponsives" src={require("../Css Files/STATE.jpg")} />
              <h1 className="psubheading">MP POLICE ( MADHYA PRADESH )</h1>
            </div>

           

          </div>
        </div>
      </div>
    </>
  );
}
export { CashlessSection };
