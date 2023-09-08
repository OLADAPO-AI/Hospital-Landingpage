import React from 'react'
import Frame39 from './assets/images/Frame 39.png'

function Reason() {
  return (
    <div className='mx-auto flex lg:flex-row flex-col my-20 h-auto container w-screen items-center '>

        <div className=' lg:w-1/2 w-5/6 h-[400px] space-y-8 flex flex-col  justify-center lg:items-start'>
          <div>
           <h2 className=' text-2xl text-center lg:text-start font-semibold py-3' style={{color:"#559297"}}>You have lots of reasons to choose us</h2>
           <p className=' text-sm text-center lg:text-start font-medium text-[#333333]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className=' lg:gap-10 gap-4  flex flex-col lg:flex-row items-center justify-center '>
            <button className=' bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 w-4/6 lg:w-[150px] rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Get Started</button>

            <button className=' bg-gradient-to-r from-[#ffffff] to-[#000000] hover:from-white hover:to-white hover:text-black focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 w-4/6 lg:w-[150px] rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Learn more</button>
          </div>
        </div>

        <div className=' md:w-1/2 h-auto flex justify-end  shadow-lg'>
            <img src={Frame39} alt="" className='rounded-md h-[400px] w-[600px] object-cover' />
        </div>

    </div>
  )
}

export default Reason