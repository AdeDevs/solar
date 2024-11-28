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
