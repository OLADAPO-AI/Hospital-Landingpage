import React from 'react'
import { BsToggleOff, BsToggleOn} from "react-icons/bs";

function FindDoctor() {

    const [formData, setFormData] = React.useState({place:"", Doctor:"" })

    function handleChange(event) {
        const {name, value , type} = event.target
        setFormData(prevData => {
            return {
                ...prevData, [name]: value
            }
        })
    }
    
    const [toggleIcon, setToggleIcon] = React.useState(true)

    function icon() {
        setToggleIcon(!toggleIcon)
    }

  return (
    <div className=' mt-8 mx-auto container flex flex-col py-5 lg:p-4 rounded-lg shadow-2xl mb-4 bottom-5 h-[320px] lg:h-auto' style={{backgroundColor: "#fafafa"}}>
        <div className=' text-3xl text-center lg:text-start font-semibold py-3 h-auto mb-2' style={{color:"#333333"}}>Find A Doctor</div>
        <div className=' items-center mb-3 '>
            <form action="" className=' flex lg:flex-row flex-col h-auto items-center justify-between gap-2'>

            <input type="text" placeholder='doctor' value={formData.Doctor} onChange={handleChange} name='Doctor'className="border p-3  rounded-md lg:w-3/12 w-4/6 focus:outline-none focus:border-yellow-600 focus:border-2"/>
            <select name="place" value={formData.place} onChange={handleChange} placeholder='ed' id="place" className="border p-3  rounded-md lg:w-3/12 w-4/6 focus:outline-none focus:border-yellow-600 focus:border-2">
                    <option value="">---Speaciality---</option>
                    <option value="abuja">Abuja</option>
                    <option value="akure">Akure</option>
                    <option value="owo">Owo</option>
                    <option value="ibadan">Ibadan</option>
            </select>

            <div className=' flex flex-row gap-2 items-center'>
                <div  onClick={icon}>{toggleIcon ? <div className=' flex flex-row gap-2 items-center'><h3>Available</h3> <span><BsToggleOn size={40}/></span></div>  : <div className=' flex flex-row gap-2 items-center'><h3>Unavailable</h3><span><BsToggleOff size={40}/></span></div>}</div>
                
                
            </div>

            <button className=" bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 lg:px-6 px-3 py-3 lg:w-1/6 w-4/6 rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105" style={{backgroundColor: "#97df14"}}>Search</button>

            </form>

            
        </div>
    </div>
  )
}

export default FindDoctor