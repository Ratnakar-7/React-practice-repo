import { useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor] =useState('#637373')
  return (
    <>
      <div className="w-full h-screen"
       style={{backgroundColor: color }}
      >
        <div className='flex  gap-4 bottom-6 top-4 justify-center p-5'
        style={{backgroundColor: 'gray'}}
        >
          <button className='border-dark rounded-md bg-red-400 w-20' onClick={()=>{setColor('#FF6363')}}>Red</button>
          <button className='border-dark rounded-md bg-yellow-500 w-20' onClick={()=>{setColor('#ffd369')}}>Yellow</button>
          <button className='border-dark rounded-md bg-pink-200 w-20' onClick={()=>{setColor('#baff')}}>Violet</button>
          <button className='border-dark rounded-md bg-green-400 w-20' onClick={()=>{setColor('#baffb4')}}>Green</button>
        </div>
      </div> 

    </>
  )
}

export default App
