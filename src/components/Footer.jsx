import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className=' mt-32 '>
          <footer className='bg-base-100 dark:bg-base-100'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
              <div className='sm:flex sm:items-center sm:justify-between'>
                <div className='flex justify-center '>
                  <a className='btn btn-ghost text-xl'>WAIølos</a>
                </div>

                <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400'>
                  Copyright &copy; 2022. All rights reserved.{" "}
                  <a
                    className='hover:text-cyan-500'
                    href='mailto:davecarrijodev@gmail.com'
                  >
                    | davecarrijodev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
