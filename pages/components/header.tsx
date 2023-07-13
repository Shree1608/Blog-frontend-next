'use client';
import { Avatar, Button, Checkbox, Label, Modal, Navbar, TextInput  , DropdownProps, Dropdown} from 'flowbite-react'
import { useRouter } from 'next/router';
import React, { useState ,useRef ,ChangeEvent, useEffect} from 'react'
import Section3 from '../components/section3';
import Link from 'next/link';

const Header = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter() 
  
  const handleGetStarted = () => {
    router.push('/login'); // Navigate to the signup page
  };


  


 


  return (
    <>
    <div className='  sm:mx-20 sticky top-0 left-0 right-0 z-40'>
    <Navbar className=''
      fluid
      rounded
    >
      <Navbar.Brand >
      <img
          alt="Flowbite React Logo"
          className="mr-3 h-20 sm:h-20"
          src="https://static.vecteezy.com/system/resources/previews/000/615/674/non_2x/letter-b-bubble-logo-template-or-icon-vector-illustration.jpg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Blogging platform
        </span>
      </Navbar.Brand>
      
      <div className="flex md:order-2">
      <Button onClick={handleGetStarted} >Login</Button>
      
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className=' text-base'
          active
          href="#"
        >
          <p >
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#about" className=' text-base'>
          About
        </Navbar.Link>
     
        <div className=' text-base hover:text-cyan-700 h-9 sm:mt-0 mt-3 ml-2.5'>
        <Dropdown inline label='Services' 
     
     children={
       <div className="flex h-max w-32 flex-col justify-start  bg-white bg-cover bg-no-repeat pb-4 shadow-[0_20px_25px_-5px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
       

         <div className="mt-3 ml-4 flex flex-col">
           <a
             href="#memory "
             className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
           >
           Memories
           </a>
           <a
             href="#money"
             className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
           >
            Earn money
           </a>
           
         </div>
       </div>
     }
    
   />
        </div>
        
        
     
        
      
      

     
            
        <Navbar.Link href="#blog" className=' text-base'>
          Blogs
        </Navbar.Link>
        <Navbar.Link href="#contact" className=' text-base'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    
    </div>
    
    </>
      
  )
}

export default Header
