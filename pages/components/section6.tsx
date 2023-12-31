import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon ,CalendarIcon,InboxIcon,ArrowUpOnSquareStackIcon,ArrowUpOnSquareIcon,ShareIcon, PencilSquareIcon ,Square2StackIcon,ViewColumnsIcon ,PhoneIcon,ViewfinderCircleIcon , EnvelopeIcon, ChevronDownIcon} from '@heroicons/react/20/solid'

const features = [
    {
      name: 'mail@blog.com.',
      icon: EnvelopeIcon,
    },
    {
      name: '+49 3039 770 880',
      icon: PhoneIcon,
    },
    {
      name: 'Arrange appointment.',
      icon: CalendarIcon,
    },
  ]
const Section6 = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32  " id='contact'>
    <div className="mx-auto max-w-7xl px-20 lg:px-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg  sm:-ml-[20px] lg:-ml-[-100px]">
            <h2 className="text-base font-semibold leading-7  text-cyan-600"> Question?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lets's Talk</p>
           
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-cyan-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  
                </div>
              ))}
            </dl>
          </div>
        </div>
      
        <div className=' sm:w-[28rem] md:-ml-5 lg:-ml-[-100px]'>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
         
          <form action="#" method="POST" className="mx-auto mt-16 max-w-xl"/>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:px-8 text-left">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
            </div>
            <div className="mt-10 lg:px-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Let's talk
          </button>
        </div>
        </div>
        </div>
      
        
        </div>
      </div>
      </div>
      
      )
      }

export default Section6
