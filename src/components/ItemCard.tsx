const ItemCard = ({title, price, image} : {title: string, price: number, image:string}) => {
    return (
        <div className="">
            <div>{title}</div>
            <div>{price}</div>
            <div>{image}</div>
        </div>
    );
}

export default ItemCard; 