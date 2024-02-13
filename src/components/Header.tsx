import React from "react";
import { Link } from "react-router-dom";
import ShopLogo from "../assets/online-shop-logo.svg";

const Header: React.FC = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center p-3 gap-2">
            <div className="w-52">
            <Link to="/"><img src={ShopLogo} alt="Shop Logo" className=""/></Link>
            </div>
            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/shopping-cart">Shopping Cart</Link>
            </div>
        </div>
        
        </>
    );
}

export default Header;