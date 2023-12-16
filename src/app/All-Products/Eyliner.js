import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductDetailsModal from '../Components/Details';
import Alert from '../Components/Alert';
import Sidebar from '../Components/Sidebar';
import LoadingPage from '../Components/Loading';

export default function Eyeliner() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loading, setLoading] = useState(true); // New loading state

    const [userId, setUserId] = useState(localStorage.getItem('userId') || 'No user ID');
    const [username, setUsername] = useState(localStorage.getItem('username') || 'No username');
    const [email, setEmail] = useState(localStorage.getItem('email') || 'No email');

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

    const usersName = { username };

    const openDetailsModal = (product) => {
        setSelectedProduct(product);
    };

    const closeDetailsModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetching product data:', error);
                setLoading(false);
            });
    }, []);

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
    };

    const handleAddToCart = async (product, quantity, usersName) => {
        setCurrentProduct(product);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
        console.log('Adding to cart:', product, quantity, usersName);

        try {
            console.log(quantity, product, usersName);
            const response = await axios.post('http://localhost:5000/add-to-cart', {
                quantity,
                product,
                usersName,
            });

            console.log('Product details', response.data);
        } catch (error) {
            console.error('Error adding to cart:', error.response.data);
        }

        try {
            const updatedQuantity = product.quantity - quantity;
            const response = await axios.patch(`http://localhost:5000/api/products/${product._id}`, {
                quantity: updatedQuantity,
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);

            console.log('Product quantity updated:', response.data);
        } catch (error) {
            console.error('Error updating product quantity:', error.response.data);
        }
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        toggleSidebar();
    };

    return (
        <div>
            <Header />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <button onClick={handleButtonClick} className='category-toggle'>Categories  <ion-icon className="meal-icon" name="arrow-redo-outline"></ion-icon></button>
            <h2 className="heading-primary" style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '3rem', color: '#54731a' }} ><span style={{ color: '#86bc25' }}>Eyeliner</span> Here</h2>
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="container grid grid--3-cols margin-bottom-md">
                    {products.map((product) => product.type === 'Eyeliner' && (
                        <div className="meal" key={product._id}>
                            {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="meal-img" style={{ width: '100%', height: '32.5rem' }} />}
                            <div className="meal-content">
                                <div className="meal-tags">
                                    <span className="tag tag--vegan">Ecofriendly <ion-icon name="shield-checkmark-outline"></ion-icon></span>
                                    <span className="tag tag--paleo">Few Left in stock</span>
                                </div>
                                <p className="meal-title">{product.name.toUpperCase()}</p>
                                <ul className="meal-attributes">
                                    <li className="meal-attribute">
                                        <ion-icon className="meal-icon" name="cash-outline"></ion-icon>
                                        <span> <strong>{product.price}</strong> USD </span>
                                    </li>
                                    <li className="meal-attribute">
                                        <ion-icon className="meal-icon" name="pricetag-outline"></ion-icon>
                                        <span><strong>Got {product.discount}%</strong>discount</span>
                                    </li>
                                    <li className="meal-attribute">
                                        <ion-icon className="meal-icon" name="albums-outline"></ion-icon>
                                        <span>Only <strong>{product.quantity}</strong> in stock</span>
                                    </li>
                                    <li className="meal-attribute">
                                        <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                        <span><strong>{product.rating}</strong> rating (537)</span>
                                    </li>
                                    <li className="meal-attribute">
                                        <ion-icon
                                            className="meal-icon"
                                            name="alert-circle-outline"
                                            onClick={() => openDetailsModal(product)}
                                        ></ion-icon>
                                        <span><ion-icon name="arrow-undo-outline"></ion-icon><strong>Know more</strong></span>
                                    </li>
                                    <li className="meal-attribute">
                                        <ion-icon className="meal-icon" name="add-circle-outline"></ion-icon>
                                        <span>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => handleQuantityChange(e, product)}
                                                min="1"
                                                max={product.quantity}
                                            />
                                        </span>
                                    </li>
                                </ul>
                                <button className="explore-button" onClick={() => handleAddToCart(product, quantity, usersName)}> Add to <ion-icon name="cart-outline"></ion-icon> </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
            {showNotification && (
                <Alert productName={currentProduct} quantity={quantity} />
            )}
            {selectedProduct && (
                <ProductDetailsModal product={selectedProduct} onClose={closeDetailsModal} />
            )}
        </div>
    );
}
