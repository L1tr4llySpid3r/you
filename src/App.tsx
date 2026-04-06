dimport { useState } from "react";
import "./App.css";

  const phrases = [
  "Can i be your boyfriend"
  "Im inlove with you"
  "I wanna be with you
  "Forever"
  "Im willing to love you Forever"
  "All versions of you"
  "Commit and sacrifice all for you"
  "I love you more than ever"
  "Thats a promise i will keep"
];

function App() {
  const [noCount, setNoCount] = useState (0);
  const [yesPressed,setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16;
  
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases [Math.min(noCount, phrases.length - 1)];
  }

  
return (
  {yesPressed ? (
    <>
     <img
       alt="spiderman dance"
       src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZud2pqcDVmczR2cHFodHUxbWV0MjhsaWZjeDY0ZmlscWI2cGZ0dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gkXJ9WxXkWBxu/giphy.webp"
    />
     <div className="text">Yayyy!!!!!</div>
     </>
  ) ; (
    <>
      <img
        alt:"miraculous smile"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN1dXBwZ2JnZ2Z6MjNzcmMzMzZwOGpxcXptOGgwcWFzNHFkZDVsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f07gM7rg9eCZkmeaoc/giphy.gif"
      />

     <div>Can i be your boyfriend
     <div>
       <button
       className="yesButton"
       style={{ fontSize: yesButtonSize}}
       onClick={() => setYesPressed(true)}
     >
       Yes
      </button>
      <button onClick={handleNoClick} className="NoButton">
        {getNoButtonText()}
      </button>
    </div>
   </>
   )}
 </div>
 );
}