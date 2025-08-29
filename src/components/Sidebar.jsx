import React from 'react'
import {Home, Square, Calendar, User, MessageCircle, BarChart , Settings, LogOutIcon} from 'lucide-react'
function Sidebar() {
  return (
    <div className='h-full flex flex-col justify-between'>
        <div className='rounded-full  flex flex-col p-2 bg-white  m-5  mr-0 md:m-5 '>

            <div className='p-2 m-1  text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><Home size={20}/></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><Calendar size={20} /></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><Square size={20} /></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><User size={20} /></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><MessageCircle size={20} /></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><BarChart size={20} /></div>
            <div className='p-2 m-1 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white'><Settings size={20} /></div>

        </div>

        <div className='rounded-full p-2  m-5  mr-0 md:m-5'>
          <div className='p-2 m-1  text-red-400 hover:bg-gray-800 rounded-full bg-gray-200 hover:text-white'><LogOutIcon size={20}/></div>
        </div>
      
    </div>
  )
}

export default Sidebar
