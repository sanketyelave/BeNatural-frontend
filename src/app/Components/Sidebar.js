// Sidebar.js
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom'; // If using React Router

const Sidebar = ({ isOpen, toggleSidebar }) => {

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && !e.target.closest('.sidebar')) {
                toggleSidebar();
            }
        };

        // Attach the event listener when the sidebar is open
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, toggleSidebar]);
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Link to="/mascara">Mascara</Link>
            <Link to="/eyeliner">Eyeliner</Link>
            <Link to="/foundation">Foundation</Link>
            <Link to="/primer">Primer</Link>
            <Link to="/highlighter">Highlighter</Link>
            <Link to="/pencil">Pencil</Link>
            <Link to="/lipstick">Lipstick</Link>
            <Link to="/concealer">Concealer</Link>
            <Link to="/blush">Blush</Link>
            <Link to="/powder">Powder</Link>
            <Link to="/eyeshadow">Eyeshadow</Link>
            {/* Add more links as needed */}
        </div>
    );
};

export default Sidebar;
