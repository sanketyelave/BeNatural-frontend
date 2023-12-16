import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer" id='help'>
                <div className="container grid grid--footer">
                    <div className="logo-col">
                        <a href="#" className="footer-logo">
                            <img className="logo" alt="logo" src="img/Benatural.png" />
                        </a>

                        <ul className="social-links">
                            <li>
                                <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-instagram"></ion-icon></a>
                            </li>
                            <li>
                                <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-facebook"></ion-icon></a>
                            </li>
                            <li>
                                <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-twitter"></ion-icon></a>
                            </li>
                        </ul>

                        <p className="copyright">
                            Copyright &copy; <span className="year">2027</span> by Be Natural, Inc.
                            All rights reserved.
                        </p>
                    </div>

                    <div className="address-col">
                        <p className="footer-heading">Contact us</p>
                        <address className="contacts">
                            <p className="address">
                                B-302,G.D.B Hall,NIT ROURKELA, Odisha
                            </p>
                            <p>
                                <a className="footer-link" href="tel:415-201-6370">0011-0011-0011</a><br />
                                <a className="footer-link" href="/gmail">sanketyelave11@gmail.com</a>
                            </p>
                        </address>
                    </div>

                    <nav className="nav-col">
                        <p className="footer-heading">Account</p>
                        <ul className="footer-nav">
                            <li><a className="footer-link" href="#">Create account</a></li>
                            <li><a className="footer-link" href="#">Sign in</a></li>
                            <li><a className="footer-link" href="#">iOS app</a></li>
                            <li><a className="footer-link" href="#">Android app</a></li>
                        </ul>
                    </nav>

                    <nav className="nav-col">
                        <p className="footer-heading">Company</p>
                        <ul className="footer-nav">
                            <li><a className="footer-link" href="#">About Be Natural</a></li>
                            <li><a className="footer-link" href="#">For Business</a></li>
                            <li><a className="footer-link" href="#">Cooking partners</a></li>
                            <li><a className="footer-link" href="#">Careers</a></li>
                        </ul>
                    </nav>

                    <nav className="nav-col">
                        <p className="footer-heading">Resources</p>
                        <ul className="footer-nav">
                            <li><a className="footer-link" href="#">Recipe directory </a></li>
                            <li><a className="footer-link" href="#">Help center</a></li>
                            <li><a className="footer-link" href="#">Privacy & terms</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
