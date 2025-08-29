import React from 'react'
import {DollarSign, Wallet, TrendingUp, TrendingDown , MoreHorizontal , ArrowUpRight} from 'lucide-react';
import Cards from './Cards'
import Chart from '../assets/chart.png'


function LeftContent() {
  return (
    <div className='lg:w-full m-5 '>

      <div >
        {/* STAT */}
        <div className='bg-white rounded-xl text-gray-800  justify-center mb-5  md:flex text-center items-center font-medium'>

          <div className='xl:p-8 p-4 lg:p-2 flex-col justify-self-center '>
            <div className='flex gap-2 xl:text-lg items-center '>
              <div className='bg-gray-100 text-white p-2  rounded-full'>
                <div className='bg-green-500 p-1 rounded-full text-sm'>
                  <DollarSign size={10}/>
                </div>
              </div>
              <span>Total Earning</span>
            </div>

            <div className='flex gap-4 items-center'>
              <span className='text-lg lg:text-sm xl:text-2xl'>$ 2,235,25</span>
              <div className='flex items-center gap-1'>
                <div className='bg-green-500 h-5 text-white px-2 flex items-center rounded-full'><TrendingUp size={10}/></div>
                 <span className='text-sm lg:text-xs xl:text-base'>+3,25%</span>
              </div>
            </div>
          </div>

          <div className='w-[2px] bg-gray-300 h-16 hidden md:flex min-[1100px]:m-2 xl:m-0'></div>
          <div className='w-1/2 bg-gray-300 h-1 md:hidden flex justify-self-center' />

          <div className='xl:p-8 p-4 lg:p-2 flex-col justify-self-center '>
            <div className='flex gap-2 xl:text-lg items-center'>
              <div className='bg-gray-100  text-white p-2 rounded-full'>
                <div className='bg-red-400 p-1 rounded-full txt-sm'>
                  <DollarSign size={10}/>
                </div>
              </div>
              <span>Total Spending</span>
            </div>

            <div className='flex gap-4 items-center'>
              <span className='text-lg lg:text-sm xl:text-2xl'>$ 1928.65</span>
              <div className='flex items-center gap-1'>
                <div className='bg-red-400 h-5 text-white px-2 flex items-center rounded-full'><TrendingDown size={10}/></div>
                 <span className='text-sm xl:text-base lg:text-xs'>-5,82%</span>
              </div>
            </div>
          </div>

          <div className='w-[2px] bg-gray-300 h-16 hidden md:flex min-[1100px]:m-2 xl:m-0'></div>
          <div className='w-1/2 bg-gray-300 h-1 md:hidden flex justify-self-center' />

          <div className='xl:p-8 p-4 lg:p-2 xl:p-4 flex-col justify-self-center '>
            <div className='flex gap-2 xl:text-lg items-center'>
              <div className='bg-gray-100 text-white p-2 rounded-full'>
                <div className='bg-orange-500 p-1 rounded-full txt-sm'>
                  <Wallet size={12}/>
                </div>
              </div>
              <span>Spending Goals</span>
            </div>

            <div className='flex gap-4 items-center'>
              <span className='text-lg lg:text-sm xl:text-2xl'>$ 5,023.83</span>
              <div className='flex items-center gap-1'>
                <div className='bg-green-500 h-5 text-white px-2 flex items-center rounded-full'><TrendingUp size={10}/></div>
                 <span className='text-sm xl:text-base lg:text-xs'>+8,23%</span>
              </div>
            </div>
          </div>

        </div>

           <div>
            {/* TOGGLE */}
            <div className='flex items-center mb-5 justify-between'>

              <div className='bg-white rounded-full  flex w-fit '>
                  <div className='p-2 px-4 bg-gray-800 text-gray-200 rounded-full'>Full Statistic</div>
                  <div className='p-2 px-4 bg-white text-gray-400 rounded-full'>Result Summary</div>
              </div>

              <div className='hidden  rounded-full bg-white p-2  min-[500px]:flex '>
                <MoreHorizontal fontSize={8}/>
              </div>
            </div>
          </div>

          <div>
            <Cards />
           </div>

           <div className='border-2  border-white w-fit rounded-xl w-full text-gray-800 p-4 '>

              <div className='flex max-[510px]:flex-col min-[510px]:items-center justify-between '>
                <div className='font-medium text-xl'>Monthly Summary</div>
                <button className='flex items-center bg-white rounded-full max-[510px]:w-fit  py-2 px-4 gap-2 text-sm'>
                  <span>17th Nov 2023</span>
                  <div>
                    <i className="fa-solid fa-angle-down text-gray-900"></i>
                  </div>
                </button>
              </div>

              <div className='flex max-[768px]:flex-col gap-4  mt-2'>

                <div className='w-full min-w-fit md:w-1/4 flex flex-col justify-between' >

                  <div className='flex justify-between rounded-xl bg-white flex p-4 gap-4 h-23/48 mb-4'>
                  <div>
                    <p className=' font-medium text-base md:text-sm xl:text-xl'>Total Profit</p>
                    <div className='font-medium text-3xl  md:text-2xl'>$28,30k</div>
                    <div className='flex text-gray-400 text-sm md:text-xs items-center xl:text-base xl:gap-1'><TrendingUp size={16} className='text-green-500 text-xs'/><span>19.37%</span></div>
                  </div>
                  <div className='p-4 bg-gray-800 flex items-center justify-center rounded-full text-gray-300 h-14 '><ArrowUpRight size={24} /></div>
                  </div>

                  


                  <div className='flex justify-between  rounded-xl bg-white h-23/48 flex p-4 gap-4'>
                  <div>
                    <p className='font-medium text-base  md:text-sm xl:text-xl'>Total Revenue</p>
                    <div className='font-medium text-3xl md:text-2xl'>$12,83k</div>
                    <div className='flex text-gray-400 text-sm md:text-xs xl:text-base items-center xl:gap-1'><TrendingUp size={16} className='text-green-500 text-xs '/><span>23.90%</span></div>
                  </div>
                  <div className='p-4 bg-gray-800 flex items-center justify-center rounded-full text-gray-300 h-14 '><ArrowUpRight size={24} /></div>
                  </div>

                </div>

                <div className='bg-white rounded-xl pl-1'><img className='rounded-xl  bg-white' src={Chart} /></div>
              </div>

           </div>


        </div>
    </div>
  )
}

export default LeftContent
