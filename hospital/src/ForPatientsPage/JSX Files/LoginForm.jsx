import "../Css Files/LoginForm.css";


function LoginForm() {
  // For FULLNAME
  
  const badda = () => {
    var a = document.getElementById("hi");
    a.setAttribute("style", "transform: translateY(-10px);font-size: 1.2em; ");
  };
  const cbadda = () => {
    var a = document.getElementById("hi");
    a.removeAttribute("style");
  };

  //   For Email
  const email = () => {
    var a = document.getElementById("email");
    a.setAttribute("style", "transform: translateY(-10px);font-size: 1.2em; ");
  };
  const cemail = () => {
    var a = document.getElementById("email");
    a.removeAttribute("style");
  };

  //   For Mobile
  const mobile = () => {
    var a = document.getElementById("mobile");
    a.setAttribute("style", "transform: translateY(-10px);font-size: 1.2em; ");
  };
  const cmobile = () => {
    var a = document.getElementById("mobile");
    a.removeAttribute("style");
  };
  // For Related to
  const relate = () => {
    var a = document.getElementById("relate");
    a.setAttribute("style", "transform: translateY(-10px);font-size: 1.2em; ");
  };

  const crelate = () => {
    var a = document.getElementById("relate");
    a.removeAttribute("style");
  };
  // For  Comment

  const comment = () => {
    var a = document.getElementById("comment");
    a.setAttribute("style", "transform: translateY(-10px);font-size: 1.2em; ");
  };

  const ccomment = () => {
    var a = document.getElementById("comment");
    a.removeAttribute("style");
  };

  return (
    <>
      <div className="loginSection">
        <div className="bgblack3">
        
         <div className="headingBox4">
         <div className="sbox">
         <h1 className="heading">Write to Us</h1>
         </div>
         </div>
          <div className="contentBox2">
            <div className="formBox">
              <div className="nameS smallsection">
                <label for="" className="labelfor" id="hi">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onMouseOver={badda}
                  onMouseOut={cbadda}
                />
              </div>
              <div className="EmailS smallsection">
                <label for="" id="email">
                  Email
                </label>
                <input
                  type="email"
                  onMouseOver={email}
                  onMouseOut={cemail}
                  required placeholder="Enter your Email"
                />
              </div>
              <div className="mobileS smallsection">
                <label id="mobile" for="">
                  Mobile no.
                </label>
                <input
                  type="text"
                  onMouseOver={mobile}
                  onMouseOut={cmobile}
                  required
                  placeholder="Enter your number"
                />
              </div>
              <div className="RelatedS smallsection">
                <label id="relate" for="">
                  Related to
                </label>
                <input
                  type="text"
                  onMouseOver={relate}
                  onMouseOut={crelate}
                  required
                />
              </div>
              <div className="commentSection smallsection">
                <label id="comment" for="comments ">
                  Comment
                </label>
                <textarea
                  type="textarea"
                  onMouseOver={comment}
                  onMouseOut={ccomment}
                  className="comments"
                  required
                  
                />  
              </div>
              <div className="buttonsection">
                <button className="btnes">Add</button>
                <button className="btnes">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { LoginForm };
