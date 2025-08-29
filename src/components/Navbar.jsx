import React from 'react'
import {useState} from 'react'
import { Menu, X } from "lucide-react"

function Navbar({isOpen, setIsOpen}) {
  
  return (
    <div className='text-xs lg:text-base' >  

        <div className= 'flex text-gray-400 justify-between p-4   '>
            <div className='md:hidden p-1'>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X  size={36}/>: <Menu size={36}/>}</button>
            </div>

            <div className='hidden md:flex gap-2' >
                <a className='bg-[#ff633c] text-gray-200 rounded-full p-4 '>Dashboard</a>
                <a className='bg-white rounded-full p-4 '>Transaction</a>
                <a className='bg-white  rounded-full p-4 '>Invoicing</a>
                <a className='bg-white  rounded-full p-4 '>Report</a>
                <a className='bg-white  rounded-full p-4 '>Analytics</a>
            </div>
            <div className='flex gap-2'>
                <button className='bg-white rounded-full p-4 hidden  md:flex gap-2'> 
                    <div><i class="fa-regular fa-bell text-gray-900"></i></div>
                    <span>Notifications</span>
                    <div className='bg-[#ff633c] text-gray-200 rounded-full max-[400px]:px-0 px-2'>12</div>
                </button>
                <button className='bg-white flex gap-2 max-[400px]:gap-1 max-[400px]:px-2 rounded-full px-4 items-center justify-self-end'>
                    <div className='rounded-full h-12 w-12'><img className='rounded-full object-cover' src='data:image/jpeg;base64,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'></img></div>
                    <div className=''>
                        <div className='text-gray-900 max-[400px]:text-sm'>Daisy Ridley</div>
                        <div className='text-sm max-[400px]:text-xs'>Co-Founder</div>
                    </div>
                    <div><i class="fa-solid fa-angle-down text-gray-900"></i></div>
                </button>
            </div>
        </div>


       




       
      
    </div>
  )
}

export default Navbar
