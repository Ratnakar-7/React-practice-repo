import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {


  const [length, setLength] = useState(5);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
//Copy feature
  const inputRef = useRef(null);
  const copyButtonRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = inputRef.current.value;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyButtonRef.current.innerText = "Copied!";
        setTimeout(() => {
          copyButtonRef.current.innerText = "Copy";
        }, 350);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  
//Generating Random Password acc to params
  const passwordGenerator = (length, isNumberAllowed, isCharAllowed) => {
    let pass = "";
    let word = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) word += "0123456789";
    if (isCharAllowed) word += "~!@#$%^&*(){}[]";
    for (let i = 0; i < length; i++) {
      let x = word[Math.floor(Math.random() * word.length)];
      pass += x;
      setPassword(pass);
    }
  };

  //Tracking checkbox values

  const handleCheckBoxNum = (event) => {
    setIsNumberAllowed(event.target.checked);
  };
  const handleCheckBoxChar = (event) => {
    setIsCharAllowed(event.target.checked);
  };


  //Monitoring changes

  useEffect(() => {
    passwordGenerator(length, isNumberAllowed, isCharAllowed);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);



  return (
    <>
      <div className="flex flex-col items-center bg-dark-100 border border-gray-300 rounded-md p-4" >
        Password Generator
        <div className="flex items-center py-3">
          <input
            readOnly
            ref={inputRef}
            type="text"
            className="w-64 px-3 py-2 rounded-md border-blue-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Generate Random Password"
            value={password}
          />
          <button
            ref={copyButtonRef}
            onClick={handleCopy}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Copy
          </button>
        </div>
        <div className="w-64 mt-2">
          Length : {length}
          <input
            type="range"
            min="5"
            max="100"
            className="w-full"
            value={length}
            step={1}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            
          />
        </div>
        <div className="flex items-center mt-2">
          <label htmlFor="numbers" className="mr-2">
            <input
              type="checkbox"
              id="numbers"
              className="mr-1"
              default="true"
              checked={isNumberAllowed}
              onChange={handleCheckBoxNum}
            />
            Numbers
          </label>
          <label htmlFor="special-characters">
            <input
              type="checkbox"
              id="special-characters"
              className="mr-1"
              checked={isCharAllowed}
              onChange={handleCheckBoxChar}
            />
            Special Characters
          </label>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() =>
            passwordGenerator(length, isNumberAllowed, isCharAllowed)
          }
        >
          Generate New Password
        </button>
      </div>
    </>
  );
}

export default App;
