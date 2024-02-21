import React from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import Receipt from "./Receipt";

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] : [Array<fakeStoreItem>, ((cartItems: Array<fakeStoreItem>) => void)] = useOutletContext();

    if(cartItems.length == 0){
        return(
            <div>Cart is empty...</div>
        );
    }else{
        return(
            <div className="w-11/12 m-auto">
                {cartItems.map((el) => <CartItem {...el} key={el.id} setCartItems={setCartItems} cartItems={cartItems}/>)}
                <Receipt cartItems={cartItems}/>
            </div>
        );
    }
}

export default ShoppingCart;