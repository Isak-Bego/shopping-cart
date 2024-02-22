import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard.tsx"

type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity: number
}

const MenClothing: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing", {mode:"cors"})
        .then((response) => response.json())
        .then((response) => {
            setContent(response.map((element : fakeStoreItem) => {
                return {
                    id: element.id, 
                    title: element.title,
                    price: element.price,
                    image: element.image
                }
            }));
            setLoading(false);
        }) 

        
        return () => {
            setContent([]);
            setLoading(true);
        }
    }, [])

    if(loading){
        return(
            <div className="lds-ring-container"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
        );
    }
    return (
        <div className="flex gap-4 m-8 flex-wrap justify-center">
            {content.map((data: fakeStoreItem ) => <ItemCard {...data} key={data.id}/>)}
        </div>
    );
}

export default MenClothing;