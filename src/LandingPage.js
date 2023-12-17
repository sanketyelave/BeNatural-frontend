import { useState } from "react";
import React from 'react';
import Footer from "./app/Components/Footer";
import axios from 'axios';
import Login from "./app/Components/Login";


export default function LandingPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [login, setlogin] = useState(false);

    const handleSignIn = async () => {
        try {
            console.log(role)
            const response = await axios.post('https://benatural.onrender.com/signup', {
                username,
                email,
                password,
                role,
            });


            // Assuming your server responds with a success message, userId, and username
            const { userId, username: responseUsername, email: responseEmail, role: responseRole } = response.data;
            console.log('Sign-up successful. User ID:', userId, 'Username:', responseUsername, 'Role:', responseRole);
            console.log('Server Response:', response.data);
            // Store userId, username, and email in localStorage (or use your preferred method of session management)
            localStorage.setItem('userId', userId);
            localStorage.setItem('username', responseUsername);
            localStorage.setItem('email', responseEmail);
            localStorage.setItem('role', responseRole);
            window.location.href = '/home';
        } catch (error) {
            // Handle sign-up error
            console.error('Error signing up:', error.response.data);
        }
    };


    const openlogin = () => {
        setlogin(true);
    }
    const onclose = () => {
        setlogin(false);
    };


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



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
        <div>
            <div>



                <header className={`header  ${isMobileMenuOpen ? 'nav-open' : ''}`} style={{ zIndex: "3" }}>
                    <a href="#">
                        <img className="logo" alt="Be Natural" src="img/Benatural.png" />
                    </a>

                    <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} style={{ zIndex: "3" }}>
                        <ul className="main-nav-list" style={{ fontFamily: "Rubik" }}>
                            <li><a className="main-nav-link" href="#how" style={{ fontFamily: "Rubik" }} onClick={handleNavLinkClick}>How it works</a></li>
                            <li><a className="main-nav-link" href="#meals" onClick={handleNavLinkClick}>Products<ion-icon name="lock-closed-outline"></ion-icon></a></li>
                            <li><a className="main-nav-link" href="#testimonials" onClick={handleNavLinkClick}>Testimonies</a></li>
                            <li><a className="main-nav-link" href="#" onClick={() => openlogin()}>Login</a></li>
                            <li><a className="main-nav-link nav-cta" href="#cta" onClick={handleNavLinkClick}>Explore</a></li>
                        </ul>
                    </nav>

                    <button className="btn-mobile-nav" onClick={toggleMobileMenu} style={{ color: '#fff', fontSize: '30px' }}>
                        <ion-icon className="icon-mobile-nav" name={isMobileMenuOpen ? "close-outline" : "menu-outline"} ></ion-icon>
                    </button>
                </header>





                <main>
                    <section className="section-hero ">
                        <div className="hero">
                            <div className="hero-text-box">
                                <h1 className="heading-primary " style={{ color: '#D6CC99' }}>
                                    Unveil Your Radiance Naturally, Anytime, Anywhere. 24/7 Beauty Delivered!
                                </h1>
                                <p className="hero-description " style={{ color: '#fff' }}>
                                    Discover the beauty within with our natural and radiant products. Experience the luxury of 24/7 beauty delivery - your radiant glow, anywhere, anytime.
                                </p>
                                <a href="#cta" className="btn btn--full margin-right-sm" style={{ backgroundColor: '#D6CC99' }}>Buy products</a>

                                <a href="#how" className="btn btn--outline">Learn more &darr;</a>
                                <div className="delivered-meals">
                                    <div className="delivered-imgs">
                                        <img src="img/customers/customer-1.jpg" alt="Customer photo" />
                                        <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                                        <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                                        <img src="img/customers/customer-4.avif" alt="Customer photo" />
                                        <img src="img/customers/customer-5.avif" alt="Customer photo" />
                                        <img src="img/customers/customer-6.jpg" alt="Customer photo" />
                                    </div>
                                    <p className="delivered-text">
                                        <span>250,000+</span> products delivered last year!
                                    </p>
                                </div>
                            </div>
                            <div className="hero-img-box" style={{ zIndex: "2" }}>
                                <picture>
                                    {/* <source srcset="img/hero.webp" type="image/webp" /> */}
                                    <source srcset="img/hero.png" type="image/png" />

                                    <img src="img/hero.png" className="hero-img" alt="Hey hii" />
                                </picture>
                            </div>
                        </div>
                    </section>

                    <section className="section-featured">
                        <div className="container">
                            <h2 className="heading-featured-in">As featured in</h2>
                            <div className="logos">
                                <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
                                <img src="img/logos/business-insider.png" alt="Business Insider logo" />
                                <img src="img/logos/the-new-york-times.png" alt="The New York Times logo" />
                                <img src="img/logos/forbes.png" alt="Forbes logo" />
                                <img src="img/logos/usa-today.png" alt="USA Today logo" />
                            </div>
                        </div>
                    </section>

                    <section className="section-how" id="how">
                        <div className="container">
                            <span className="subheading" style={{ color: '#86bc25' }}>How it works</span>
                            <h2 className="heading-secondary" style={{ color: '#445D48' }}>
                                Beauty delivered to you in 3 simple steps
                            </h2>
                        </div>

                        <div className="container grid grid--2-cols grid--center-v">
                            <div className="step-text-box">
                                <p className="step-number" >01</p>
                                <h3 className="heading-tertiary" >
                                    Discover our collection, add favorites to your cart
                                </h3>
                                <p className="step-description">
                                    Embark on a shopping journey through our curated selection,
                                    and effortlessly collect your preferred products by adding them to your cart. Your style,
                                    your choices - just a click away.
                                </p>
                            </div>

                            <div className="step-img-box">
                                <img src="img/app/app1.jpg" className="stepimg2" alt="iPhone app
                                preferences selection screen" />
                            </div>


                            <div className="step-img-box">
                                <img src="img/app/app2.jpg" className="step-img" alt="iPhone app
                                  meal approving plan screen" />
                            </div>
                            <div className="step-text-box">
                                <p className="step-number"  >02</p>
                                <h3 className="heading-tertiary" >Do cashless checkout with seamless online transistion.</h3>
                                <p className="step-description">
                                    "Experience the convenience of cashless checkout through swift
                                    and secure online transactions, ensuring a hassle-free shopping experience
                                </p>
                            </div>


                            <div className="step-text-box">
                                <p className="step-number">03</p>
                                <h3 className="heading-tertiary" style={{ color: '#001524' }}>Receive products at convenient time</h3>
                                <p className="step-description">
                                    Enjoy the flexibility of receiving your products at a
                                    time that suits you best, making shopping fit seamlessly into
                                    your schedule.
                                </p>
                            </div>
                            <div className="step-img-box">
                                <img src="img/app/app3.avif" className="stepimg3" alt="iPhone app
            delivery screen" />
                            </div>
                        </div>
                    </section>

                    <section className="section-meals" id="meals">
                        <div className="container center-text">
                            <span className="subheading" style={{ color: '#86bc25' }}>Products</span>
                            <h2 className="heading-secondary" style={{ color: '#445D48' }}>
                                <span style={{ color: '#D6CC99' }}> Be<span style={{ color: '#86bc25' }}>N</span>atural</span> gives you 2,600+ variety of products
                            </h2>
                        </div>

                        <div className="container grid grid--3-cols margin-bottom-md">
                            <div className="meal">
                                <img src="img/meals/product5.avif" className="meal-img" alt="Japanese Gyozas" />
                                <div className="meal-content">
                                    <div className="meal-tags">
                                        <span className="tag tag--vegan">Ecofriendly</span>
                                        <span className="tag tag--paleo">Few Left in stock</span>
                                    </div>
                                    <p className="meal-title">Eyeshadow (Lily Extract)</p>
                                    <ul className="meal-attributes">
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                            <span><strong>65</strong> USD</span>
                                        </li>
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                            <span><strong>-4</strong> USD</span>
                                        </li>
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                            <span><strong>4.9</strong> rating (537)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="meal">
                                <img src="img/meals/product6.avif" className="meal-img" alt="Avocado Salad" />
                                <div className="meal-content">
                                    <div className="meal-tags">
                                        <span className="tag tag--vegan">Ecofriendly</span>
                                        <span className="tag tag--vegetarian">Available</span>
                                    </div>
                                    <p className="meal-title">CC cream (Sandstone)</p>
                                    <ul className="meal-attributes">
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                            <span><strong>40</strong> USD</span>
                                        </li>
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                            <span><strong>-6</strong> USD</span>
                                        </li>
                                        <li className="meal-attribute">
                                            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                            <span><strong>4.8</strong> rating (441)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="diets">
                                <h3 className="heading-tertiary">Types of products available:</h3>
                                <ul className="list">
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>CC cream</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Mashkara</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Eyeshadow</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Eyeliner</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Compact Powder</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Lipstick</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Lip Glause</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" style={{ color: '#000' }} name="checkmark-outline"></ion-icon>
                                        <span>Makeup Mist</span>
                                    </li>
                                    <li className="list-item">
                                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                                        <span>Kid-friendly</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="container all-recipes">
                            <a href="#cta" className="link">See all products &rarr;</a>
                        </div>
                    </section>

                    <section className="section-testimonials" id="testimonials">
                        <div className="testimonials-container">
                            <span className="subheading" style={{ color: 'black' }}>Testimonials</span>
                            <h2 className="heading-secondary" style={{ color: '#445D48' }}>Once you try it, you can't go back</h2>

                            <div className="testimonials">
                                <figure className="testimonial">
                                    <img className="testimonial-img" alt="Photo of customer Dave Bryson" src="img/customers/jenny.avif" />
                                    <blockquote className="testimonial-text">
                                        "A fantastic experience shopping here. The makeup collection is impressive, and the prices are reasonable. Quick delivery too!"
                                    </blockquote>
                                    <p className="testimonial-name">&mdash; Jenny Bryson</p>
                                </figure>

                                <figure className="testimonial">
                                    <img className="testimonial-img" alt="Photo of customer Ben Hadley" src="img/customers/customer-1.jpg" />
                                    <blockquote className="testimonial-text">
                                        "Magasin de beauté magnifiquement organisé ! La collection de parfums est divine. Je vais le recommander à tous mes amis."
                                    </blockquote>
                                    <p className="testimonial-name">&mdash; Anna Miller</p>
                                </figure>

                                <figure className="testimonial">
                                    <img className="testimonial-img" alt="Photo of customer Steve Miller" src="img/customers/debo2.jpg" />
                                    <blockquote className="testimonial-text">
                                        "ওয়েবসাইটটি ব্যবহারকারী-বন্ধুত্বপূর্ণ এবং সৌন্দর্য পণ্যের বৈচিত্র্য অবাক। আমার অর্ডারটি সময়ে পেয়েছি এবং সব কিছু ভাল ভাবে প্যাকেজ করা হয়েছিল।"
                                    </blockquote>
                                    <p className="testimonial-name">&mdash; Debo Bhowmick</p>
                                </figure>

                                <figure className="testimonial">
                                    <img className="testimonial-img" alt="Photo of customer Hannah Smith" src="img/customers/hannah.jpg" />
                                    <blockquote className="testimonial-text">
                                        "精心策划的美容商店！香水系列真是太神奇了。我会向所有朋友推荐的。"

                                    </blockquote>
                                    <p className="testimonial-name">&mdash; Hannah Yuhan</p>
                                </figure>
                            </div>
                        </div>


                    </section>



                    <section className="section-cta" id="cta">
                        <div className="container">
                            <div className="cta">
                                <div className="cta-text-box">
                                    <h2 className="heading-secondary">Get your first Product free dilivered!</h2>
                                    <p className="cta-text">
                                        This is just to know more about our customers !
                                    </p>

                                    <form className="cta-form" name="sign-up" netlify>
                                        <div>
                                            <label htmlFor="full-name"><ion-icon name="person-add-outline"></ion-icon> Full Name</label>
                                            <input id="full-name" type="text" placeholder="sanket yelave" value={username}
                                                onChange={(e) => setUsername(e.target.value)} name="full-name" required />
                                        </div>

                                        <div>
                                            <label htmlFor="email"><ion-icon name="mail-outline"></ion-icon> E-mail</label>
                                            <input id="email" type="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} placeholder="sanketyelave11@gmail.com" name="email" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password"><ion-icon name="key-outline"></ion-icon> Password</label>
                                            <input id="password" type="password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} placeholder="*****" name="password" required />
                                        </div>

                                        <div>
                                            <div>
                                                <label htmlFor="select-where">What do you want to do?</label>
                                                <select
                                                    id="select-where"
                                                    required
                                                    name="role"
                                                    onChange={(e) => setRole(e.target.value)}
                                                >
                                                    <option value="">Please choose one option:</option>
                                                    <option value="user">User - Buy products</option>
                                                    <option value="admin">Admin - Both buy and sell products</option>
                                                </select>
                                            </div>


                                        </div>

                                        <button className="ctabut" type="button" onClick={handleSignIn}>Sign up now</button>
                                    </form>
                                </div>
                                <div className="cta-img-box" role="img" aria-label="Woman enjoying food"></div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
                {login && (
                    <Login onClose={onclose} />

                )}
            </div>

        </div >

    );

}
