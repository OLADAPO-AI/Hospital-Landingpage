import React from 'react'

const resultData = [
    {number: 99, data: "Customer Satisfaction", extra: "%"},
    {number: 15, data: "Online Patients",  extra: "K"},
    {number: 12, data: "Patients Recovered",  extra: "k"},
    {number: 240, data: "Company Growth", extra: "%"},
]

function Results() {
  return (
    <div className=' lg:my-16 mt-16'>
        <div className=' flex flex-col items-center'><h2 className=' text-2xl font-semibold py-3' style={{color:"#559297"}}>Our results in numbers</h2></div>

        
       <div className='grid lg:grid-cols-4 gap-5 mt-4 mx-10'>
        {resultData.map((data, index) => (
            <div key = {index} className=' flex flex-col items-center '>
            <h1 className=' text-3xl font-bold' style={{color:"#559297"}}>{data.number}<span style={{color: "#97ced3"}}>{data.extra}</span></h1>
            <h5 className=' text-base font-bold' style={{color:"#333333"}}>{data.data}</h5>
         </div>
        ))}
         
       </div>
        
    </div>
  )
}

export default Results