import React from "react";
import { BsArrowRightSquareFill , BsFacebook , BsTwitter , BsInstagram , BsLinkedin } from "react-icons/bs";
import Frame1 from "./assets/images/Frame 30.jpg";
import Frame2 from "./assets/images/Frame 31.jpg";
import Frame3 from "./assets/images/Frame 32.jpg";
import Frame4 from "./assets/images/Frame 33.jpg";
import Frame5 from "./assets/images/Frame 39.png";
import Frame6 from "./assets/images/Frame 40.png";
import Frame7 from "./assets/images/Frame 41.png";
import Frame8 from "./assets/images/Frame 42.png";
import Frame9 from "./assets/images/Frame 43.png";
import Frame10 from "./assets/images/Frame 44.png";
import { BiChevronUp } from "react-icons/bi";
 
 const sliderData =[
    {   
        id : 1,
        h1 : "#1 HOSPITAL IN NIGERIA FOR PATIENT CARE & SAFETY",
        p : "NMA. and National daily has named AncorMed the Best Hospital in Nigeria for 10 years in a row.",
        img : `${Frame1}`,
        buttext :"Learn More"
    },
    {   
        id : 2,
        h1 : "OFFERING THE FULL SPECTRUM OF QUALITY CARE",
        p : " We treat everything from complex brain tumors, cancer, heart, disease and organ failure.......",
        img : `${Frame2}`,
        buttext :"Explore Our Services "
    },
    {   
        id : 3,
        h1 : "LEADING CARE WHEREVER YOU NEED US",
        p : " Whether you need primary, specialty, emergency or hospital care, AncorMed Health expertise is conveniently located whenever you may need care",
        img : `${Frame3}`,
        buttext :"Find Us On The Map"
    },
    {   
        id : 4,
        h1 : "THE DIFFERENCE BETWEEN PRACTISING MEDICINE AND LEADIING IT",
        p : "AncorMed comprises a leading academic medical center in the MidBelt region of the Nation.",
        img : `${Frame4}`,
        buttext :"Learn More"
    },
]



function ServiceData(props) {
  return (
    <div className=" w-[320px] bg-[#fafafa]  h-auto rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out ">
        <div className=" p-3">
            <img src={props.image} alt="" className=" h-[180px] rounded-2xl" />
        </div>

        <div className="flex flex-col justify-start px-3 my-5 gap-3">
          <h3 className=' text-xl font-medium text-[#559297]'>{props.h3}</h3>
          <h5 className=' text-xs font-medium text-[#333333]'>{props.h5}</h5>
        </div>

       <div className="px-3 flex flex-row items-center gap-2 my-5 pb-6 cursor-pointer">
        <button className=" text-[#559297]">Learn more </button> <span className="text-[#559297]"><BsArrowRightSquareFill size={25}/></span>
       </div>


    </div>
  )
}


