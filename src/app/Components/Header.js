import { React, useState, useEffect } from 'react';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    // Initialize state with values from localStorage, if available
    const [userId, setUserId] = useState(localStorage.getItem('userId') || 'No user ID');
    const [username, setUsername] = useState(localStorage.getItem('username') || 'No username');
    const [role, setRole] = useState(localStorage.getItem('role') || 'No role');

    // Update state if values in localStorage change (e.g., user logs in or out)
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedRole = localStorage.getItem('role');


        if (storedUserId && storedRole) {

            setRole(storedRole);
        }
    }, []);



    const handleNavLinkClick = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile navigation
        if (e.target.classList.contains("main-nav-link")) {
            setIsMobileMenuOpen(false);
        }
    };



    return (

        <header className={`header  ${isMobileMenuOpen ? 'nav-open' : ''}`} style={{ zIndex: '300' }}>
            <a href="#">
                <img className="logo" alt="Be natural logo" src="img/Benatural.png" />
            </a>

            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} style={{ zIndex: '300' }}>
                <ul className="main-nav-list" style={{ fontFamily: "Rubik" }}>
                    <li><a className="main-nav-link" href="/home" style={{ fontFamily: "Rubik" }} onClick={() => window.location.href = '/home'}>Home <ion-icon name="home-outline"></ion-icon></a></li>
                    <li><a className="main-nav-link" href="/products" onClick={() => window.location.href = '/products'}>Products<ion-icon name="basket-outline"></ion-icon></a></li>

                    {role === 'admin' &&
                        <li><a className="main-nav-link" href="/add" onClick={() => window.location.href = '/products'}>Add to Store<ion-icon name="add"></ion-icon></a></li>
                    }
                    <li><a className="main-nav-link" href="cart" onClick={() => window.location.href = '/cart'}>Cart<ion-icon name="cart-outline"></ion-icon></a></li>
                    <li><a className="main-nav-link nav-cta" href="/" onClick={() => window.location.href = '/'} style={{ zIndex: '999' }}>Log out</a></li>
                </ul>
            </nav>

            <button className="btn-mobile-nav" onClick={toggleMobileMenu} style={{ color: '#fff', fontSize: '30px' }}>
                <ion-icon className="icon-mobile-nav" name={isMobileMenuOpen ? "close-outline" : "menu-outline"} ></ion-icon>
            </button>
        </header>

    );
}

export default Header;
