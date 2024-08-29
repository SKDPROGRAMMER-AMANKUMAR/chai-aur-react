import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: Color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("Red")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{setColor("Green")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=>{setColor("yellow")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={()=>{setColor("orange")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "orange"}}>orange</button>
          <button onClick={()=>{setColor("pink")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "pink"}}>pink</button>
          <button onClick={()=>{setColor("purple")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={()=>{setColor("white")}} type="button" className='outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg' style={{backgroundColor: "white"}}>white</button>
          <button onClick={()=>{setColor("Grey")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "Grey"}}>Grey</button>
          <button onClick={()=>{setColor("brown")}} type="button" className='outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg' style={{backgroundColor: "brown"}}>brown</button>
          </div>
      </div>
    </div>
  )
}

export default App
