import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import Receipt from "./Receipt";
import emptyCart from "../assets/empty-cart.png"

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] : [Array<fakeStoreItem>, ((cartItems: Array<fakeStoreItem>) => void)] = useOutletContext();

    const handleCheckout = () => {
        setCartItems([]);
    }

    if(cartItems.length == 0){
        return(
            <div className="flex flex-col justify-center items-center">
            <div className="w-20 flex justify-center">
                <img src={emptyCart} alt="empty cart :(" />
            </div>
                <p>Cart is empty...</p>
            </div>
        );
    }else{
        return(
            <div className="w-11/12 m-auto">
                {cartItems.map((el) => <CartItem {...el} key={el.id} setCartItems={setCartItems} cartItems={cartItems}/>)}
                <Receipt cartItems={cartItems}/>
                <div className="p-4 flex justify-end">
                    <Link to="/successful-purchase" className="bg-color-1 px-20 py-4 text-white rounded-xl border checkout-button" onClick={handleCheckout}>Checkout</Link>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;