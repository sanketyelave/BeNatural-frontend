import { useState } from 'react';
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';


function Products() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation(); // Stop the click event from propagating to the document
        toggleSidebar();
    };
    return (
        <div>
            <Header />

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <button onClick={handleButtonClick} className='category-toggle'>Categories  <ion-icon className="meal-icon" name="arrow-redo-outline"></ion-icon></button>

            <div className="container center-text ">
                <span className="subheading" style={{ color: '#86bc25' }}></span>
                <h2 className="heading-secondary" style={{ color: '#445D48' }}>
                    <span style={{ color: '#D6CC99' }}> Be<span style={{ color: '#86bc25' }}>N</span>atural</span> gives you 2,600+ variety of products
                </h2>
            </div>

            <div className="container grid grid--3-cols margin-bottom-md" >
                <div className="meal"  >
                    <img src="img/meals/product5.avif" className="meal-img" alt="Japanese Gyozas" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--paleo">Few Left in stock</span>
                        </div>
                        <p className="meal-title">Mascara</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>Starts form <strong>65</strong> USD </span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>40%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (537)</span>
                            </li>
                        </ul>
                        <a href="/mascara" className="explore-button"> Explore </a>
                    </div>
                </div>



                <div className="meal"  >
                    <img src="img/products/Blush/5.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Blush</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/blush" className="explore-button"> Explore </a>
                    </div>
                </div>

                <div className="meal" >
                    <img src="img/products/Concealer/2.jpg" className="meal-img" alt="Japanese Gyozas" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--paleo">Few Left in stock</span>
                        </div>
                        <p className="meal-title">Concealer</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>Starts form <strong>65</strong> USD </span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>40%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (537)</span>
                            </li>
                        </ul>
                        <a href="/concealer" className="explore-button"> Explore </a>
                    </div>
                </div>



                <div className="meal"  >
                    <img src="img/products/Eyeshadow/1.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Eye Shadow</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/eyeshadow" className="explore-button"> Explore </a>
                    </div>
                </div>

                <div className="meal" >
                    <img src="img/products/Eyeliner/1.jpg" className="meal-img" alt="Japanese Gyozas" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--paleo">Few Left in stock</span>
                        </div>
                        <p className="meal-title">Eye Liner</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>Starts form <strong>65</strong> USD </span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>40%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (537)</span>
                            </li>
                        </ul>
                        <a href="/eyeliner" className="explore-button"> Explore </a>
                    </div>
                </div>



                <div className="meal"  >
                    <img src="img/products/Foundation/2.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Foundation</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/foundation" className="explore-button"> Explore </a>
                    </div>
                </div>

                <div className="meal" >
                    <img src="img/products/Highlighter/1.jpg" className="meal-img" alt="Japanese Gyozas" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--paleo">Few Left in stock</span>
                        </div>
                        <p className="meal-title">Highligher</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>Starts form <strong>65</strong> USD </span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>40%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (537)</span>
                            </li>
                        </ul>
                        <a href="/highlighter" className="explore-button"> Explore </a>
                    </div>
                </div>



                <div className="meal"  >
                    <img src="img/products/Lipstick/1.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Lipstick</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/lipstick" className="explore-button"> Explore </a>
                    </div>
                </div>
                <div className="meal"  >
                    <img src="img/meals/product6.avif" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Pencil</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/pencil" className="explore-button"> Explore </a>
                    </div> </div>
                <div className="meal"  >
                    <img src="img/products/Powder/2.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Powder</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/powder" className="explore-button"> Explore </a>
                    </div> </div>
                <div className="meal"  >
                    <img src="img/products/Primer/1.jpg" className="meal-img" alt="Avocado Salad" style={{ width: '100%', height: '32.5rem' }} />
                    <div className="meal-content">
                        <div className="meal-tags">
                            <span className="tag tag--vegan">Ecofriendly</span>
                            <span className="tag tag--vegetarian">Available</span>
                        </div>
                        <p className="meal-title">Primer</p>
                        <ul className="meal-attributes">
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                <span>starts from <strong>40</strong> USD</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                <span>Minimum <strong>20%</strong>Discount</span>
                            </li>
                            <li className="meal-attribute">
                                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                <span><strong>4.9</strong> rating (443)</span>
                            </li>
                        </ul>
                        <a href="/primer" className="explore-button"> Explore </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;
