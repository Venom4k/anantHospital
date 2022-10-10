import "./TestimonialSection.css"
function Testimonialsection(){
    return (
        <>
        <div className="cont">
        <h1 className="Heading">Testimonial</h1>
<div className="testimonials">
<div className="card">
<div className="layer"></div>
<div className="content">
<h1>"I m very Impressed"</h1>
<p>Anant institute of medical sciences best hospital for neurology and neurosugeon</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>Mr.Pragesh Sharma,MD
</h2>
</div>
</div>
</div>

<div className="card">
<div className="layer"></div>
<div className="content">
<h1>"I m very Impressed"</h1>
<p>Anant institute of medical sciences best hospital for neurology and neurosugeon</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>Mr.Pragesh Sharma,MD

</h2>
</div>
</div>
</div>

<div className="card">
<div className="layer"></div>
<div className="content">
<h1>"I m very Impressed"</h1>

<p>Anant institute of medical sciences best hospital for neurology and neurosugeon</p>
<div className="image">
<img width="100px" src={require("./images/girl.png")}/>

</div>
<div className="details">
<h2>Mr.Pragesh Sharma,MD

</h2>
</div>
</div>
</div>
</div>
</div>
        </>
    )
}

export {Testimonialsection};