const cardData = [
    {
        img : `${Frame1}`,
        h3 : "Dental treatments",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame2}`,
        h3 : "Bones treatments",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img :`${Frame3}`,
        h3 : "Diagnosis",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img :`${Frame4}`,
        h3 : "Cardiology",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame1}`,
        h3 : "Surgery",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame2}`,
        h3 : "Eye care",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]




function MeetTeamCard(props) {
    return (
      <div className=" w-[320px] bg-[#fafafa]  h-auto rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out ">
          <div className=" p-3 flex flex-row justify-center">
              <img src={props.img} alt="" className=" h-[120px] rounded-2xl" />
          </div>
  
          <div className="flex flex-col justify-center px-3 my-5 gap-4">
            <h3 className=' text-xl font-medium text-[#559297] text-center'>{props.name}</h3>
            <h4 className=' text-lg font-medium text-[#333333] text-center'>{props.post}</h4>
            <h5 className=' text-xs font-medium text-[#333333] text-center'>{props.desc}</h5>
          </div>
  
         <div className="px-3 flex flex-row items-center justify-center space-x-9 my-5 pb-6 cursor-pointer">
          
             <BsFacebook size={25} color={"#48a1f8"}/>
             <BsTwitter size={25} color={"#83c8f9"}/>
             <BsInstagram size={25} color={"#bb9234"}/>
             <BsLinkedin size={25} color={"#3a84f7"}/>

         </div>
  
  
      </div>
    )
}

const MeetTeamData = [
    {
        img : `${Frame7}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame8}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame9}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame10}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        img : `${Frame10}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    
    {
        img : `${Frame10}`,
        name : "Dental treatments",
        post: "Lorem ipsum dolor sit ",
        h5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    
]

function ClientCard(props) {
    return (
      <div className=" w-[300px] bg-[#fafafa]  h-auto rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out ">
          <div className=" p-5 flex flex-row justify-start">
              <img src={props.svg} alt="" className=" h-[100px] rounded-2xl" />
          </div>
  
          <div className="flex flex-col justify-center px-5 my-5 gap-4">
            <h3 className=' text-sm font-bold text-[#559297] text-start'>"{props.quote}"</h3>
            <h4 className=' text-xs font-medium text-[#333333] text-start'>{props.rev}</h4>
            <div className=' font-medium text-[#333333] text-start'>
             <h3 className=' text-xs font-medium text-[#559297] text-start'>{props.your}</h3>
             <h3 className=' text-sm font-medium text-[#333333] text-start'>{props.go}</h3>
            </div>
          </div>
      </div>
    )
}

const clientData = [
    {
        img :`${Frame6}`,
        name : "An amazing service",
        post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        h5: "John Carter",
        h3: "CEO at Google"

    },

    {
        img : `${Frame8}`,
        name : "One of a kind service",
        post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        h5: "Andy Smith",
        h3: "CEO Dot Austere"

    },
    
    {
        img : `${Frame10}`,
        name : "The best service",
        post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        h5: "Sophie Moore",
        h3: "MD at Facebook"

    },
  
]


const link =  [
    
   {name : "Patients & Visitors", id:1, isOpen : true,
      name1: "Admission and Registration", 
      name2: "Visiting hours and policies", 
      name3: "Parking and transportation", 
      name4: "Patient right and responsibilities", 
      name5: "Visitor's Handbook", 
    },
    {name : "Services" , id:2, isOpen : true,
      name1: "Overview", 
      name2: "List of services",
      name3: "Service Description", 
    },
    {name : "Wellness",id:3, isOpen : true,
      name1: "Healthy living tips", 
      name2: "Nutrition Resources", 
      name3: "Fitness and Exercise", 
      name4: "Sleep Health",
    },
    {name : "About Us",id:4, isOpen : true,
      name1: "Hospital", 
      name2: "Mission and vision",
      name3: "Values and Philosophy",
      name4: "Accreditation and Certification", 
    },
]



function MobileDrop() {
    const [activeIndex, setActiveIndex] = React.useState(null);


  return (
    <div className=' '>

        <nav className=' '> 
          {link.map((item, id , index ) => (
            <div key={id}  className=' my-5'>
                <button key={index}
                   onClick={() => setActiveIndex(id)}  className="flex text-2xl font-medium group hover:opacity-50 cursor-pointer text-black">{item.name} <span className=" group-hover:rotate-180 duration-300"><BiChevronUp size={25}/></span></button>
                
                
                
                    <div className={`flex flex-col h-auto pl-5   text-slate-800  ${id === activeIndex ? "block" : "hidden"}`}><a className=" text-lg" href="">{item.name1}</a> <a className=" text-lg" href="">{item.name2}</a> <a className=" text-lg" href="">{item.name3}</a> <a className=" text-lg" href="">{item.name4}</a></div>
               
            
            </div>
          ))}
        </nav>
    </div>
  )
}





export {sliderData, ServiceData, link, cardData , MeetTeamCard , MeetTeamData , ClientCard , clientData, MobileDrop}