import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false); //button txt changer when copied
  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+;";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
    
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-500">
          <div className="w-full sm:w-80 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              Password Generator 
            </h2>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                New Password
              </label>
              <div className="flex">
                <input
                  value={password}
                  type="text"
                  readOnly
                  id="password"
                  name="password"
                  ref={passwordRef}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-indigo-500 text-white rounded-r-md px-4 py-2 ml-1"
                >
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="slider" className="block mb-2">
                Password Length : {length}
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min={5}
                  max={64}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                  className="w-full mr-2 cursor-pointer"
                />
                
                <span id="slider-value" className="text-sm font-medium" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  defaultChecked={charAllowed}
                  type="checkbox"
                  id="specialChar"
                  name="specialChar"
                  className="mr-2"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label>Special Characters</label>
              </div>
              <div className="flex items-center">
                <input
                  defaultChecked={numberAllowed}
                  type="checkbox"
                  id="numbers"
                  name="numbers"
                  className="mr-2"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numbers">Numbers</label>
              </div>
            </div>
            <button className="bg-indigo-500 text-white rounded-md px-4 py-2 w-full">
            Generate Password
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
