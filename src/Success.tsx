import React from "react";
import happy from "./assets/happy.gif";

const Success : React.FC = () => {
    return(
        <div className="w-screen h-screen bg-green-400 flex items-center justify-center">
            <img src={happy} alt="Happy Happy Happy!" />
        </div>
    );
}

export default Success;

