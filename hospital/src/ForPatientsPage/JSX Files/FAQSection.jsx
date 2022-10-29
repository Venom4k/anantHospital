import "../Css Files/FAQSection.css";

function FAQSection(){
    return(
        <>
        <div className="FAQSection">
        <div className="headingBox5"> <div className="headbox2"> <h1 className="bigHeading5">Frequently Asked Question</h1></div></div>
        <div class="accordion" id="accordionExample">


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button "  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What to expect?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="contenter">
      <p className="para">Before your first visit, please take the time to carefully fill out our new patient forms. The information on your current medical status, weight and diet history help us to develop a comprehensive plan to assist you in your weight loss. If you have had recent lab work or a recent EKG, please bring these to your appointment or have them sent to our office.
      Your first visit will include a comprehensive review of your medical and weight history, an analysis of your nutrition and exercise status, and other factors contributing to weight gain.
      If needed, laboratory work and an EKG may also be done in the office. Body composition analysis is available for an extra charge.
      An initial weight loss plan that is customized to your specific needs will be agreed upon at the first visit. Plans may include current medication adjustments, addition of weight loss medications, and/or initiation in a meal replacement program. In some cases, blood pressure or diabetes medications may be stopped at your first appointment!</p>
      </div>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What is Meal Replacement ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="contenter">
      <p className="para">One of our weight loss options include the use of meal replacement. Meal replacement are high protein, low carbohydrate medical foods that are only available through medical professionals. They are packed with vitamins, minerals and all the other components to help you lose weight while maintaining lean muscle mass. Meal replacements can be used in many of our plans to either fully replace what you are eating throughout the day, or as a supplement to other diet plans. They are available in a variety of tasty and satisfying bars, soups, shakes and puddings.</p>
      </div>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Why see a medical weight loss specialist?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="contenter">
     <p className="para"> While some patients are successful with commercial weight loss programs, many others are unable to reach their goals. The reason for their inability to lose weight may be due to many things including other medical conditions. A physician-supervised medical weight loss program has the ability to use many tools that are not available to commercial weight loss programs, including weight loss medication that address issues with hunger often experienced on calorie restricted diets. A physician can also trouble shoot your current medications for possible barriers to weight loss and address any hidden hormone problems that commercial weight loss programs cannot address. For people on multiple medications and those with chronic disease, a medical weight loss specialist may be the safest way to lose weight.
      During active weight loss, blood pressure and other medications may need frequent adjustments which cannot be addressed easily by commercial weight loss program. Medication adjustment is an important part of weight loss management and prevents problems that can arise from low blood sugar, low blood pressure, and dehydration. Weight loss management with a certified weight loss provider allows you to focus on weight loss, with peace of mind that your other medical conditions remain in optimal control.</p>
      </div>
      </div>
    </div>
  </div>




  <div class="accordion-item">
  <h2 class="accordion-header" id="headingFour">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
Why see a medical weight loss specialist?
    </button>
  </h2>
  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <div className="contenter">
   <p className="para"> While some patients are successful with commercial weight loss programs, many others are unable to reach their goals. The reason for their inability to lose weight may be due to many things including other medical conditions. A physician-supervised medical weight loss program has the ability to use many tools that are not available to commercial weight loss programs, including weight loss medication that address issues with hunger often experienced on calorie restricted diets. A physician can also trouble shoot your current medications for possible barriers to weight loss and address any hidden hormone problems that commercial weight loss programs cannot address. For people on multiple medications and those with chronic disease, a medical weight loss specialist may be the safest way to lose weight.
    During active weight loss, blood pressure and other medications may need frequent adjustments which cannot be addressed easily by commercial weight loss program. Medication adjustment is an important part of weight loss management and prevents problems that can arise from low blood sugar, low blood pressure, and dehydration. Weight loss management with a certified weight loss provider allows you to focus on weight loss, with peace of mind that your other medical conditions remain in optimal control.</p>
    </div>
    </div>
  </div>
</div>

  


 

 

   





</div>
</div>
        
        </>
    );
}

export {FAQSection};