import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard.tsx"

type fakeStoreResponse = {
    id: number, 
    title: string, 
    price: number,
    image: string
}

const MenClothing: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing", {mode:"cors"})
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
        content.map((data: fakeStoreResponse ) => <ItemCard {...data} key={data.id}/>)
    );
}

export default MenClothing;