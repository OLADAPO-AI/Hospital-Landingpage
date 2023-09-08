import React, { useState, useEffect } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";
import { sliderData } from './Data';
import "./Slider.css"


function Hero() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const slideLength = sliderData.length;
// slideLength = 1 2 3
// currentSlide = 0 1 2

const autoScroll = true
let slideInterval 
let intervalTime = 5000;

const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
}
const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
}

function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
}


useEffect(() => {
    setCurrentSlide(0)
},[])

useEffect(() => {
    if(autoScroll){
        auto();
    }
    return () => clearInterval(slideInterval)
}, [currentSlide]);
  return (
    <div className=' slider '>
       <i className="arrow hidden lg:block lg:z-50 z-10 text-blue-500  prev fa fa-arrow-left" style={{fontSize: 24}} onClick={prevSlide}></i>
        <i className="arrow hidden lg:block lg:z-50 z-10  text-blue-500 next fa fa-arrow-right" style={{fontSize: 24}} onClick={nextSlide}></i>

       {sliderData.map((slider, index)=>{
        return (
            <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                {index === currentSlide && (
                    <div className='relative h-screen w-screen '>
                        <img src={slider.img} alt=""  className=' object-cover object-left'/>
                        <div className='content  flex flex-col items-center justify-center md:items-start gap-2 rounded-xl '>
                           <h2 className=' text-center md:text-start md:text-3xl text-lg font-extrabold md:text-slate-900 text-teal-700 md:font-semibold '>{slider.h1}</h2>
                           <p className=' text-center md:text-start font-bold text-sm md:text-lg md:text-slate-900 text-teal-200'>{slider.p}</p>
                           <button className=' cursor-pointer md:block  text-white py-3 md:py-3 md:px-6 px-4 w-full md:w-3/6 rounded-lg text-sm font-medium shadow-xl' style={{backgroundColor: "#559297"}}>{slider.buttext} </button>
                        </div>
                    </div>
                )}
            </div>
        )
       })}
    </div>
  )
}

export default Hero