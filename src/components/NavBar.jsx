import styles from "../styles/NavBar.module.css";
import { useState, useRef, useEffect } from "react";
import BtnDefault from "./buttons/btnDefault";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerMenuRef = useRef(null); // Reference to the burger menu icon
    const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });

    // Toggle the dropdown visibility when the burger menu is clicked
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    


    useEffect(() => {
        if (burgerMenuRef.current) {
            const { top, right, height } = burgerMenuRef.current.getBoundingClientRect();

            setMenuPosition({ top: top + height + 8, right: window.innerWidth - right }); // Adjust the left offset to make the dropdown align to the right
        }
    }, [isMenuOpen]); // Recalculate the position whenever the menu opens or closes



    //Function to close the dropdown if the screen gets bigger that 1400px
    useEffect(() => {
        const handleResize = () => {
           
            if (window.innerWidth > 1400 && isMenuOpen || window.innerWidth < 600 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]); // Only re-run if isMenuOpen changes



    return (
        <div>
            <div className={styles.NavBar}>
                <div className={styles.leftSide}>
                <Link to="/naturhistoriskmuseum/">
                    <img
                        className={styles.bigLogo}
                        src="/naturhistoriskmuseum/assets/images/big_logo.png"
                        alt="logo"
                    />
                    <img
                        className={styles.smallLogo}
                        src="/naturhistoriskmuseum/assets/images/small_logo.png"
                        alt="logo"
                    />
                </Link>
                    <ul>
                        {/* The would become links in the future*/ }
                        <li>Visit us</li>
                        <li>School & institution</li>
                        <li>Knowledge & research</li>
                        <li>The mols laboratory</li>
                        <li>About the museum</li>
                        <li>Webshop</li>
                    </ul>
                </div>
                <div className={styles.rightSide}>
                    <img
                        ref={burgerMenuRef} // Assign the ref to the burger menu icon
                        className={styles.burgerMenu}
                        src="/naturhistoriskmuseum/assets/images/burger_menu.svg"
                        alt="burger menu"
                        onClick={toggleMenu} // Toggle dropdown on burger menu click
                    />
                    <div className={styles.btn}>
                        <BtnDefault>Buy a ticket</BtnDefault>
                    </div>
                    
                    <p>Dansk</p>
                </div>
            </div>

            {/* Conditional rendering of the dropdown based on state */}
            {isMenuOpen && (
                <div
                    className={styles.dropDown}
                    style={window.innerWidth >= 600 ? {
                        top: menuPosition.top + "px",
                        right: menuPosition.right - 20 + "px"
                    } : {
                        top: menuPosition.top + 11 + "px",
                    }}
                >
                    <ul>
                        {/* The would become links in the future*/ }
                        <li>Visit us</li>
                        <li>School & institution</li>
                        <li>Knowledge & research</li>
                        <li>The mols laboratory</li>
                        <li>About the museum</li>
                        <li>Webshop</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
