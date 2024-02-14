const ItemCard = ({title, price, image} : {title: string, price: number, image:string}) => {
    return (
        <div className="flex flex-col w-80 p-8 rounded-lg shadow-xl">
            <div className="h-40 self-center m-4">
                <img src={image} alt="Product Image" className="h-full"/>
            </div>
            <div className="mt-auto mb-6">
                <h5 className="text-lg">{title}</h5>
                <h1 className="font-semibold text-2xl">${price}</h1>
            </div>
            <button className="w-full mt-auto bg-color-2 text-white p-2 rounded-lg ">+ Add to cart</button>
        </div>
    );
}

export default ItemCard; 