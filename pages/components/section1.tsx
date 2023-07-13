import { Button } from 'flowbite-react'
import { useRouter } from 'next/router';
import React from 'react'

const Section1 = () => {
    const router = useRouter() 
    const handleGetStarted = () => {
      router.push('/signup'); // Navigate to the signup page
    };
  return (<>
  <section className=' h-[30vh]'>
    <div className="text-center my-40">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to best blogging platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the platform that gives you the freedom to create your blog exactly the ay you want
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button onClick={handleGetStarted}>
          Get started
        </Button>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
    </div>
  </section>
  <br />

  

    
  

    
  </>
    
  )
}

export default Section1
