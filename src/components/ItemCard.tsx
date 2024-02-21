import { useOutletContext } from "react-router-dom";

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}

const ItemCard = ({title, price, image, id} : fakeStoreItem) => {

    const [cartItems, setCartItems] : [Array<fakeStoreItem>, ((cartItems: Array<fakeStoreItem>) => void)] = useOutletContext();

    const handleClick: ((data: fakeStoreItem) => void) = ({id, title, image, price}) => {
        let itemExistsOnCart = false;
        
        if(cartItems.length != 0){
            cartItems.forEach((el) => {
                if(el.id === id){
                    itemExistsOnCart = true; 
                }
            });
        }

        if(itemExistsOnCart){
            cartItems.map((el) => {
                if(el.id === id && el.quantity){
                    el.quantity = el.quantity + 1; 
                    return el;
                }
                return el;
            });
            setCartItems([...cartItems]);
        }else{
            const newOb = {
                id: id,
                title: title,
                image: image,
                price: price,
                quantity: 1
            };
            cartItems.push(newOb);
            setCartItems([...cartItems]);
        }

    }

    return (
        <div className="flex flex-col w-80 p-8 rounded-lg shadow-xl border">
            <div className="h-40 self-center m-4">
                <img src={image} alt="Product Image" className="h-full"/>
            </div>
            <div className="mt-auto mb-6">
                <h5 className="text-lg">{title}</h5>
                <h1 className="font-semibold text-2xl">${price}</h1>
            </div>
            <button className="w-full mt-auto bg-color-2 text-white p-2 rounded-lg add-to-cart-button border" onClick={() => handleClick({id: id, title: title, price: price, image: image})}>+ Add to cart</button>
        </div>
    );
}

export default ItemCard; 