import React from 'react'
import Nav from './Components/Nav'
import Image from './Components/Image'
import LocomotiveScroll from 'locomotive-scroll';
import About from './Components/About';
import Black from './Components/Black';
import White from './Components/White';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='w-full min-h-screen bg-zinc-100 text-white font-[TWK Lausanne]'>
        <Nav />
        <Image />
        <About/>
        <Black/>
        <White/>

      </div>
   
    </>

  )
}

export default App