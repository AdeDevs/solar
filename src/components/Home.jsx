import { useState } from "react";
import ShowMore from "../assets/plus.png";
import ShowLess from "../assets/minus.png";
import cart from "../assets/cart-outline.svg";
import addedCart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
import TestImage from "../assets/pouch.png"

function HomePage() {
  const [isDarkMode, setIsdarkMode] = useState(false);
  const [addedCarts, setAddedCart] = useState(Array(8).fill(false));

  const toggleCart = (index) => {
    const updatedCart = [...addedCarts]; // Create a copy of the array
    updatedCart[index] = !updatedCart[index]; // Toggle the specific product's liked status
    setAddedCart(updatedCart); // Update the state
  };
  const toggleDarkMode = () => {
    setIsdarkMode(!isDarkMode);
  };
  
  const [seeMore, setSeeMore] = useState([ false, false, false, false, false, false, ]);

  const toggleSection = (index) => {
    setSeeMore((prevSeeMore) =>
      prevSeeMore.map((item, i) => (i === index ? !item : item))
    );
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
        <div className={`trending ${isDarkMode ? "dark" : ""}`}>
        <h2>Trending Products</h2>
        <h1>
          Our new arrivals are built to withstand your activities while keeping
          your home powered always
        </h1>
        <div className="products-box">
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product" >
                  <h2>Carabiner Set</h2>
                </NavLink>
                <h3>
                  $24.54 <del>$33.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(0)}
                  src={addedCarts[0] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Off-Road Shoulder Bag</h2>
                </NavLink>
                <h3>
                  $34.54 <del>$43.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(1)}
                  src={addedCarts[1] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Cozy Indoor Sandals</h2>
                </NavLink>
                <h3>
                  $40.54 <del>$45.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(2)}
                  src={addedCarts[2] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Thermo Cup</h2>
                </NavLink>
                <h3>
                  $14.54 <del>$23.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(3)}
                  src={addedCarts[3] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Outdoor Vest</h2>
                </NavLink>
                <h3>
                  $34.54 <del>$43.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(4)}
                  src={addedCarts[4] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Face Cap</h2>
                </NavLink>
                <h3>
                  $10.54 <del>$15.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(5)}
                  src={addedCarts[5] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Fuzzy Cardigan</h2>
                </NavLink>
                <h3>
                  $34.54 <del>$43.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(6)}
                  src={addedCarts[6] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image">
              <img src={TestImage} alt="" />
            </div>
            <div className="product-info">
              <aside>
                <NavLink to="/product">
                  <h2>Swivel Chair</h2>
                </NavLink>
                <h3>
                  $54.54 <del>$63.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(7)}
                  src={addedCarts[7] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
        </div>
        <button className={`more-btn ${isDarkMode ? "dark" : ""}`}>See More</button>
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
        <div className="faq-box">
        <div className={`faq ${isDarkMode ? "dark" : ""}`}>
            <h1>Frequently Asked Questions</h1>
          <section>
            <header>
              <h1> how long does it take to install a solar panel? </h1>
              <button
                onClick={() => toggleSection(1)}
                className={seeMore[1] ? "active" : ""}
              >
                <img src={seeMore[1] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[1] ? "active" : ""}`}>
              <p className={`${isDarkMode ? "dark" : ""}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero id saepe nobis fugiat quisquam dolores animi sequi illo nisi! Iusto cumque labore ullam ad at quo voluptate tempora delectus? Dolorem!
                Animi nemo, veniam at vel, delectus ipsum quae eaque id nihil quam accusamus.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> are there any government incentives for solar panels? </h1>
              <button
                onClick={() => toggleSection(2)}
                className={seeMore[2] ? "active" : ""}
              >
                <img src={seeMore[2] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[2] ? "active" : ""}`}>
              <p className={`${isDarkMode ? "dark" : ""}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reiciendis minus temporibus molestiae eaque debitis dolorum totam dolore vero velit veniam molestias, voluptas, corporis eveniet soluta libero voluptatum iure! Distinctio.
                Molestias accusantium, itaque perspiciatis perferendis quibusdam veniam accusamus nostrum eligendi.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> how much electricity can a solar panel system generate? </h1>
              <button
                onClick={() => toggleSection(3)}
                className={seeMore[3] ? "active" : ""}
              >
                <img src={seeMore[3] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[3] ? "active" : ""}`}>
              <p className={`${isDarkMode ? "dark" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero neque nihil quidem accusantium corrupti provident? Aperiam officiis, architecto obcaecati dolorem sapiente, necessitatibus ex aspernatur nemo nobis iste molestias corrupti.
                Reprehenderit consequatur, placeat quidem rem recusandae quibusdam adipisci velit.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> do solar panels require maintenance? </h1>
              <button
                onClick={() => toggleSection(4)}
                className={seeMore[4] ? "active" : ""}
              >
                <img src={seeMore[4] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[4] ? "active" : ""}`}>
              <p className={`${isDarkMode ? "dark" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam aliquid vel inventore deleniti illo nihil minima deserunt, atque odio architecto eligendi quisquam suscipit repellendus culpa ab repellat maxime sunt.
                Reiciendis unde minus exercitationem voluptas sapiente.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> can i setup a recurring payment? </h1>
              <button
                onClick={() => toggleSection(5)}
                className={seeMore[5] ? "active" : ""}
              >
                <img src={seeMore[5] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[5] ? "active" : ""}`}>
              <p className={`${isDarkMode ? "dark" : ""}`}>
                Yes, we offer the option to set up recurring payment. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit error laboriosam saepe nihil quis consequatur sunt debitis. Incidunt praesentium velit delectus minima tempora magni, consequatur ex itaque fugit accusantium sed.
              </p>
            </main>
          </section>
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
