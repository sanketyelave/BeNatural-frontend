// AddProductForm.js
// AddProductForm.jsx
import './Add.css';

import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        type: '',
        name: '',
        discount: 0,
        price: 0,
        image: '',
        quantity: 0,
        description: '',
        rating: 0,
    });

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImageDrop = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct({ ...product, image: reader.result });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Request Data:', product);
            axios.post('http://localhost:5000/api/products', product)
                .then(response => {
                    console.log('Adding product:', response.data);
                    alert('Product added ✅')
                })
                .catch(error => {
                    console.error('Adding product error:', error);
                    alert('Faced some error ❌')
                });

            // Optionally, you can reset the form or redirect to another page
        } catch (error) {
            console.error('Adding product:', error);
        }
    };

    return (

        <div>

            <Header />
            <section className="section-cta" id="cta">
                <div className="container">
                    <div className="cta">
                        <div className="cta-text-box">
                            <h2 className="heading-secondary">Feel free to add products in our store .</h2>
                            <p className="cta-text">
                                Have a good sales !
                            </p>

                            <form className="cta-form" name="sign-up" onSubmit={handleSubmit}>
                                <div>
                                    <label for="select-where">Cateogry</label>
                                    <select id="select-where" name="type" onChange={handleInputChange} required>
                                        <option value="">Please choose one option:</option>
                                        <option value="Mascara">Mascara</option>
                                        <option value="Eyeliner">Eyeliner</option>
                                        <option value="Eyeshadow">Eyeshadow</option>
                                        <option value="Blush">Blush</option>
                                        <option value="Foundation">Foundation</option>
                                        <option value="Pencil">Pencil</option>
                                        <option value="Primer">Primer</option>
                                        <option value="Highlighter">Highlighter</option>
                                        <option value="Lipstick">Lipstick</option>
                                        <option value="Powder">Powder</option>
                                        <option value="Concealer">Concealer</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="name">Name:</label>
                                    <input id="name" placeholder="Lipstick(Red Matt)" name="name" required onChange={handleInputChange} />
                                </div>

                                <div>
                                    <label for="email">Price:</label>
                                    <input id="number" type="number" placeholder="30,40,55... USD" name="price" required onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label for="email">Discount:</label>
                                    <input id="email" type="number" placeholder="eg:30%" name="discount" required onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label for="rating">Rating:</label>
                                    <input id="number" type="number" placeholder="225 reviews" name="rating" required onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label for="email">Quantity:</label>
                                    <input id="email" type="number" placeholder="2,3,4,5,..." name="quantity" required onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>Image:</label>
                                    <input type="file" accept="image/*" onChange={handleImageDrop} />

                                    {product.image && <img src={product.image} alt="Product" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                                </div>
                                <div>
                                    <label for="email">Description:</label>
                                    <textarea id="email" type="text" name='description' placeholder="about the product" required onChange={handleInputChange} />
                                </div>



                                <button className="ctabut" type="submit">Add Product</button>
                            </form>
                        </div>
                        <div className="cta-img-box" role="img" aria-label="Woman enjoying food"></div>
                    </div>
                </div>
            </section>
            <Footer /></div>


    );
};

export default AddProductForm;
