import React from 'react'
import { Square , Calendar , Download , ArrowUpRight} from 'lucide-react'
import imgpro from '../assets/image1.png'
import graph from '../assets/graph.png'
import mybg from '../assets/image.png'
function Cards() {

  return (
    <div className='w-full'>
         {/* CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-3  mb-5 gap-3 items-stretch'>

              <div className='border border-gray-500 border-dashed rounded-xl p-8 md:p-4 w-full h-full  md:max-w-sm flex flex-col justify-between' >

              <div>
                <div className='flex justify-between'>
                  <div className='font-medium text-xl'>
                    <div>Team</div>
                    <div>Payments</div>
                  </div>
                  <div className='bg-white px-2 h-10 rounded-full flex text-gray-800 items-center'><Square  /></div>
                </div>

                <div className='bg-white rounded-full p-2  text-xs my-2 flex items-center text-gray-400 w-fit'>
                  <Calendar size={15}/>
                  <span>17th Nov 2023</span>
                </div>
                </div>

                <div>
                  <img className='w-3/4 pt-8' src={imgpro} />
                </div>
              </div>
              
              {/* Card 2 */}
              <div className='bg-white rounded-xl p-4 w-full h-full  md:max-w-sm flex flex-col justify-between ' >
                <div>

                <div className='flex justify-between'>
                  <div className='font-medium text-xl'>
                    <div>Income</div>
                    <div>Statistics</div>
                  </div>
                  <div className='bg-gray-800 px-2 h-10 rounded-full flex text-gray-300 items-center'><Download  /></div>
                </div>

                <div className='bg-green-300 rounded-full p-2  text-xs my-2 flex items-center text-green-500 w-fit'>
                  <ArrowUpRight size={15}/>
                  <span>12.9%</span>
                </div>
                </div>

                <div>
                  <img className='w-3/4 ' src={graph} />
                </div>

              </div>

            

            {/* 3rd Card */}
              <div className='border border-gray-500 border-dashed rounded-xl text-white p-1 w-full h-full max-[420px]:min-h-50 max-[768px]:min-h-80 md:max-w-sm' >
                <div className='transform transition duration-500 hover:rotate-5 hover:shadow-[0_20px_40px_-10px_rgba(255,100,100,0.6)] h-full  flex flex-col justify-between '>
                <div className='p-3 bg-cover rounded-t-xl h-full ' style={{ backgroundImage: `url(${mybg})` }}>

                <div className='flex justify-between '>
                  <div className='font-medium text-xl'>
                    <div>$29.9</div>
                    <div className='text-sm font-normal text-white'>Per Month</div>
                  </div>
                  <div className='bg-white px-2 h-10 rounded-full flex text-gray-800 items-center'><ArrowUpRight  /></div>
                </div>

                

                <div className='text-2xl mt-12 pb-4 '>
                  <div>Choose Best Plan for you!</div>
                </div>
                </div>

                <div className='flex bg-[#ff633cba] justify-end p-1 rounded-b-xl'>
                <div className='bg-black text-white rounded-full  text-xs my-2 flex items-end text-gray-400 w-fit'>
                  <span className='p-1'>Upgrade Now</span>
                </div>
                </div>
                </div>

              </div>

          </div>
      
    </div>
  )
}

export default Cards
