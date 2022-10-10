import "./Testimonial.css"


function TestimonialSection() {
    return (
        <>
            <section>
                <div className="testimonial">
                    <div className="card">
                        <div className="layer">
                            <div className="content">
                                <p>lorem ipsum dolor sit amet consetetur adipisicing elit .Nam iusto ea tenetur quas facere monima obcaecati mollitia sed ipsum quod,eius repellat nihil</p>
                                <div className="image">
                                    <img src={require("./images/image1.png")} width="100px"/>
                                </div>
                                <div className="details">
                                    <h2>Someone Famous</h2> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export { TestimonialSection };