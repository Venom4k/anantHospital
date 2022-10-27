import "./TestimonialSection.css"
function Testimonialsection(){
    return (
        <>
        <div className="cont">
        <h1 className="Heading" data-aos="fade-up" data-aos-duration="1000" >Testimonial</h1>
<div className="testimonials">
<div className="aos_less" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">
<div className="card" >
<div className="layer"></div>
<div className="content">
<h1>"I M VERY IMPRESSED"</h1>
<p>Anant institute of medical sciences best hospital for neurology and neurosugeon</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>Mr.Pragesh Sharma,MD
</h2>
<p>Western Style Windows</p>
</div>
</div>
</div>
</div>



<div className="aos_less" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200" 
data-aos-delay="150">
<div className="card" 
 >
<div className="layer"></div>
<div className="content">
<h1>"I M VERY PLEASED"</h1>
<p>Very impressed by the Anant Institute of Medical Sciences it provides Best Facility to patients.</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>Shri Shivraj Singh Chouhan
</h2>
<p>CM,M.P</p>

</div>
</div>
</div>
</div>


<div className="aos_less" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200"
data-aos-delay="250">
<div className="card"  
>
<div className="layer"></div>
<div className="content">
<h1>"Best Super Specialist"</h1>

<p>Anant Institute of Medical Sciences Have Best Suoer Specialist Doctors.</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>P.Ramanuj Tiwari</h2>
<p>Sidhh Ganesh Mandir Jabalpur</p>
</div>
</div>
</div>
</div>
</div>
</div>
        </>
    )
}

export {Testimonialsection};