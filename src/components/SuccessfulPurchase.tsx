import partyPopper from "../assets/party-popper.png"

const SucessfulPurchase = () => {
    return(
    <div className="flex flex-col items-center gap-4">
        <div className="w-20">
            <img src={partyPopper} alt="" />
        </div>
        <p className="font-semibold">Thank you for shopping with us!</p>
    </div>
    );
}

export default SucessfulPurchase;