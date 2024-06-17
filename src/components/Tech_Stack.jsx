import React, { Component } from "react";
{
  /* <span>
            <img
              alt=''
              src='https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg'
            ></img>
          </span>
          <span>
            <img
              alt=''
              src='https://github.com/onemarc/tech-icons/raw/main/icons/python-dark.svg'
            ></img>
          </span>
          <span>
            <img
              alt=''
              src='https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg'
            ></img>
          </span>
          <span>
            <img
              alt=''
              src='https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg'
            ></img>
          </span>
          <span>
            <img
              alt=''
              src='https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg'
            ></img>
          </span> */
}

export class Tech_Stack extends Component {
  render() {
    return (
      <div className=' border-inheriter border-slate-600'>
        <div className='flex '>
          <span className='flex w-3 h-3 me-3 bg-gray-500 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-gray-200 rounded-full dark:bg-gray-700'></span>
          <span className='flex w-3 h-3 me-3 bg-blue-300 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-green-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-red-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-purple-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-indigo-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-yellow-300 rounded-full'></span>
          <span className='flex w-3 h-3 me-3  bg-gradient-to-r from-yellow-200 bg-teal-100 ...  rounded-full'></span>
        </div>
      </div>
    );
  }
}

export default Tech_Stack;
