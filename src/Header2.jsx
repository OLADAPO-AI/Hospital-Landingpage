import React from "react"
import {link} from "./Link"
import { MobileDrop } from "./Data";
import { BiChevronUp } from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi"
import { IoMdClose, IoMdArrowDropup } from "react-icons/io";
import LOGO from "./assets/images/LOGO.svg"


function Header2() {
  const [isOpe, setOpenLink] = React.useState(false)
  function click(id) {
    setOpenLink(!isOpe)
  }
    

    const [open, setOpen] = React.useState(false)
    function toggle() {
      setOpen(!open)
    }
    
    

  
    
    return (
      <header className=" flex flex-row   " style={{backgroundColor: "#70a3a4"}}>
        <nav className=" flex flex-row justify-between relative w-screen pr-5 items-center">
         <div className="h-auto flex flex-row lg:w-auto w-full justify-between items-center gap-1 px-5 z-50 " >
            <img className="pb-2 " src={LOGO} alt="" />
            <div className=" lg:hidden text-3xl" onClick={toggle}>
              {open ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>
         </div>
        
         
         <ul className=" hidden item-center justify-center lg:flex flex-row sm:gap-2 lg:gap-5 font-semibold text-sm">
           {link.map((link , index) => (
           
           <li key = {index} className="relative group px-3 py-2" >
            
             <button className="flex group hover:opacity-50 cursor-pointer text-zinc-900">{link.name} <span className=" group-hover:rotate-180 duration-300"><BiChevronUp size={25}/></span></button>

             <div className="absolute top-0 -left-40 mt-5 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[320px]">

              <div className="relative top-6 p-6 bg-[#559297] rounded-xl shadow-xl w-full">
                <div className="w-6 h-6 bg-[#559297] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
                </div>
                {link.sublinks.map((sublink , index) => <h1 key = {index} className="text-center text-slate-950 hover:text-gray-700 text-lg font-medium cursor-pointer py-3">{sublink.name}</h1> )}
              </div>
             </div>

           </li>
            
           
           
           ))}
         </ul>
         
 
         <button className=" lg:block hidden py-2 px-4 w-[150px] rounded-lg text-sm font-medium shadow-xl" style={{backgroundColor: "#97df14"}}>Search </button>

         {/*this is mobile view */}

         <div className={`lg:hidden absolute w-full z-20 h-screen top-0 pl-6 py-24 bottom-0 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}   style={{backgroundColor: "#70a3a4"}}>
          
           
           <MobileDrop 
           
           
           
           />
            

         

        </div>
         
         
        </nav>
      </header>


    )
  }
  
  export default Header2