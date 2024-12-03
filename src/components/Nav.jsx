import { useState } from "react";
import EmptyCart from "../assets/empty.png"
import { NavLink } from "react-router-dom";
function NavPage() {
    const [isDropDownActive, setIsdropDownActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDarkMode, setIsdarkMode] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsdarkMode(!isDarkMode)
    }

    const toggleDropDown = () => {
        setIsdropDownActive(!isDropDownActive);
    }
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
    return (
        <div className={`nav-page ${isDarkMode ? "dark" : ""}`}>
            <nav className={`${isDarkMode ? "dark" : ""}`}>
                <NavLink to="/"><h1>Solar</h1></NavLink>
                <ul className="desk-menu">
                    <li>Why Us</li>
                    <li className="prod" onClick={toggleDropDown}>Products <span><ion-icon name="swap-vertical-outline"></ion-icon></span>
                        <ul className={`dropdown ${isDropDownActive ? "show" : ""}`}>
                            <li>Prod</li>
                            <li>Produver</li>
                            <li>Produloee</li>
                        </ul>
                    </li>
                    <li>Solution</li>
                    <li>Support</li>
                </ul>
                <ul className="extras">
                    <li className="cart-toggle" onClick={toggleCart}>Cart &nbsp;(<span>0</span>)</li>
                    <button className={`quote ${isDarkMode ? "dark" : ""}`}>Get Quote</button>
                </ul>

                <span className="toggle-menu" onClick={toggleMenu}>
                    <ion-icon name="menu-outline" />
                </span>
                <div className={`overlay ${isMenuActive ? "show" : ""}`}onClick={toggleMenu}></div>
                <ul className={`hamburger ${isMenuActive ? "active" : ""}`}>
                <span className="toggle-menu">
                    <ion-icon name="close-outline" onClick={toggleMenu} />
                </span>
                    <li>Why Us</li>
                    <li className="prod" onClick={toggleDropDown}>Products <span><ion-icon name="swap-vertical-outline"></ion-icon></span>
                        <ul className={`dropdown ${isDropDownActive ? "show" : ""}`}>
                            <li>Prod</li>
                            <li>Produver</li>
                            <li>Produloee</li>
                        </ul>
                    </li>
                    <li>Solution</li>
                    <li>Support</li>
                </ul>
            </nav>
      {isCartOpen && (
        <div
          className={`cart-overlay ${isCartOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`cart ${isCartOpen ? "show" : ""}`}>
        <nav className={`${isDarkMode ? "dark" : ""}`}>
          <section className="cart-header">
            <h1>Checkout</h1>
            <ul>
              <li>
                <ion-icon name="cart-outline" />
                <p>
                  Cart <button id="cart-number">0</button>
                </p>
                {/* Close Button */}
                <ion-icon name="close-outline" onClick={toggleCart} />
              </li>
            </ul>
          </section>
          <div className="order-list">
            <div className="empty-cart">
                <p>Cart is empty, add some items!</p>
                <img src={EmptyCart} alt="EmptyCart" />
            </div>
          </div>
          <div className="order-extras">
            <form action="">
              <div className="add-order-info">
                <div>
                  <h1>
                    Promo Code <span> (Optional) </span>
                  </h1>
                  <input type="text" placeholder="Promo Code" />
                </div>
                <div>
                  <h1>Choose Address</h1>
                  <input type="text" required placeholder="Choose Address" />
                </div>
                <div>
                  <h1>
                    Add Remark <span> (Optional) </span>
                  </h1>
                  <input type="text" placeholder="Add Remark" />
                </div>
              </div>
              <div className="order-details">
                <ul>
                  <li>
                    <h1>
                      Sub Total <span> (0) </span>
                    </h1>
                    <p>₦0</p>
                  </li>
                  <li>
                    <h1>Delivery Fee</h1>
                    <p>₦0</p>
                  </li>
                  <li>
                    <h1>Service Fee</h1>
                    <p>₦0</p>
                  </li>
                  <li>
                    <h1>Total</h1>
                    <p>₦0</p>
                  </li>
                </ul>
              </div>
              <div className="confirm-order">
                <button>Place Order</button>
                <button>Clear Order</button>
              </div>
            </form>
          </div>
        </nav>
      </div>
        </div>
    )
}

const Counter = () => {
    // Local state for each Counter component instance
    const [count, setCount] = useState(1);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <div className="order-qty">
        <button onClick={decrement}>
          <ion-icon name="remove"></ion-icon>
        </button>
        <span>{count}</span>
        <button onClick={increment}>
          <ion-icon name="add"></ion-icon>
        </button>
      </div>
    );
  };

const OrderItem = () => {
    return (
        <>

<ul className="order-item">
              <li>
                <div>
                  <h1>Jollof Rice</h1>
                  <p>₦ 7,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Fried Rice</h1>
                  <p>₦ 7,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Moi Moi</h1>
                  <p>₦ 3,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Ice Cream</h1>
                  <p>₦ 10,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Coleslaw</h1>
                  <p>₦ 5,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Ewa Agoyin</h1>
                  <p>₦ 5,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Amala and Egusi</h1>
                  <p>₦ 4,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Chicken and Chips</h1>
                  <p>₦ 4,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Shawarma</h1>
                  <p>₦ 3,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Pizza (Family)</h1>
                  <p>₦ 7,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Saghetti</h1>
                  <p>₦ 2,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Pounded yam and egusi</h1>
                  <p>₦ 2,500</p>
                </div>
                <Counter />
              </li>
            </ul>
        </>
    )
}

export default NavPage;