import React from 'react';

function Empty() {
    return (
        <div>
            <h2 className='heading-secondary'> Cart is empty <ion-icon name="cart-outline"></ion-icon></h2>
            <div className="empty-cart-skeleton">

                <div className="skeleton-item"></div>
                <div className="skeleton-item"></div>
                <div className="skeleton-item"></div>
            </div>

        </div>
    );
}

export default Empty;
