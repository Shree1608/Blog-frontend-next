import React from 'react'

const Section4 = () => {
  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-32  " id='money'>
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
      <div className="lg:pr-8 lg:pt-4  md:-ml-[70px]">
          <div className="lg:max-w-lg  lg:ml-20">
            <h2 className="text-base font-semibold leading-7  text-cyan-600">Create faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create blog and share it with your friends</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.
            </p>
            
          </div>
        </div>
     
     
      <img
          src="./money.png"
          alt="Product screenshot"
          className="  w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem] md:-ml-5 lg:-ml-[-100px]  transition duration-300 ease-in-out hover:scale-110"
          
        />
       
       
      </div>
    </div>
  </div>
    </div>
  )
}

export default Section4
