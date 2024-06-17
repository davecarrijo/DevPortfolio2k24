import { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className='bg-base-200 rounded '>
        <projects className='Project_Container '>
          <h1 className=' rounded m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  delay-3000 animate-pulse h-10 w-40 bg-gradient-to-r from-pink-500 via-pink-200 ...  '>
            Projects
          </h1>
          <div className=' flex-auto lg:flex '>
            <div className='m-2 ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='rounded-t-lg '
                  src='https://camo.githubusercontent.com/f75dd8e7f4d04f3cec9a4940ce463460a44f53e1030ac16a930c196b9c30c865/68747470733a2f2f692e696d6775722e636f6d2f71456b453559562e706e67'
                  alt=''
                />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Library - Bookyfied
                  </h5>
                </a>
                <p className=' font-normal text-gray-700 dark:text-gray-400'>
                  A library app following I made as a project for The Odin
                  Project. Using LocalStorage &{" "}
                  <a
                    className='font-bold hover:italic'
                    href='http://getskeleton.com/'
                  >
                    Skeleton
                  </a>
                </p>
                <a
                  href='https://davecarrijo.github.io/Library-Bookyfied/'
                  target='blank'
                  className='  mr-1 inline-flex mt-1  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 -to-r from-blue-600 via-pink-500 to-indigo-400 dark:focus:'
                >
                  Live
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
                <a
                  href='https://github.com/davecarrijo/Library-Bookyfied'
                  target='blank'
                  className='mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Code
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* eae */}
            <div className='m-2 ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='https://davecarrijo.github.io/Treemew'>
                <img
                  className='rounded-t-lg h-52 '
                  src='https://github.com/davecarrijo/Treemew/raw/main/assets/img/LivePreview.png?raw=true'
                  alt=''
                />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Simple Card Representation
                  </h5>
                </a>
                <p className=' font-normal text-gray-700 dark:text-gray-400 '>
                  Just a simple card Representation that can be used as a
                  template
                </p>
                <a
                  href='https://davecarrijo.github.io/Treemew/'
                  target='blank'
                  className=' mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Live
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
                <a
                  href='https://github.com/davecarrijo/Treemew'
                  target='blank'
                  className='   mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Code
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* eae */}
          </div>
          <div className='flex-auto lg:flex'>
            <div className='m-2 ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='rounded-t-lg'
                  src='https://github.com/ShadityZ/Vitrix/raw/master/logo.png'
                  alt=''
                />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Vitrix - open-source FPS video game
                  </h5>
                </a>
                <p className=' font-normal text-gray-700 dark:text-gray-400'>
                  Everybody knows lots of diffent FPS shooter games, from
                  Fortnite to CS:GO, the list is longly tiresome. So, what's any
                  different about Vitrix? Is purely made with Python Based on
                  the engine{" "}
                  <a
                    className='font-bold'
                    href='https://www.ursinaengine.org/'
                    target='blank'
                  >
                    Ursina (ʕ•ᴥ•ʔ)
                  </a>{" "}
                  and totally Open-source
                </p>
                <a
                  href='https://github.com/davecarrijo/Vitrix/archive/refs/heads/master.zip'
                  className=' mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Download
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
                <a
                  href='https://github.com/davecarrijo/Vitrix'
                  target='blank'
                  className='   mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Code
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* eae */}
            <div className='m-2 ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='rounded-t-lg'
                  src='https://github.com/davecarrijo/Old_Portfolio-Resume/blob/main/img/profile_big.jpg?raw=true'
                  alt=''
                />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Fist land-Page
                  </h5>
                </a>
                <p className=' font-normal text-gray-700 dark:text-gray-400'>
                  This is the first Land-Page I ever made, I still leave it here
                  to know where I starded and to have a sense of contrast. Pure
                  made with HTML/CSS and vanila JS
                </p>
                <a
                  href='https://davecarrijo.github.io/Old_Portfolio-Resume/'
                  target='blank'
                  className=' bg-cover bg-center mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Live
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
                <a
                  href='https://github.com/davecarrijo/Old_Portfolio-Resume'
                  target='blank'
                  className='   mr-1 inline-flex mt-1 tems-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:hover:bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400  dark:focus:ring-blue-800'
                >
                  Code
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* eae */}
          </div>
        </projects>
      </div>
    );
  }
}

export default Projects;
