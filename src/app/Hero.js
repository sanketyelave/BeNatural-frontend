import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';


function Hero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize state with values from localStorage, if available
    const [userId, setUserId] = useState(localStorage.getItem('userId') || 'No user ID');
    const [username, setUsername] = useState(localStorage.getItem('username') || 'No username');
    const [email, setEmail] = useState(localStorage.getItem('email') || 'No email');

    // Update state if values in localStorage change (e.g., user logs in or out)
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');

        if (storedUserId && storedUsername && storedEmail) {
            setUserId(storedUserId);
            setUsername(storedUsername);
            setEmail(storedEmail);
        }
    }, []);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const imagePaths = [
        'cta1.jpg',
        'jenny.avif',
        'customer-4.avif',
        'customer-5.avif',
        'debo2.jpg',

    ];


    useEffect(() => {

        const interval = setInterval(() => {
            // Change the state to trigger a re-render with the next background image
            setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 4000); // 4 seconds

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);


    const [backgroundProductIndex, setBackgroundProductIndex] = useState(0);
    const imageProduct = [
        'pr1-removebg-preview.png',
        'pr2-removebg-preview.png',
        'pr4-removebg-preview.png',
        'pr3-removebg-preview.png',
        // 'pr5-removebg-preview.png',
        // 'pr7-removebg-preview.png',
        'pr4-removebg-preview.png',

    ];


    useEffect(() => {

        const interval = setInterval(() => {
            // Change the state to trigger a re-render with the next background image
            setBackgroundProductIndex((prevIndex) => (prevIndex + 1) % imageProduct.length);
        }, 4000); // 4 seconds

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);




    return (
        <div>
            <div>
                <Header />
                <main>
                    <section className="" style={{
                        backgroundImage: `linear-gradient(to right bottom,
                          rgb(253, 229, 212,0.35),
                          rgb(214, 204, 153,0.35)),
                          url("../img/customers/${imagePaths[backgroundImageIndex]}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '4.8rem 0 9.6rem 0',
                    }}>
                        <div className="hero">
                            <div className="hero-text-box">
                                <h1 className="heading-primary " style={{ color: 'rgb(220, 201, 107)' }}>
                                    Welcome <span style={{
                                        WebkitTextStroke: '2px #fff5c0',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block',
                                        padding: '4px',
                                    }}>{username}</span>, we have a lot of things for you !
                                </h1>
                                <p className="hero-description " style={{ color: '#fff' }}>
                                    Discover the beauty within with our natural and radiant products. Experience the luxury of 24/7 beauty delivery - your radiant glow, anywhere, anytime.
                                </p>
                                <a href="/products" className="btn btn--full margin-right-sm" style={{ backgroundColor: '#D6CC99' }} onClick={() => window.location.href = '/products'}>Buy products</a>

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
                            <div className="hero-img-box">
                                <picture>
                                    {/* <source srcset="img/hero.webp" type="image/webp" /> */}
                                    <source srcset={`img/bgRemovedproducts/${imageProduct[backgroundProductIndex]}`} className=" ani-1" type="image/png" />

                                    <img src="./img/discount1.png" className="hero-img ani" alt="Hey hii" />
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
                            <div className="meal" href="/products" onClick={() => window.location.href = '/products'}>
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

                            <div className="meal" href="/products" onClick={() => window.location.href = '/products'} >
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
                                            <span><strong >40</strong> USD</span>
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
                            <a href="/products" className="link" >See all products &rarr;</a>
                        </div>
                    </section>





                </main>

                <Footer />
            </div>


        </div >
    );
}

export default Hero;

