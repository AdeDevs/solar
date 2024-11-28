function HomePage() {
    return (
        <div className="home">
            <header>
                <h1>Smart power for a smarter future</h1>
                <p>From consultation and design to installation and more. <br /> Experience the 5-star experience with solar.</p>
                <section className="btns">
                    <button>Get Started</button><button>Learn More</button>
                </section>
            </header>
            <main>
                <div className="about">
                    <div className="about-info">
                        <h2>About Us</h2>
                        <h1>let us help you light your homes and businesses</h1>
                        <p>
                            We offer safety, reliability, scalabality and a cost-advantaged delivery system for single use applications or in meshed nano-grid networks.
                        </p>
                        <p>
                            We use solar power to deliver electricity for service at a location while charging high performance supercapacitors that have no chemical electrolytes like traditional batteries and do not degrade when cycled and have a lifespan of more than 20 years.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="about-img"></div>
                </div>
                <div className="testimonials">
                    <div className="testimonial-head">
                        <h2>Testimonials</h2>
                        <h1>Satisfied customer testimonials</h1>
                        <aside>
                            <section>
                                <h3>130+</h3>
                                <p>installations</p>
                            </section>
                            <section>
                                <h3>200+</h3>
                                <p>customers</p>
                            </section>
                        </aside>
                    </div>
                    <div className="testimonial-main">
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage;

function Testimonial() {
    return (
        <div className="review-box">
            <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum incidunt commodi assumenda sit labore, ut praesentium maxime provident et, soluta qui explicabo nulla. Facilis dignissimos ipsum magnam esse delectus?
                Modi eius saepe dignissimos ducimus. Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
            </p>
            <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                    <p>Ichigo Kurosaki</p>
                    <p>Substitute Shinigami</p>
                </div>
            </div>
        </div>
    )
}