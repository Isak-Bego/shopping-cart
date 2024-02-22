import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SiteEssentials: React.FC = () => {
    const [cartItems, setCartItems] = useState([]);

    console.log("site Essentials", cartItems);

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header cartItemsQuantity={cartItems.length}/>
                <div className="flex-auto flex justify-center items-center">
                    <Outlet context={[cartItems, setCartItems]}/> 
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SiteEssentials;