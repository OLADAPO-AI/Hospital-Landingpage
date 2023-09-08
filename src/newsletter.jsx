import React from 'react'

function Newsletter() {
     
    const [newsletter , setNewsletter] = React.useState({
        email : ""
    })

    function handleChange(event) {
        
        setNewsletter(prevData => {
            const {name, value} = event.target
            return{
                ...prevData, [name]: value
            }
        })
    }

  return (
    <div className=' container mx-auto mb-16 flex flex-col'>
       <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h2 className=' md:text-2xl text-xl font-semibold py-3' style={{color:"#559297"}}>Subscribe To Our Newsletter</h2>
          </div>

          <div className=' flex  justify-center '>
            <form action="" className=' flex flex-col items-center md:gap-6 gap-5  justify-between'>
                <input type="text" placeholder=' Enter your email ' value={newsletter.email} name='email' onChange={handleChange} className="border p-3 w-[350px] md:w-[450px] rounded-2xl focus:outline-none focus:border-yellow-600 focus:border-2"/>

                <button className="bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 md:px-9 py-3 w-4/6 md:w-[200px] rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105" >Suscribe</button>
            </form>
          </div>
        </div>


    </div>
  )
}

export default Newsletter