import "../CSS/Getappointment.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Getappointment() {

    useEffect(()=>{
        AOS.init();
            },[])

    return (
        <>
        <div className="bgimger">
        <div className="bgblack5">
            <div className="getcontact">
                
                    <div className="containerappointment" data-aos="zoom-in-up" data-aos-duration="800">
                        <h2>GET APPOINTMENT</h2>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required="required"   />
                                    <span className="text">Name of Patient</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    {/* <input type="text" name="" required="required"/> */}
                                    <select id="input-group"  >
                                        <option className="departments"  value="Select Department">Select Department</option>
                                        <option className="departments"  value="">Neurosurgery</option>
                                        <option className="departments"  value="">Neuro physician</option>
                                        <option className="departments"  value="">Cardiologist</option>
                                        <option className="departments"  value="">General Surgery & Gastrologist</option>
                                        <option className="departments"  value="">Endoscopic Surgeon</option>
                                        <option className="departments"  value="">Urology</option>
                                        <option className="departments"  value="">Gynaecology & Obstratic</option>
                                        <option className="departments"  value="">Physician</option>
                                        <option className="departments"  value="">Chest physician</option>
                                        <option className="departments"  value="">Orthopedic</option>
                                        <option className="departments"  value="">ENT</option>
                                        <option className="departments"  value="">Plastic surgery</option>
                                        <option className="departments"  value="">Opthalmology</option>
                                        <option className="departments"  value="">Pediatrician</option>
                                        <option className="departments"  value="">Nephrologist</option>
                                        <option className="departments"  value="">Oncology</option>
                                        <option className="departments"  value="">Psychiatric</option>
                                        <option className="departments"  value="">Anesthesia</option>
                                        <option className="departments"  value="">Dental</option>
                                        <option className="departments"  value="">Psychology</option>
                                        <option className="departments"  value="">Dietician</option>
                                        <option className="departments"  value="">Pathology</option>
                                        <option className="departments"  value="">Radiology</option>
                                    </select> 

                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    <input type="number" name="" required="required" />
                                    <span className="text">Age</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="date" name="" required="required" />
                                    <span className="text">MM/DD/YYYY</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    <input type="number" name="" required="required" />
                                    <span className="text">Weight</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    {/* <input type="text" name="" required="required"/>
                        <span className="text">Kgs/Pound</span> */}
                                    <select id="input-group" >
                                        <option value="Select Department">Kgs/Pound</option>
                                        <option className="departments" value="">Kgs</option>
                                        <option className="departments" value="">Pounds</option>
                                    </select>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    {/* <input type="text" name="" required="required"/>
                        <span className="text">Gender</span> */}
                                    <select id="input-group" >
                                        <option value="Select Department">Gender</option>
                                        <option className="departments"  value="">Male</option>
                                        <option className="departments"  value="">Female</option>
                                        <option className="departments"  value="">Other</option>
                                    </select>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span className="text">City</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                <select id="input-group" >
                                <option value="Select Department" selected>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antartica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo">Congo, the Democratic Republic of the</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                <option value="Croatia">Croatia (Hrvatska)</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="France Metropolitan">France, Metropolitan</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                <option value="Holy See">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran (Islamic Republic of)</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                <option value="Korea">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon" >Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia, Federated States of</option>
                                <option value="Moldova">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                <option value="Saint LUCIA">Saint LUCIA</option>
                                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                <option value="Span">Spain</option>
                                <option value="SriLanka">Sri Lanka</option>
                                <option value="St. Helena">St. Helena</option>
                                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syrian Arab Republic</option>
                                <option value="Taiwan">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Viet Nam</option>
                                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span className="text">Mobile no.</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    {/* <input type="text" name="" required="required"/>
                        <span className="text">Select Medical Procedure</span> */}
                                    <select id="input-group" >
                                        <option value="Select Department">Select Medical Procedure</option>
  
                                        <option value="A1C Test for Diabetes">A1C Test for Diabetes</option>
                                        <option value="ACL reconstruction">ACL reconstruction</option>
                                        <option value="ANA test">ANA test</option>
                                        <option value="Abdominal Ultrasound Scan Test">Abdominal Ultrasound Scan Test</option>
                                        <option value="Abdominal hysterectomy">Abdominal hysterectomy</option>
                                        <option value="Active surveillance for prostate cancer">Active surveillance for prostate cancer</option>
                                        <option value="Acupuncture">Acupuncture</option><option value="Allergy shots">Allergy shots</option>
                                            <option value="Allergy skin tests">Allergy skin tests</option>
                                            <option value="Amniocentesis">Amniocentesis</option>
                                            <option value="Anger management">Anger management</option>
                                            <option value="Ankle-brachial index">Ankle-brachial index</option>
                                            <option value="Arm lift">Arm lift</option>
                                            <option value="Arthroscopy">Arthroscopy</option>
                                            <option value="BRCA gene test for breast cancer">BRCA gene test for breast cancer</option>
                                            <option value="Barium enema">Barium enema</option>
                                            <option value="Basal body temperature for natural family planning">Basal body temperature
                                                for natural family planning</option>
                                            <option value="Bilirubin test">Bilirubin test</option>
                                            <option value="Biofeedback: Using your mind to improve your health">Biofeedback: Using
                                                your mind to improve your health</option>
                                            <option value="Biophysical profile">Biophysical profile</option>
                                            <option value="Blepharoplasty">Blepharoplasty</option>
                                            <option value="Blood and bone marrow donation">Blood and bone marrow donation</option>
                                            <option value="Blood donation">Blood donation</option>
                                            <option value="Blood pressure test">Blood pressure test</option>
                                            <option value="Blood transfusion">Blood transfusion</option>
                                            <option value="Blood urea nitrogen (BUN) test">Blood urea nitrogen (BUN) test</option>
                                            <option value="Bone density test">Bone density test</option>
                                            <option value="Bone marrow biopsy and aspiration">Bone marrow biopsy and aspiration</option>
                                            <option value="Bone scan">Bone scan</option>
                                            <option value="Botox injections">Botox injections</option>
                                            <option value="Brachytherapy">Brachytherapy</option>
                                            <option value="Brain aneurysm surgery">Brain aneurysm surgery</option>
                                            <option value="Breast MRI">Breast MRI</option>
                                            <option value="Breast augmentation">Breast augmentation</option>
                                            <option value="Breast biopsy">Breast biopsy</option>
                                            <option value="Breast lift">Breast lift</option>
                                            <option value="Breast reconstruction with breast implants">Breast reconstruction with
                                                breast implants</option>
                                            <option value="Breast reconstruction with flap surgery">Breast reconstruction with flap
                                                surgery</option>
                                            <option value="Breast reduction surgery">Breast reduction surgery</option>
                                            <option value="Breast self-exam for breast awareness">Breast self-exam for breast awareness</option>
                                            <option value="Brow lift">Brow lift</option>
                                            <option value="Buttock lift">Buttock lift</option>
                                            <option value="C-reactive protein test">C-reactive protein test</option>
                                            <option value="C-section">C-section</option>
                                            <option value="CA 125 test">CA 125 test</option>
                                            <option value="CT coronary angiogram">CT coronary angiogram</option>
                                            <option value="CT scan">CT scan</option>
                                            <option value="Canalith repositioning procedure">Canalith repositioning procedure</option>
                                            <option value="Capsule endoscopy">Capsule endoscopy</option>
                                            <option value="Cardiac ablation">Cardiac ablation</option>
                                            <option value="Cardiac catheterization">Cardiac catheterization</option>
                                            <option value="Cardiac rehabilitation">Cardiac rehabilitation</option>
                                            <option value="Cardioversion">Cardioversion</option>
                                            <option value="Carotid angioplasty and stenting">Carotid angioplasty and stenting</option>
                                            <option value="Carotid ultrasound">Carotid ultrasound</option>
                                            <option value="Cataract surgery">Cataract surgery</option>
                                            <option value="Cervical cap">Cervical cap</option>
                                            <option value="Cervical cerclage">Cervical cerclage</option>
                                            <option value="Cervical mucus method for natural family planning">Cervical mucus method
                                                for natural family planning</option>
                                            <option value="Chemical peel">Chemical peel</option>
                                            <option value="Chemotherapy">Chemotherapy</option>
                                            <option value="Chemotherapy for breast cancer">Chemotherapy for breast cancer</option>
                                            <option value="Chest X-rays">Chest X-rays</option>
                                            <option value="Chiari malformation surgery">Chiari malformation surgery</option>
                                            <option value="Cholecystectomy (gallbladder removal)">Cholecystectomy (gallbladder removal)</option>
                                            <option value="Cholesterol test">Cholesterol test</option>
                                            <option value="Chorionic villus sampling">Chorionic villus sampling</option>
                                            <option value="Circumcision (male)">Circumcision (male)</option>
                                            <option value="Cognitive behavioral therapy">Cognitive behavioral therapy</option>
                                            <option value="Colectomy">Colectomy</option>
                                            <option value="Colonoscopy">Colonoscopy</option>
                                            <option value="Colposcopy">Colposcopy</option>
                                            <option value="Combination birth control pills">Combination birth control pills</option>
                                            <option value="Complete blood count (CBC)">Complete blood count (CBC)</option>
                                            <option value="Cordocentesis">Cordocentesis</option>
                                            <option value="Cornea transplant">Cornea transplant</option>
                                            <option value="Coronary angiogram">Coronary angiogram</option>
                                            <option value="Coronary angioplasty and stents">Coronary angioplasty and stents</option>
                                            <option value="Coronary bypass surgery">Coronary bypass surgery</option>
                                            <option value="Cortisone shots">Cortisone shots</option>
                                            <option value="Creatinine test">Creatinine test</option>
                                            <option value="Cryotherapy for prostate cancer">Cryotherapy for prostate cancer</option>
                                            <option value="Cystoscopy">Cystoscopy</option>
                                            <option value="Cytochrome P450 (CYP450) tests">Cytochrome P450 (CYP450) tests</option>
                                            <option value="Deep brain stimulation">Deep brain stimulation</option>
                                            <option value="Dental braces">Dental braces</option>
                                            <option value="Dental exam">Dental exam</option>
                                            <option value="Dental exam for children">Dental exam for children</option>
                                            <option value="Dental implant surgery">Dental implant surgery</option>
                                            <option value="Depo-Provera (contraceptive injection)">Depo-Provera (contraceptive injection)</option>
                                            <option value="Dermabrasion">Dermabrasion</option>
                                            <option value="Diaphragm">Diaphragm</option>
                                            <option value="Dilation and curettage (D&amp;C)">Dilation and curettage (D&amp;C)</option>
                                            <option value="Discogram">Discogram</option>
                                            <option value="Diskectomy">Diskectomy</option>
                                            <option value="EEG (electroencephalogram)">EEG (electroencephalogram)</option>
                                            <option value="Ear tubes">Ear tubes</option>
                                            <option value="Echocardiogram">Echocardiogram</option>
                                            <option value="Egg freezing">Egg freezing</option>
                                            <option value="Electrocardiogram (ECG or EKG)">Electrocardiogram (ECG or EKG)</option>
                                            <option value="Electroconvulsive therapy (ECT)">Electroconvulsive therapy (ECT)</option>
                                            <option value="Electromyography (EMG)">Electromyography (EMG)</option>
                                            <option value="Endometrial ablation">Endometrial ablation</option>
                                            <option value="Endoscopic mucosal resection">Endoscopic mucosal resection</option>
                                            <option value="Endoscopic ultrasound">Endoscopic ultrasound</option>
                                            <option value="Epilepsy surgery">Epilepsy surgery</option>
                                            <option value="Esophageal manometry">Esophageal manometry</option>
                                            <option value="External beam radiation for prostate cancer">External beam radiation
                                                for prostate cancer</option>
                                            <option value="Eye exam">Eye exam</option>
                                            <option value="Face transplant">Face transplant</option>
                                            <option value="Face-lift">Face-lift</option>
                                            <option value="Family therapy">Family therapy</option>
                                            <option value="Fecal occult blood test">Fecal occult blood test</option>
                                            <option value="Female condom">Female condom</option>
                                            <option value="Ferritin test">Ferritin test</option>
                                            <option value="Fetal fibronectin test">Fetal fibronectin test</option>
                                            <option value="Fetal ultrasound">Fetal ultrasound</option>
                                            <option value="First trimester screening">First trimester screening</option>
                                            <option value="Flexible sigmoidoscopy">Flexible sigmoidoscopy</option>
                                            <option value="Focused ultrasound surgery for uterine fibroids">Focused ultrasound surgery
                                                for uterine fibroids</option>
                                            <option value="Forceps delivery">Forceps delivery</option>
                                            <option value="Gamma Knife radiosurgery">Gamma Knife radiosurgery</option>
                                            <option value="Gastric bypass surgery">Gastric bypass surgery</option>
                                            <option value="Gene therapy">Gene therapy</option>
                                            <option value="General anesthesia">General anesthesia</option>
                                            <option value="Genetic testing">Genetic testing</option>
                                            <option value="Glucose challenge test">Glucose challenge test</option>
                                            <option value="Glucose tolerance test">Glucose tolerance test</option>
                                            <option value="Group B strep test">Group B strep test</option>
                                            <option value="HIDA scan">HIDA scan</option>
                                            <option value="HPV test">HPV test</option>
                                            <option value="Hand transplant">Hand transplant</option>
                                            <option value="Heart Transplant Test &amp; Procedure in India">Heart Transplant Test &amp; Procedure
                                                in India</option>
                                            <option value="Heart scan (coronary calcium scan)">Heart scan (coronary calcium scan)</option>
                                            <option value="Hematocrit test">Hematocrit test</option>
                                            <option value="Hemodialysis">Hemodialysis</option>
                                            <option value="Hemoglobin test">Hemoglobin test</option>
                                            <option value="Hip replacement">Hip replacement</option>
                                            <option value="Holter monitor">Holter monitor</option>
                                            <option value="Hormone therapy for breast cancer">Hormone therapy for breast cancer</option>
                                            <option value="Hormone therapy for prostate cancer">Hormone therapy for prostate cancer</option>
                                            <option value="Hyperbaric oxygen therapy">Hyperbaric oxygen therapy</option>
                                            <option value="Hypnosis">Hypnosis</option>
                                            <option value="Implantable cardioverter-defibrillators (ICDs)">Implantable cardioverter-defibrillators
                                                (ICDs)</option>
                                            <option value="In vitro fertilization (IVF)">In vitro fertilization (IVF)</option>
                                            <option value="Intrauterine insemination (IUI)">Intrauterine insemination (IUI)</option>
                                            <option value="Intravenous pyelogram">Intravenous pyelogram</option>
                                            <option value="Kidney biopsy">Kidney biopsy</option>
                                            <option value="Kidney transplant">Kidney transplant</option>
                                            <option value="Knee braces for osteoarthritis">Knee braces for osteoarthritis</option>
                                            <option value="Knee osteotomy">Knee osteotomy</option>
                                            <option value="Knee replacement">Knee replacement</option>
                                            <option value="LASIK eye surgery">LASIK eye surgery</option>
                                            <option value="Labor induction">Labor induction</option>
                                            <option value="Laminectomy">Laminectomy</option>
                                            <option value="Laparoscopic Adjustable Gastric Banded Plication (LAGBP)">Laparoscopic
                                                Adjustable Gastric Banded Plication (LAGBP)</option>
                                            <option value="Laparoscopic Gastric Greater Curvature Plication (LGGCP)">Laparoscopic
                                                Gastric Greater Curvature Plication (LGGCP)</option>
                                            <option value="Laparoscopic Mini Gastric Bypass">Laparoscopic Mini Gastric Bypass</option>
                                            <option value="Laparoscopic Roux-En-Y Gastric Bypass">Laparoscopic Roux-En-Y Gastric
                                                Bypass</option>
                                            <option value="Laparoscopic Sleeve Gastrectomy (LSG)">Laparoscopic Sleeve Gastrectomy
                                                (LSG)</option>
                                            <option value="Laparoscopic Sleeve Gastrectomy With Proximal Jejunum Bypass">Laparoscopic
                                                Sleeve Gastrectomy With Proximal Jejunum Bypass</option>
                                            <option value="Laryngotracheal reconstruction">Laryngotracheal reconstruction</option>
                                            <option value="Laser hair removal">Laser hair removal</option>
                                            <option value="Laser resurfacing">Laser resurfacing</option>
                                            <option value="Light therapy">Light therapy</option>
                                            <option value="Liposuction">Liposuction</option>
                                            <option value="Liver biopsy">Liver biopsy</option>
                                            <option value="Liver function tests">Liver function tests</option>
                                            <option value="Liver transplant">Liver transplant</option>
                                            <option value="Lumbar puncture (spinal tap)">Lumbar puncture (spinal tap)</option>
                                            <option value="Lumpectomy">Lumpectomy</option>
                                            <option value="Lung cancer screening">Lung cancer screening</option>
                                            <option value="Lung transplant">Lung transplant</option>
                                            <option value="MRI">MRI</option>
                                            <option value="Magnetic resonance elastography">Magnetic resonance elastography</option>
                                            <option value="Male condoms">Male condoms</option>
                                            <option value="Mammogram">Mammogram</option>
                                            <option value="Marriage counseling">Marriage counseling</option>
                                            <option value="Mastectomy">Mastectomy</option>
                                            <option value="Medical abortion">Medical abortion</option>
                                            <option value="Microalbumin test">Microalbumin test</option>
                                            <option value="Minipill (progestin-only birth control pill)">Minipill (progestin-only
                                                birth control pill)</option>
                                            <option value="Mirena (hormonal IUD)">Mirena (hormonal IUD)</option>
                                            <option value="Mohs surgery">Mohs surgery</option>
                                            <option value="Morning-after pill">Morning-after pill</option>
                                            <option value="Myomectomy">Myomectomy</option>
                                            <option value="Needle biopsy">Needle biopsy</option>
                                            <option value="Neonatal and pediatric heart surgery">Neonatal and pediatric heart surgery</option>
                                            <option value="Nephrectomy (kidney removal)">Nephrectomy (kidney removal)</option>
                                            <option value="Nitric oxide test for asthma">Nitric oxide test for asthma</option>
                                            <option value="Noninvasive prenatal testing">Noninvasive prenatal testing</option>
                                            <option value="Nonstress test">Nonstress test</option>
                                            <option value="Nuclear stress test">Nuclear stress test</option>
                                            <option value="NuvaRing (vaginal ring)">NuvaRing (vaginal ring)</option>
                                            <option value="Oophorectomy (ovary removal surgery)">Oophorectomy (ovary removal surgery)</option>
                                            <option value="Open prostatectomy">Open prostatectomy</option>
                                            <option value="Oral cancer screening">Oral cancer screening</option>
                                            <option value="Ortho Evra (contraceptive patch)">Ortho Evra (contraceptive patch)</option>
                                            <option value="Otoplasty">Otoplasty</option>
                                            <option value="PSA test">PSA test</option>
                                            <option value="Pacemaker">Pacemaker</option>
                                            <option value="Pancreas transplant">Pancreas transplant</option>
                                            <option value="Pap smear">Pap smear</option>
                                            <option value="ParaGard (copper IUD)">ParaGard (copper IUD)</option>
                                            <option value="Peak flow meter">Peak flow meter</option>
                                            <option value="Pelvic exam">Pelvic exam</option>
                                            <option value="Penile implants">Penile implants</option>
                                            <option value="Penis pump">Penis pump</option>
                                            <option value="Percutaneous nephrolithotomy">Percutaneous nephrolithotomy</option>
                                            <option value="Peritoneal dialysis">Peritoneal dialysis</option>
                                            <option value="Pillar procedure">Pillar procedure</option>
                                            <option value="Polysomnography (sleep study)">Polysomnography (sleep study)</option>
                                            <option value="Positron emission tomography (PET) scan">Positron emission tomography
                                                (PET) scan</option>
                                            <option value="Premarital counseling">Premarital counseling</option>
                                            <option value="Prostate biopsy">Prostate biopsy</option>
                                            <option value="Prostate brachytherapy">Prostate brachytherapy</option>
                                            <option value="Prostate laser surgery">Prostate laser surgery</option>
                                            <option value="Prothrombin time test">Prothrombin time test</option>
                                            <option value="Psychotherapy">Psychotherapy</option>
                                            <option value="Quad Screen Test">Quad Screen Test</option>
                                            <option value="Radiation therapy">Radiation therapy</option>
                                            <option value="Radiation therapy for breast cancer">Radiation therapy for breast cancer</option>
                                            <option value="Radiofrequency neurotomy">Radiofrequency neurotomy</option>
                                            <option value="Rectal prolapse surgery">Rectal prolapse surgery</option>
                                            <option value="Rh factor blood test">Rh factor blood test</option>
                                            <option value="Rheumatoid factor">Rheumatoid factor</option>
                                            <option value="Rhinoplasty">Rhinoplasty</option>
                                            <option value="Rhythm method for natural family planning">Rhythm method for natural
                                                family planning</option>
                                            <option value="SPECT scan">SPECT scan</option>
                                            <option value="Sclerotherapy">Sclerotherapy</option>
                                            <option value="Sed rate (erythrocyte sedimentation rate)">Sed rate (erythrocyte sedimentation
                                                rate)</option>
                                            <option value="Sentinel node biopsy">Sentinel node biopsy</option>
                                            <option value="Septoplasty">Septoplasty</option>
                                            <option value="Sex therapy">Sex therapy</option>
                                            <option value="Single-Incision Laparoscopic Surgery (SILS) or Zero Scar Bariatric Surgery">
                                                Single-Incision Laparoscopic Surgery (SILS) or Zero Scar Bariatric Surgery</option>
                                            <option value="Skin biopsy">Skin biopsy</option>
                                            <option value="Sperm donation">Sperm donation</option>
                                            <option value="Spermicide">Spermicide</option>
                                            <option value="Spinal fusion">Spinal fusion</option>
                                            <option value="Spirometry">Spirometry</option>
                                            <option value="Splenectomy">Splenectomy</option>
                                            <option value="Stem cell transplant">Stem cell transplant</option>
                                            <option value="Stool DNA test">Stool DNA test</option>
                                            <option value="Stress test">Stress test</option>
                                            <option value="Tattoo removal">Tattoo removal</option>
                                            <option value="Testicular exam">Testicular exam</option>
                                            <option value="Thyroidectomy">Thyroidectomy</option>
                                            <option value="Tilt table test">Tilt table test</option>
                                            <option value="Tonsillectomy">Tonsillectomy</option>
                                            <option value="Tracheostomy">Tracheostomy</option>
                                            <option value="Transcranial magnetic stimulation">Transcranial magnetic stimulation</option>
                                            <option value="Transurethral incision of the prostate (TUIP)">Transurethral incision
                                                of the prostate (TUIP)</option>
                                            <option value="Transurethral microwave therapy (TUMT)">Transurethral microwave therapy
                                                (TUMT)</option>
                                            <option value="Transurethral needle ablation (TUNA)">Transurethral needle ablation (TUNA)</option>
                                            <option value="Transurethral resection of the prostate (TURP)">Transurethral resection
                                                of the prostate (TURP)</option>
                                            <option value="Tubal ligation">Tubal ligation</option>
                                            <option value="Tubal ligation reversal">Tubal ligation reversal</option>
                                            <option value="Tummy tuck">Tummy tuck</option>
                                            <option value="Ultrasound">Ultrasound</option>
                                            <option value="Upper endoscopy">Upper endoscopy</option>
                                            <option value="Urinalysis">Urinalysis</option>
                                            <option value="Urine cytology">Urine cytology</option>
                                            <option value="Uterine artery embolization">Uterine artery embolization</option>
                                            <option value="Vacuum extraction">Vacuum extraction</option>
                                            <option value="Vaginal birth after cesarean (VBAC)">Vaginal birth after cesarean (VBAC)</option>
                                            <option value="Vaginal hysterectomy">Vaginal hysterectomy</option>
                                            <option value="Vagus nerve stimulation">Vagus nerve stimulation</option>
                                            <option value="Vasectomy reversal">Vasectomy reversal</option>
                                            <option value="Vasectomy: An effective form of male birth control">Vasectomy: An effective
                                                form of male birth control</option>
                                            <option value="Ventricular assist devices (VADs)">Ventricular assist devices (VADs)</option>
                                            <option value="Virtual colonoscopy">Virtual colonoscopy</option>
                                            <option value="Wisdom tooth extraction">Wisdom tooth extraction</option>
                                            <option value="Withdrawal method (coitus interruptus)">Withdrawal method (coitus interruptus)</option>
                                            <option value="X-ray">X-ray</option>
                                         
                                    </select>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100 doc"  >
                            <div className="col">
                                <div className="inputBox">
                                <input className="upload" type="file" id="myfile" style={{background:"rgba(97, 106, 110, 1)" ,borderBottom:"3px solid white",color:"white"}} name="myfile"/> 
                                <span className="text">Upload your documents/scans etc</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                <input className="upload" type="file" id="myfile" style={{background:"rgba(97, 106, 110, 1)" ,borderBottom:"3px solid white",color:"white"}} name="myfile"/> 
                                    <span className="text">Upload Last Medical Prescription</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox textarea">
                                    <textarea required="required"></textarea>
                                    <span className="text ">
                                    Enquire about health related problem
                                    
                                    </span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            {/* <div className="col">
                    <div className="inputBox textarea">
                        <textarea required="required"></textarea>
                        <span className="text">Concern</span>
                        <span className="line"></span>
                    </div>
                </div> */}
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
export { Getappointment };