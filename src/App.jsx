import { useState } from "react"

function App() {
  // declare a state to hold the value of count 
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className='text-5xl font-bold my-10 text-gray-800'>Simple Timer</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <h1 className="text-4xl pl-16 font-semibold mb-6">{count}</h1>
          <div className="flex ">
          <button 
          className="py-2 px-4 bg-gray-400 rounded-md mr-12 text-2xl"> + </button>
          <button 
          className="py-1 px-5 bg-gray-400 rounded-md text-3xl"> - </button>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default App
