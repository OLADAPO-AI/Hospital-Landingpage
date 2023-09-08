import React from 'react'
import footerimg from './assets/images/LOGO.svg'

function Footer() {
  return (
    <footer style={{backgroundColor: "#70a3a4"}} className=' p-5'>

     <div className=' container mx-auto flex lg:flex-row  flex-col items-center my-4 justify-between'>
        <div className=' lg:w-3/12 ml-4'>
            <div>
                <img src={footerimg} alt="" className=' ml-9'/>
            </div>
            <div className=' flex flex-col gap-y-2 mt-5 items-center'>
                <h5 className=' text-xs text-gray-900 font-medium'> Copyright @ 2023 OLADAPO Templates</h5>
                <h6 className=' text-xs  text-[#ececec] font-medium'>| All Rights Reserved</h6>
            </div>
        </div>
        <div className=' lg:w-7/12 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 mt-10 lg:space-x-5 gap-5'>
            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-[#ececec]'>Product</h3>
              <ul className=' space-y-4 mt-3 text-gray-900'>
                <li className=' text-sm font-normal'>Features</li>
                <li className=' text-sm font-normal'>Pricing</li>
                <li className=' text-sm font-normal'>Case studies</li>
                <li className=' text-sm font-normal'>Reviews</li>
                <li className=' text-sm font-normal'>Updates</li>
              </ul>
            </div>
            
            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-[#ececec]'>Company</h3>
              <ul className=' space-y-4 mt-3 text-gray-900'>
                <li className=' text-sm font-normal'>About</li>
                <li className=' text-sm font-normal'>Contact Us</li>
                <li className=' text-sm font-normal'>Careers</li>
                <li className=' text-sm font-normal'>Culture</li>
                <li className=' text-sm font-normal'>Blog</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-[#ececec]'>Support</h3>
              <ul className=' space-y-4 mt-3 text-gray-900'>
                <li className=' text-sm font-normal'>Getting Started</li>
                <li className=' text-sm font-normal'>Help Center</li>
                <li className=' text-sm font-normal'>Server Status</li>
                <li className=' text-sm font-normal'>Report a bug</li>
                <li className=' text-sm font-normal'>Chat Support</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-[#ececec]'>Follow Us</h3>
              <ul className=' space-y-4 mt-3 text-gray-900'>
                <li className=' text-sm font-normal'>Facebook</li>
                <li className=' text-sm font-normal'>Twitter</li>
                <li className=' text-sm font-normal'>Instagram</li>
                <li className=' text-sm font-normal'>Linkedin</li>
                <li className=' text-sm font-normal'>Youtube</li>
              </ul>
            </div>

            

        </div>
      </div>
    </footer>
    
  )
}

export default Footer