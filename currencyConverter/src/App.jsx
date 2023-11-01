import InputBox from "./InputBox";

// import { useState } from 'reat'
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    // useCurrencyInfo('usd');

  return (
    <>
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://imgs.search.brave.com/UVygPzxZJ3u7eNeFGCBrFTHj2ALU0nIJHutnGzJ3U7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk2LzMwLzk2/LzM2MF9GXzk2MzA5/NjYzX2N0ZXpKYTNK/MllselVXWW02YVpS/Nk1OYllyOVlxN09K/LmpwZw')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
   
    </>
  );
}
export default App
