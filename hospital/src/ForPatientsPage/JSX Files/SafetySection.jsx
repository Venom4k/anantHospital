import "../Css Files/SafetySection.css";

function SafetySection() {
  return (
    <>
      <div className="safetySection">
        <div className="bgblack12">
          <div className="bigHeadingBox12"><h1 className="bigHeading12">SAFETY MEASURES</h1></div>
          <div className="contentBox12">
            <div className="boxes12 blur1">
              <div className="smallheadingbox12">
                <h1 className="smallheadingg">Security Staff / Safety Measures</h1>
              </div>
              <div className="measures">
                <ol className="detailer" style={{ listStyle: "disc" }}>
                  <li className="infoer" >Our Security guards are available 24 X 7 at the spot check.Please extend due to the courtesy and respect them at all times,as they are carry out their duties
                  </li>
                  <li className="infoer" >The carrying of arms and weapons in the Hospital premises is strictly prohibited.
                  </li>
                  <li className="infoer" >Our Security Staff examine around on the floors to make sure that all visitor leave the Hospital property as soon as visiting hours are over.
                  </li>
                  <li className="infoer" >You are asked to cooperate with them.We also request you to inform the health personnel if any dubiety acitivity is witnessed.
                  </li>
                </ol>
              </div>

            </div>

            <div className="boxes12 blur2"><div className="smallheadingbox12">
              <h1 className="smallheadingg">General Guidelines</h1>

            </div>
              <div className="measures">
                <ol className="detailer" style={{ listStyle: "disc" }}>
                  <li className="infoer" >Due to some specfice privacy reasons,the attendancts/visitor might be asked to leave the patient's room while the doctors visit or when the tests or treatments.
                  </li>
                  <li className="infoer" >For safety and health measures,unencessary visits should be reduced when the patient is in a state of isolation and also on the day of operation.
                  </li>
                  <li className="infoer" >Please avoid using the patient elevator as the patients are shifted often from operation theatre to the respective rooms,avoid cobrting the empty spaces on the corridors.
                  </li>
                  <li className="infoer" >To sustain more privacy and decrease the resik of being cross-contaminated the visitors should use the visitors's restroom,instead of the patient'restroom
                  </li>
                  <li className="infoer" >Children should not be left unattended on the hospital premises.They must be accompanied by Someone adult.
                  </li>
                  <li className="infoer" >
                    Kindly cooperate with us to keep the Hospital premises clean-including a loobhy,entrances,liftnad ramp clean.Do not trash the place wuth paper or garbage
                  </li>

                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { SafetySection };
