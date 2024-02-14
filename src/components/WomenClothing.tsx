import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

type fakeStoreResponse = {
    id: number, 
    title: string, 
    price: number,
    image: string
}

const WomenClothing: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing", {mode:"cors"})
        .then((response) => response.json())
        .then((response) => {
            setContent(response.map((element : fakeStoreResponse) => {
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
            <div>Loading...</div>
        );
    }
    return (
        <div className="flex gap-4 m-8 flex-wrap justify-center">
            {content.map((data: fakeStoreResponse ) => <ItemCard {...data} key={data.id}/>)}
        </div>
    );
}

export default WomenClothing;