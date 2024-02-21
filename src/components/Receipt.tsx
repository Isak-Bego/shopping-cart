type fakeStoreItem = {
    id: number, 
    title: string, 
    price: number,
    image: string,
    quantity?: number
}


const Receipt = ({cartItems} : {cartItems : Array<fakeStoreItem>}) => {
    return(
        <div>
            {cartItems.map((el) => {
                return(
                    <div className="flex justify-between p-4">
                        <div>{el.title}</div>
                        <div>{el.quantity} x ${el.price}</div>
                    </div>
                );
            })}

            <hr />
            <div className="font-semibold text-3xl p-4 flex justify-between">
                <div>
                    TOTAL: 
                </div>
                <div>
                    ${cartItems.reduce((acc, el) => {
                        if(el.quantity)
                            return acc + el.quantity * el.price; 
                        else
                            return acc;
                    }, 0).toFixed(2)}
                </div>
            </div>
            
        </div>
    );
}

export default Receipt; 