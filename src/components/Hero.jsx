import { Component } from "react";
import { HoverCard, Portal } from "@ark-ui/react";

export class Hero extends Component {
  render() {
    return (
      <div>
        <div className='hero min-h-screen bg-base-200 rounded  pb-10 '>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='h-auto '>
              <img
                src='https://scontent.flis6-2.fna.fbcdn.net/v/t31.18172-8/14324204_545386972313562_6006055881877513316_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mZQVEAUvfOUQ7kNvgElSroJ&_nc_ht=scontent.flis6-2.fna&oh=00_AYBlZj1u0pkiNh08oJomzGmqEBRhZi4alEhQxeU2w4tsFw&oe=6695C1C3'
                className='shadow-2xl h-45 '
              />
              <div className='flex-row'>
                {" "}
                <p className='text-xs animate-bounce  '>↑ that`s me</p>
                <p className='text-xs ml-10 text-slate-500 '>
                  Picture by{" "}
                  <a
                    className='non-italic dark:text-white text-black underline decoration-sky-500/80 hover:text-sky-500 '
                    href='https://www.facebook.com/btogoblin?comment_id=Y29tbWVudDo1NDUzODY5NzIzMTM1NjJfNTQ1Mzg4OTYyMzEzMzYz'
                    target='blank'
                  >
                    Beto Ribeiro
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-7xl font-bold'>
                <p>
                  <br></br>
                  <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400'>
                    Developer.
                  </div>
                  <div className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                    Ilustrator.
                  </div>
                  Designer.<br></br>
                </p>
              </h1>
              <p className='pt-3'>
                Hi there 👋, my name is
                <HoverCard.Root>
                  {" "}
                  <HoverCard.Trigger>David Carrijo</HoverCard.Trigger>
                  <Portal>
                    <HoverCard.Positioner>
                      <HoverCard.Content>
                        <HoverCard.Arrow>
                          <HoverCard.ArrowTip />
                        </HoverCard.Arrow>
                        <div className='h-auto text-[2px]  p-2 rounded thin bg-base-300``` light:text-white'>
                          A awkward person, that like to <br></br>to read
                          HP.Lovecraft.🪐
                          <br></br>
                        </div>
                      </HoverCard.Content>
                    </HoverCard.Positioner>
                  </Portal>
                </HoverCard.Root>
              </p>
              <p className='pt-3'> </p>
              <p className='py-1 font-light'>
                I’m currently learning computer science on college.<br></br>I
                define myself as someone who is able to adapt to any situation
                and find the best way to solve complex and simple problems. And
                bring the best response and resolution to get a boost on the
                team.
              </p>
              <ul className='menu menu-horizontal bg-base-300 rounded-box lg:mt-10'>
                <li>
                  <a href='http://www.github.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Github icon
                        d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='http://www.linkedin.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Linkedin Icon
                        d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='http://www.twitter.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Twitter Icon
                        d='M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className='bg-base-300 rounded-box mt-2 pl-3'>
                <span className=' mt-2 flex font-bold'>I build with ↓</span>
                <div className='  h-auto   '>
                  <div align='center' className='flex  mt-2 gap-2'>
                    <code>
                      <img
                        width='50'
                        src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'
                        alt='Git'
                        title='Git'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        src='https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/258326081-b113a23c-5c04-45aa-819c-bd04e8ac2a37.png'
                        alt='Neovim'
                        title='Neovim'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        src='https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'
                        alt='Tailwind CSS'
                        title='Tailwind CSS'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
                        alt='React'
                        title='React'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'
                        alt='Node.js'
                        title='Node.js'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        src='https://github.com/marwin1991/profile-technology-icons/assets/136815194/7e9599e9-0570-4bb6-b17f-676ed589912f'
                        alt='Bun.js'
                        title='Bun.js'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        className='animate-wiggle animate-infinite animate-duration-[2000ms]'
                        src='https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png'
                        alt='Vite'
                        title='Vite'
                      />
                    </code>
                    <code>
                      <img
                        width='50'
                        className='bg-white '
                        src='https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png'
                        alt='mongoDB'
                        title='mongoDB'
                      />
                    </code>
                    <HoverCard.Root>
                      {" "}
                      <HoverCard.Trigger>Learning ✋🏻↓</HoverCard.Trigger>
                      <Portal>
                        <HoverCard.Positioner>
                          <HoverCard.Content>
                            <HoverCard.Arrow>
                              <HoverCard.ArrowTip />
                            </HoverCard.Arrow>
                            <div className='h-auto text-[2px]  p-2 rounded-box thin bg-base-300'>
                              <div
                                align='center'
                                className='flex gap-3 mt-2 rounded align-middle'
                              >
                                <code>
                                  <img
                                    width='30'
                                    src='https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png'
                                    alt='Java'
                                    title='Java'
                                  />
                                </code>

                                <code>
                                  <img
                                    width='30'
                                    src='https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png'
                                    alt='Spring'
                                    title='Spring'
                                  />
                                </code>

                                <code>
                                  <img
                                    width='30'
                                    src='https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png'
                                    alt='Python'
                                    title='Python'
                                  />
                                </code>

                                <code>
                                  <img
                                    width='30'
                                    src='https://user-images.githubusercontent.com/25181517/184117132-9e89a93b-65fb-47c3-91e7-7d0f99e7c066.png'
                                    alt='pytest'
                                    title='pytest'
                                  />
                                </code>

                                <code>
                                  <img
                                    width='30'
                                    src='https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4'
                                    alt='Django'
                                    title='Django'
                                  />
                                </code>
                              </div>
                              <br></br>
                            </div>
                          </HoverCard.Content>
                        </HoverCard.Positioner>
                      </Portal>
                    </HoverCard.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
