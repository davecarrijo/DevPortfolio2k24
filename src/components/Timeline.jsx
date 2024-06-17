import { Component } from "react";

export class Timeline extends Component {
  render() {
    return (
      <div className='Timeline_Container'>
        <div className='Timeline_Container_H'>
          <ul className='timeline timeline-horizontal '>
            <li>
              <div className='timeline-start '>2003</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-3 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end timeline-box text-sm '>
                First computer
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div align='center' className='timeline-start timeline-box'>
                Contact with<br></br> HTML/Css
              </div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end  text-sm'>2006</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start'>2017</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-2 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div
                align='center'
                className='  timeline-end timeline-box text-sm '
              >
                High School<br></br>
                (Science & tecnology)
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div align='center' className='timeline-start timeline-box'>
                Start University <br></br>at UAB
              </div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end  text-sm'>2024</div>
              <hr />
            </li>
          </ul>
        </div>
        <div className='Timeline_Container_V'>
          <ul className='timeline timeline-vertical'>
            <li>
              <div className='timeline-start'>2003</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end timeline-box text-sm'>
                First computer
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start'>2006</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end timeline-box text-sm'>
                Contact with HTML/Css
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start'>2017</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end timeline-box text-sm'>
                High School<br></br>
                (Science & tecnology)
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start'>2024</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-end timeline-box text-sm'>
                Start University at UAB
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Timeline;
