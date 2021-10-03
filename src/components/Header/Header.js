import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link href="/shop">Shop</Link>
                <Link href="/review">Order Review</Link>
                <Link href="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;