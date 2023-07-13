import React ,{forwardRef , Ref, HTMLAttributes, useRef} from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon ,ArrowUpOnSquareStackIcon,ArrowUpOnSquareIcon,ShareIcon, PencilSquareIcon ,Square2StackIcon,ViewColumnsIcon ,ViewfinderCircleIcon} from '@heroicons/react/20/solid'

const Section3 = () => {
 
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32  "  id='memory' >
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <img
          src="https://img.freepik.com/free-vector/hand-drawn-moodboard-template_23-2150402754.jpg?w=740&t=st=1687330398~exp=1687330998~hmac=0c10684a019862eadaef5d5a29c51b69ca950a310a22ca25e1a0c2b99eeb431f"
          alt="Product screenshot"
          className="  w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem] md:-ml-5 lg:-ml-[-10px]  transition duration-300 ease-in-out hover:scale-110"
          
        />
        <div className="lg:pr-8 lg:pt-4 md:-ml-[-30px]">
          <div className="lg:max-w-lg  lg:ml-20">
            <h2 className="text-base font-semibold leading-7  text-cyan-600">Create faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create blog and share it with your friends</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.
            </p>
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Section3
