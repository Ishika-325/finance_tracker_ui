import React from 'react'

const Mobile = () => {
  return (
    <div className='w-full p-5 pt-0'>
        <div className=' fixed p-5 w-[calc(100%-40px)] z-100 flex flex-col justify-center bg-white  rounded-xl text-center md:hidden'>
            <a  className=" p-3">
            Dashboard
          </a>
          <a className="p-3">Transaction</a>
          <a className="p-3">Invoicing</a>
          <a className="p-3">Report</a>
          <a className="p-3">Analytics</a>
          <a className='p-3 flex gap-2 justify-center'><div><i className="fa-regular fa-bell text-gray-900"></i></div>
                    <span>Notifications</span>
                    <div className='bg-[#ff633c] text-gray-200 rounded-full max-[400px]:px-0 px-2'>12</div></a>
            </div>
      
    </div>
  )
}

export default Mobile
