import React from 'react'
import { ClientCard } from './Data'
import { clientData } from './Data'

function Client() {

    const cliecar = clientData.map((clients , index) => {
        return (

            <ClientCard
              key = {index} 
              svg = {clients.img}
             quote = {clients.name}
             rev ={clients.post}
             your = {clients.h5}
             go = {clients.h3}
            
            />
        )
    })

 
  return (
    <div className=' w-screen md:mx-8'>
        <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h2 className=' text-2xl font-semibold py-3' style={{color:"#559297"}}>What Our Clients Say</h2>
          </div>

          <div className=' flex flex-row justify-center'>
            <p className=' text-sm font-medium text-[#333333] text-center w-5/6 md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className=' my-20 container mx-auto grid md:grid-cols-2 lg:grid-cols-3  space-y-4 justify-center'>
          {cliecar}
        </div>
    </div>
  )
}


export default Client