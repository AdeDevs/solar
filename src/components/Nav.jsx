import { useState } from "react";

function NavPage() {
    const [isDropDownActive, setIsdropDownActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleDropDown = () => {
        setIsdropDownActive(!isDropDownActive);
    }
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <div className="nav-page">
            <nav>
                <h1>Solar</h1>
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
                <button className="quote">Get Quote</button>
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
        </div>
    )
}

export default NavPage;