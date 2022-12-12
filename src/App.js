import logo from "./image/q1.jpg";
import "./App.css";
// import image from "./image/picture.js";
import { useState, useEffect } from "react";
import * as React from "react";
import { render } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { questions as questionsData } from "./data";

function App() {
  const [counter, setCounter] = React.useState(10);
  const [activeQ, setActiveQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [declaration, setDeclaration] = useState("");
  const [score, setScore] = useState(0);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  useEffect(() => {
    if (declaration.length === "jaket misterius") {
      setDeclaration("Benar");
    } else {
      // setAnswer("salah");
    }
  }, [answer]);
  const [question, setQuestion] = useState([
    {
      question: "apa ini?",
    },
  ]);
  const notify = () => toast.success("Cakep");
  const notify1 = () => toast.error("tetot, coba lagi");
  // const notify2 = () => toast.error("ett, isi dulu");

  const handleAnswer = () => {
    // setQuestion([...question, { counter, declaration }]);
    if (declaration.toLowerCase() === "jaket misterius") {
      setAnswer();
      setScore(score + 10);
      notify();
    } else {
      setAnswer();
      setCounter(0);
      notify1();
      setQuestion([...question, { counter, declaration }]);
      // } else if (declaration === 0) {
      //   setAnswer();
      //   notify2;
    }
  };

  console.log(questionsData[activeQ].img);

  return (
    <div className="App">
      <header className="App-header">
        <h> Countdown: {counter}</h>
        {/* <span className="countdown font-mono text-6xl 5 mp">
          <span style={{ "--value": 47 }}>
            <div>{counter}</div>
          </span>
        </span> */}
        {/* <h1>waktu{countTime}</h1> */}
        <p> Score: {score}</p>
        <img src={logo} className="App-logo m-1" alt="logo" />
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            ></label>
            <input
              value={declaration}
              type="text"
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-center
        font-normal
        text-black
        bg-yellow bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              // justify-content="center"
              placeholder="Jawab disini"
              onChange={(e) => {
                setDeclaration(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleAnswer}
          class="text-grey 
          bg-red-700 
            if (dechandleAnswerg-red-700 
          hover:bg-red-800 
          focus:outline-none 
          focus:ring-4 
          focus:ring-red-300 
          font-medium rounded-full 
          text-sm 
          px-7
          py-2.5 
          text-center 
          mr-2 mb-2 
          dark:bg-red-600 
          dark:hover:bg-red-700 
          dark:focus:ring-red-800 
          m-1 "
        >
          CEK
        </button>
        {/* <ToastContainer /> */}
        <p>{answer}</p>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
