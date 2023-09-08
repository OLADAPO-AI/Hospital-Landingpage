import React from 'react'
import { ServiceData } from './Data'
import { cardData } from './Data'

function Service() {


   const cardPlus = cardData.map((data , index) => {
     return(

     <ServiceData 
    key = {index} 
    image = {data.img}
    h3 = {data.h3}
    h5 = {data.h5}
  />
   )})



  return (
    <div className=' w-screen md:mx-8 flex flex-col'>
        <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h2 className=' text-2xl font-semibold py-3' style={{color:"#559297"}}>Services we provide</h2>
          </div>

          <div className=' flex flex-row justify-center '>
            <p className=' text-sm font-medium text-[#333333] text-center w-5/6 md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className=' my-20 container mx-auto grid md:grid-cols-2 lg:grid-cols-3  space-y-4 justify-center'>
           {cardPlus}
        </div>
    </div>
  )
}

export default Service