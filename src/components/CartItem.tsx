import React from "react"

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}

type x = fakeStoreItem & {setCartItems: (cartItems : Array<fakeStoreItem>) => void} & {cartItems: Array<fakeStoreItem>}

const CartItem = ({title, image, id, price, quantity, setCartItems, cartItems} : x) => {
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const updatedCartItems = cartItems.map((el : fakeStoreItem) => {
            if(el.id == id){
                el.quantity = parseInt(event.target.value); 
                return el;
            }
            return el; 
        })

        quantity = parseInt(event.target.value); 
        setCartItems(updatedCartItems);
    }

    const handleClick = () => {
        const updatedCartItems = cartItems.filter((el) => el.id != id); 
        setCartItems(updatedCartItems);
    }

    return(
        <div className="flex border rounded-xl p-4 shadow-xl mb-6 items-center">
            <div className="w-1/2 flex">
                <div className="h-36 m-2">
                    <img src={image} alt="Image" className="h-full"/>
                </div>
                <div className="flex flex-col m-2">
                    <h5 className="text-lg">{title}</h5>
                    <h1 className="font-semibold text-2xl">${price}</h1>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-end items-end h-36">
                <div className="self-end mb-auto px-2 border cursor-pointer hover:bg-red-500 hover:text-white" onClick={handleClick}>
                    <h1 className="hover:bg-red-500">X</h1>
                </div>
                <div className="flex justify-right items-right">
                    <input type="number" className="border h-10 text-center" min="1" max="99" value={quantity} onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
}

export default CartItem;