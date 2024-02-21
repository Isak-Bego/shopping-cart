import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SiteEssentials: React.FC = () => {
    const [cartItems, setCartItems] = useState([]);

    console.log("site Essentials", cartItems);

    return (
        <>
            <Header cartItemsQuantity={cartItems.length}/>
            <Outlet context={[cartItems, setCartItems]}/> 
            <Footer />
        </>
    );
}

export default SiteEssentials;