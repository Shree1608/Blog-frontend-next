'use client';

import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter() 
    const handleGetStarted = () => {
      router.push('/dashboard'); // Navigate to the signup page
    };
  return (
    <>
     
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-cyan-600  hover:text-cyan-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button onClick={handleGetStarted}
                type="submit"
                className="flex w-full justify-center rounded-md  bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Not registered? {' '}
            <a href="/signup" className="font-semibold leading-6 text-cyan-600  hover:text-cyan-700">
            Create account
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
