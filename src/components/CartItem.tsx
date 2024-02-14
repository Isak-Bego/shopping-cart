import React from "react";

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}

type x = fakeStoreItem & {setCartItems: (cartItems : Array<fakeStoreItem>) => void}

const CartItem = ({title, image, id, price, quantity, setCartItems} : x) => {
    return(
        <div className="flex w-11/12 border rounded-xl m-auto p-4 shadow-xl mb-6 items-center">
            <div className="w-1/2 flex">
                <div className="h-36 m-2">
                    <img src={image} alt="Image" className="h-full"/>
                </div>
                <div className="flex flex-col m-2">
                    <h5 className="text-lg">{title}</h5>
                    <h1 className="font-semibold text-2xl">${price}</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default CartItem;