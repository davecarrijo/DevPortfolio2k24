import React, { Component } from "react";
import { useState } from "react";

export class Nav_Burguer extends Component {
  render() {
    return (
      <div className='flex place-content-end'>
        <div className='Nav_Burguer'>
          <div className='Buguer_Icon'>
            <div className='Nav_Burger'>
              <div className='flex place-content-end'>
                <div className='Burguer_Menu'>
                  <label className='btn btn-circle swap swap-rotate'>
                    {/* this hidden checkbox controls the state */}
                    <input type='checkbox' />

                    {/* hamburger icon */}
                    <svg
                      className='swap-off fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 512 512'
                    >
                      <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                    </svg>

                    {/* close icon */}
                    <svg
                      className='swap-on fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 512 512'
                    >
                      <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='Burguer_Menu'>
            <ul className='menu bg-base-300 w-56 rounded-box'>
              <li>
                <details>
                  <summary>Projets</summary>
                  <ul>
                    <li>
                      <a>Personal</a>
                    </li>
                    <li>
                      <a>Open Source</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>About-me</summary>
                  <ul>
                    <li>
                      <a>Tech Stack</a>
                    </li>
                    <li>
                      <a>Info</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav_Burguer;
