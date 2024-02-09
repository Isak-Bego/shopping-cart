import { SetStateAction, useState } from "react";
import cat from "./assets/cat.jpg"
import { Link } from "react-router-dom";


let pointer = -1; 

function App() {

  const questions : Array<SetStateAction<string>> = ["Are you sure?", "Are you totally totally sure?", "Pookie pleaase", "Macka🥹?"]; 
  

  const [noButtonText, setNoButtonText] = useState("No");


  const handleYesClick = () => {
    
  }

  const handleNoClick = () => {
    pointer = (pointer+1) % questions.length; 
    setNoButtonText(questions[pointer]);
  }

    return (
      <>
        <div className="flex flex-col gap-4 items-center p-20">
          <div className="object-cover w-80">
            <img src={cat} alt="cat" className="w-full h-full"/>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Do you want to be my Valentine?</h1>
          </div>
          <div className="flex gap-8">
            <Link to="/success" className="bg-green-400 w-16 p-2 flex justify-center" onClick={()=>{handleYesClick()}}>Yes</Link>
            <button className="bg-red-400 p-2" onClick={()=> {handleNoClick()}}>{noButtonText}</button>
          </div>
        </div>
      </>
    );
 
}

export default App
