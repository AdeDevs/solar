import { useState } from "react";

function HomePage() {
  const [isDarkMode, setIsdarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsdarkMode(!isDarkMode);
  };
  return (
    <div className={`home ${isDarkMode ? "dark" : ""}`}>
        <button className={`dark-mode ${isDarkMode ? "dark" : ""}`} onClick={toggleDarkMode}>Toggle</button>
      <header>
        <h1 onClick={toggleDarkMode}>Smart power for a smarter future</h1>
        <p>
          From consultation and design to installation and more. <br />{" "}
          Experience the 5-star experience with solar.
        </p>
        <section className="btns">
          <button>Get Started</button>
          <button>Learn More</button>
        </section>
      </header>
      <main>
        <div className={`about ${isDarkMode ? "dark" : ""}`}>
          <div className="about-info">
            <h2>About Us</h2>
            <h1>let us help you light your homes and businesses</h1>
            <p>
              We offer safety, reliability, scalabality and a cost-advantaged
              delivery system for single use applications or in meshed nano-grid
              networks.
            </p>
            <p>
              We use solar power to deliver electricity for service at a
              location while charging high performance supercapacitors that have
              no chemical electrolytes like traditional batteries and do not
              degrade when cycled and have a lifespan of more than 20 years.
            </p>
            <button className={`${isDarkMode ? "dark" : ""}`}>
              Learn More
            </button>
          </div>
          <div className="about-img"></div>
        </div>
        <div className="testimonials">
          <div className={`testimonial-head ${isDarkMode ? "dark" : ""}`}>
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
            <div className={`review-box ${isDarkMode ? "dark" : ""}`}>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum incidunt commodi assumenda sit labore, ut praesentium maxime
                provident et, soluta qui explicabo nulla. Facilis dignissimos
                ipsum magnam esse delectus? Modi eius saepe dignissimos ducimus.
                Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
              </p>
              <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                  <p>Babysola</p>
                  <p>Phantom Troupe 3</p>
                </div>
              </div>
            </div>
            <div className={`review-box ${isDarkMode ? "dark" : ""}`}>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum incidunt commodi assumenda sit labore, ut praesentium maxime
                provident et, soluta qui explicabo nulla. Facilis dignissimos
                ipsum magnam esse delectus? Modi eius saepe dignissimos ducimus.
                Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
              </p>
              <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                  <p>Ichigo Kurosaki</p>
                  <p>Substitute Shinigami</p>
                </div>
              </div>
            </div>
            <div className={`review-box ${isDarkMode ? "dark" : ""}`}>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum incidunt commodi assumenda sit labore, ut praesentium maxime
                provident et, soluta qui explicabo nulla. Facilis dignissimos
                ipsum magnam esse delectus? Modi eius saepe dignissimos ducimus.
                Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
              </p>
              <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                  <p>Ichigo Kurosaki</p>
                  <p>Substitute Shinigami</p>
                </div>
              </div>
            </div>
            <div className={`review-box ${isDarkMode ? "dark" : ""}`}>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum incidunt commodi assumenda sit labore, ut praesentium maxime
                provident et, soluta qui explicabo nulla. Facilis dignissimos
                ipsum magnam esse delectus? Modi eius saepe dignissimos ducimus.
                Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
              </p>
              <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                  <p>Ichigo Kurosaki</p>
                  <p>Substitute Shinigami</p>
                </div>
              </div>
            </div>
            <div className={`review-box ${isDarkMode ? "dark" : ""}`}>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum incidunt commodi assumenda sit labore, ut praesentium maxime
                provident et, soluta qui explicabo nulla. Facilis dignissimos
                ipsum magnam esse delectus? Modi eius saepe dignissimos ducimus.
                Impedit aperiam adipisci ducimus at quaerat veniam, tempore."
              </p>
              <div className="customer-info">
                <div className="avatar"></div>
                <div className="customer-name">
                  <p>Ichigo Kurosaki</p>
                  <p>Substitute Shinigami</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`contact ${isDarkMode ? "dark" : ""}`}>
          <h2>Contact</h2>
          <h1>So, let's do this, let's talk solar.</h1>
          <form action="" className={`${isDarkMode ? "dark" : ""}`}>
            <div className="contact-info">
              <section>
                <label htmlFor="first-name">first name</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="first-name" type="text" required placeholder="First Name"/>
              </section>
              <section>
                <label htmlFor="last-name">last name</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="last-name" type="text" required placeholder="Last Name"/>
              </section>
            </div>
            <div className="contact-info">
              <section>
                <label htmlFor="phone">phone number</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="phone" type="tel" required placeholder="Phone Number"/>
              </section>
              <section>
                <label htmlFor="email">email address</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="email" type="text" required placeholder="Phone Number"/>
              </section>
            </div>
            <div className="contact-info">
              <section>
                <label htmlFor="state">select a state</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="state" type="" required placeholder="State"/>
              </section>
              <section>
                <label htmlFor="">zip code</label>
                <input className={`${isDarkMode ? "dark" : ""}`} id="zip" type="tel" required placeholder="Zip Code"/>
              </section>
            </div>
            <div className="contact-hear">
              <label htmlFor="hear">How did you hear about us?</label>
              <input className={`${isDarkMode ? "dark" : ""}`} type="text" id="hear" placeholder="How did you hear about us?"/>
            </div>
            <div className="newsletter">
              <input className={`${isDarkMode ? "dark" : ""}`} type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">Subscribe to newsletter</label>
            </div>
            <div className="contact-hear">
              <label htmlFor="hear">Anything else to add?</label>
              <input className={`${isDarkMode ? "dark" : ""}`} type="text" id="hear" placeholder="Anything else to add?"/>
            </div>
            <button className={`${isDarkMode ? "dark" : ""}`} type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <div className="footer-head">
            <h1>contact us now to get started</h1>
            <form action="">
                <input type="text" name="" id="" placeholder="Get Started" required/>
                <button>S</button>
            </form>
        </div>
        <div className="footer-tail">
          <section className="first">
            <h1 className="logo"> Solar </h1>
            <p>
                We are all you need for all things solar and we're always one call away.
            </p>
            <ul className="socials">
              <li><ion-icon name="logo-facebook"></ion-icon></li>
              <li><ion-icon name="logo-linkedin"></ion-icon></li>
              <li><ion-icon name="logo-twitter"></ion-icon></li>
              <li><ion-icon name="logo-instagram"></ion-icon></li>
            </ul>
          </section>
          <section className="second">
            <ul>
              <li>Sitemap</li>
              <li>Why Us</li>
              <li>Solutions</li>
              <li>Support</li>
              <li>Testimonial</li>
            </ul>
            <ul>
              <li>Join Us</li>
              <li>Volunteer</li>
              <li>Career</li>
              <li>Sponsorships</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>support@solar.com</li>
              <li>+234 907 000-0000</li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

// function Testimonial() {
//     const [isDarkMode, setIsdarkMode] = useState(false)
//     const toggleDarkMode = () => {
//         setIsdarkMode(!isDarkMode)
//     }
//     return (
//     )
// }
