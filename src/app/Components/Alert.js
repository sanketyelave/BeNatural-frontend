import React from 'react';

function Alert({ productName, quantity }) {
    return (
        <div className="cart-notification">
            {productName.quantity >= quantity ? (
                <>
                    <p className='green-up'> <strong> {`${quantity} ${quantity > 1 ? 'quantities' : 'quantity'} items added to Cart`}</strong></p>

                </>
            ) : (
                <>
                    <p className='red-up'><strong>Select valid Quantity !</strong></p>

                </>
            )}
        </div>

    );
}

export default Alert;

