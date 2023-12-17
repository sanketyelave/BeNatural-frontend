import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoadingPage from './Components/Loading'; // Import the LoadingPage component

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
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

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get('https://benatural.onrender.com/get-cart-data');
                const cartData = response.data;
                setCart(cartData);
                setIsCartEmpty(cartData.length === 0);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error('Error fetching cart data:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchCartData();
    }, []);

    const handleRemoveFromCart = async (cartItemId) => {
        try {
            const response = await axios.delete(`https://benatural.onrender.com/remove-from-cart/${cartItemId}`);
            console.log(response.data);

            // Refresh the cart data after removing the item
            const updatedCart = await fetchCartData();
            setCart(updatedCart);
        } catch (error) {
            console.error('Error removing item from cart:', error.response.data);
        }
    };

    const fetchCartData = async () => {
        try {
            const response = await axios.get('https://benatural.onrender.com/get-cart-data');
            const cartData = response.data;
            setIsCartEmpty(cartData.length === 0);
            return cartData;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            return [];
        }
    };

    return (
        <div>
            <Header />
            {loading ? (
                <LoadingPage /> // Show loading page while data is being fetched
            ) : (
                <>
                    {isCartEmpty ? (
                        <div className="empty-cart-skeleton">
                            <h2 className="heading-secondary " style={{ color: 'green', textAlign: 'center', margin: '5rem' }}>
                                Your Cart is Empty <ion-icon name="cart-outline"></ion-icon>
                            </h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="heading-secondary " style={{
                                textAlign: 'center',
                                WebkitTextStroke: '2px green',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                padding: '4px',
                                margin: 'auto',
                                width: '100%',
                                marginTop: '3rem',
                                marginBottom: '3rem',

                            }}>
                                Your Cart is Ready To Go <ion-icon name="cart-outline"></ion-icon>
                            </h2>
                            <div className="cart-table-container" >
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th className='hide'>Name</th>
                                            <th className='hide'>Type</th>
                                            <th>Price <ion-icon name="usd"></ion-icon>
                                            </th>
                                            <th>Quantity</th>
                                            <th>Total <ion-icon name="usd"></ion-icon>
                                            </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            item.usersName === username && (
                                                <tr key={item.id}>
                                                    <td>
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.name}
                                                            style={{ width: '10rem', height: '10rem' }}
                                                        />
                                                    </td>
                                                    <td className='hide'>{item.name}</td>
                                                    <td className='hide'>{item.type}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantitySelected}</td>
                                                    <td>{item.price * item.quantitySelected}</td>
                                                    <td>
                                                        <button onClick={() => handleRemoveFromCart(item._id)}>
                                                            Buy
                                                        </button>
                                                        <div className="hover"> <ion-icon name="trash-outline" style={{ color: 'red', marginLeft: '8px', marginTop: '8px' }} onClick={() => handleRemoveFromCart(item._id)}></ion-icon></div>
                                                    </td>
                                                </tr>
                                            )
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </>
            )}
            <Footer />
        </div>
    );
};

export default CartPage;
