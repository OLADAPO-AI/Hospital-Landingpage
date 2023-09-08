import React from 'react'
import { MeetTeamCard } from './Data'
import { MeetTeamData } from './Data'


function MeetTeam() {
  
  const teamMember = MeetTeamData.map((member , index) => {
    return (
      <MeetTeamCard
        key = {index} 
        img = {member.img}
        name = {member.name}
        post = {member.post}
        desc = {member.h5}
       
      
      />
    )
  })
    

  return (


<div className='w-screen  md:mx-8 '>
        <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h2 className=' text-2xl font-semibold py-3' style={{color:"#559297"}}>Meet Our Team Members</h2>
          </div>

          <div className=' flex flex-row justify-center'>
            <p className=' text-sm font-medium text-[#333333] text-center w-5/6 md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className=' my-20 container mx-auto grid md:grid-cols-2 lg:grid-cols-3  space-y-4 justify-center '>
          {teamMember}
        </div>
    </div>
    
  )
}

export default MeetTeam


