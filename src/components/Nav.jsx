import { Component } from "react";
import { Tooltip } from "@ark-ui/react";

// theme toogle
<div className='sm: Toggle_theme'>
  <label className='swap swap-rotate'>
    {/* this hidden checkbox controls the state */}
    <input type='checkbox' />

    {/* sun icon */}
    <svg
      className='swap-on fill-current w-10 h-10'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
    </svg>

    {/* moon icon */}
    <svg
      className='swap-off fill-current w-10 h-10'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
    </svg>
  </label>
</div>;
//

export class Nav extends Component {
  render() {
    return (
      <div>
        <div className='Main_Nav_Container'>
          <div className='Nav_Container'>
            <div className=' navbar  bg-base-100'>
              <div className='flex-1'>
                <a className='btn btn-ghost text-xl'>WAIølos</a>
              </div>
              <div className='flex-none '>
                <ul className='menu menu-horizontal px-1 '>
                  {/* <li>
                    <details>
                      <summary>Project's</summary>
                      <ul className='p-0 bg-base-100 rounded-t-none'>
                        <li>
                          <a>Personal</a>
                        </li>
                        <li>
                          <a>Open-Source</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>About-me</summary>
                      <ul className='p-2 bg-base-100 rounded-t-none'>
                        <li>
                          <a>Tech-Stack</a>
                        </li>
                        <li>
                          <a>Info</a>
                        </li>
                      </ul>
                    </details>
                  </li> */}
                  <li>
                    <a
                      href='mailto:davecarrijodev@gmail.com'
                      className='Btn_Blue '
                      target='blank'
                      type='button'
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className='greener text-white bg-green-400 hover:bg-green-200 hover:text-black '
                      href='https://docs.google.com/document/d/1tj9PbFTypZFpbEL9_OdAjHWKA5AhRzuO8Q7eHNMktLM/edit?usp=sharing'
                      target='blank'
                    >
                      <Tooltip.Root>
                        <Tooltip.Trigger>Resume</Tooltip.Trigger>
                        <Tooltip.Positioner>
                          <Tooltip.Content>
                            <p className='text-xs font-thin mt-2dark:text-white'>
                              It`s not a download, it`s a drive link
                            </p>
                          </Tooltip.Content>
                        </Tooltip.Positioner>
                      </Tooltip.Root>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
