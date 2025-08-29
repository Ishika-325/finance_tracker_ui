import React from 'react'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Sidebar from './components/Sidebar'
import Mobile from './components/Mobile'
import { useState } from 'react'
import './index.css'
function App() {
  const [isMenu, setMenu] = useState('false')
  return (
    <div className='bg-gray-100 h-screen '>
      <Navbar className='z-50' isOpen={isMenu} setIsOpen={setMenu}/>
      {isMenu && <Mobile />}
      <div className='flex h-[calc(100vh-7rem)]'>
        <Sidebar className=' overflow-hidden' />
        <div className='lg:flex overflow-y-auto h-[calc(100vh-7rem)]'>



          <LeftContent /> 
          <RightContent />
        </div>
      </div>
    </div>
  )
}

export default App
