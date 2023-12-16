import React from 'react';

const ProductDetailsModal = ({ product, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" style={{ backgroundColor: '#fff', borderRadius: '2rem' }} onClick={(e) => e.stopPropagation()}>
                <h2 style={{ fontSize: '3rem' }}>{product.name} Details :</h2>
                <p>{product.details} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quasi sit ipsa labore amet est tenetur qui ut iste exercitationem nisi error recusandae impedit quaerat, ipsum accusantium consequuntur. Nemo, odio. </p>
                <button onClick={onClose}><ion-icon name="arrow-back-circle-outline"></ion-icon>Close the details slide</button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
