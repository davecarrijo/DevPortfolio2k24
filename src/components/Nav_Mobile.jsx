import React, { Component } from "react";
import { Tooltip } from "@ark-ui/react";

export class Nav_Mobile extends Component {
  render() {
    return (
      <div>
        <div className='Main_Nav_Mobile_Container '>
          <div className='Nav_Burger  '>
            <div className=' navbar h-1 w-auto fixed z-20 bg-black/80  backdrop-blur-sm rounded    '>
              <div className='flex-2'>
                <a className='btn btn-ghost text-xl'>WAIølos</a>
              </div>
              <div className='flex-none '>
                <div className='px-10'></div>
                <div className='px-8'></div>
                <ul className='menu menu-horizontal '>
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
                      className='greener text-white bg-green-400 hover:bg-green-200  '
                      href='https://docs.google.com/document/d/1tj9PbFTypZFpbEL9_OdAjHWKA5AhRzuO8Q7eHNMktLM/edit?usp=sharing'
                      target='blank'
                    >
                      <Tooltip.Root>
                        <Tooltip.Trigger>Resume</Tooltip.Trigger>
                        <Tooltip.Positioner>
                          <Tooltip.Content>
                            <p className='text-xs font-thin dark:text-white'>
                              It's not a download, it's a drive link
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

export default Nav_Mobile;
