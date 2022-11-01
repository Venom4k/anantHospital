import "../CSS/InternationalPatient.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function InternationalPatient() {


  useEffect(()=>{
    AOS.init();
        },[])

  return (
    <>
    <div className="InternationalSection">
   <div className="bigheading" data-aos="fade-up" data-aos-duration="800"  data-aos-offset="200">
   <div className="bigheadingbox">
   <h1 className="realbigheading">International Patients</h1>
   </div>
   </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Facilities for International Patient</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Process</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Checklist</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#document" type="button" role="tab" aria-controls="contact" aria-selected="false">Document Needed</button>
        </li>


      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

          <div id="badhabox">
            <div className="patientbox">
              <div className="headingBox">
                <div className="borderboxheading">
                  <h1 className="realheading">
                    We Assist Our International Patient By :
                  </h1>
                </div>
              </div>

              <ul>
                <li> Online consultation is provided through our teleconsultation services before they arrive in India. </li>
                <li>  We Prepare easy and affordable travel packages for them.</li>
                <li> Helping them with Visa processing.</li>
                <li> Guide them with their travel to India. </li>
                <li>Provides Airport Pick and Drop services to our patients. </li>

              </ul>
            </div>

            <div className="patientbox">
              <div className="headingBox">
                <div className="borderboxheading">
                  <h1 className="realheading">
                    Financial Information:
                  </h1>
                </div>
              </div>

              <ul>
                <li>Our Help Desk Managers or Insurance Coordinators can be contacted directly via phone or by email at info@ananthospital.org for seeking any information regarding health checkup plans or services at the hospital
                </li>
                <li>All the international patients need to deposit the applicable amount mentioned at the time of admittance.
                </li>
                <li> In case of any transfers related to funds , to the hospital’s account, please contact us at accounts@ananthospital.org</li>


              </ul>
            </div>

            <div className="patientbox">
              <div className="headingBox">
                <div className="borderboxheading">
                  <h1 className="realheading">
                    Insurance:</h1>
                </div>
              </div>

              <ul>
                <li>The hospital offers a cashless facility to patients who would like help in medical services through insurance agencies. For further information, you can contact the Insurance Coordinator
                </li>



              </ul>
            </div>

            <div className="patientbox">
              <div className="headingBox">
                <div className="borderboxheading">
                  <h1 className="realheading">
                    Language Interpretation:
                  </h1>
                </div>
              </div>

              <ul>
                <li>Language interpreter service is made available on request to make your communication easy.
                </li>



              </ul>
            </div>

            <div className="patientbox">
              <div className="headingBox">
                <div className="borderboxheading">
                  <h1 className="realheading">
                    Discharge of Patients & Bill Settlement:            </h1>
                </div>
              </div>

              <ul>
                <li>The discharge process is initiated only after the Consultant says the patient is fit for discharge and completes the discharge summary.
                </li>
                <li>It takes about one to two hours to process the discharge and prepare the final bill.
                </li>
                <li>On confirmation of discharge, the documents, medication, and formalities of the final bill will be taken forward.
                </li>
                <li>We accept payment via all major credit cards, online transfers, and also via cash.
                </li>
                <li>The discharge summary that includes drug prescriptions, investigation reports, and medicines will be handed over to the patient.
                </li>
                <li>The medical certificate is issued on request.
                </li>



              </ul>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        

<div id="badhabox">

<div className="processbigbox">
<div className="headingBox">
  <div className="borderboxheading">
    <h1 className="realheading">
 Process:
    </h1>
  </div>
</div>
<div className="processbox">
 
<div className="itemss">
<p className="para">Online Enquiry</p>
<p className="para">Doctors Consultation</p>
</div>
<div className="itemss">
<p className="para">Travel Arrangement</p>
<p className="para">Visa Guidance</p>
</div>
<div className="itemss">
<p className="para">Arranging Accommodation & Arrivals</p>
<p className="para">Operation Consultation With The Doctor</p>
</div>
<div className="itemss">
<p className="para">Surgery, (If Required)</p>
<p className="para">Follow Up</p></div>
</div> 
 
</div>





</div>

        
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div id="badhabox">
        <div className="patientbox">
        <div className="headingBox">
          <div className="borderboxheading">
            <h1 className="realheading">
              Checklist:</h1>
          </div>
        </div>

        <ul>
          <li>Passport
          </li>
          <li>Visa
          </li>
          <li>Air Tickets
          </li>
          <li>Travelers Cheque, Money, Credit Cards
          </li>
          <li>Old Medical Records & Online Consultation Mails(Xerox)
          </li>
          <li>It is suggested to take copies of all your important documents like passport, visa, air tickets, traveler's cheque details and keep this information discrete from the original ones.
          </li>
        </ul>

      </div>
      </div>
        
        </div>

        <div class="tab-pane fade" id="document" role="tabpanel" aria-labelledby="contact-tab">
        <div id="badhabox">
        <div className="patientbox">
        <div className="headingBox">
          <div className="borderboxheading">
            <h1 className="realheading">
              Document Needed:</h1>
          </div>
        </div>

        <ul>
          <li>Old Medical Reports
          </li>
          <li>Passport
          </li>
          <li>Visa
          </li>
          <li>A Copy Of The Citation And Treatment Plan Given By Anant Hospital
          </li>
          <li>Photographs (Passport Size)
          </li>
         
        </ul>

      </div>
      </div>
        
        </div>
      </div>

      </div>
    </>
  );
}

export { InternationalPatient };
