import React from 'react'
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
  
  return (
    <footer className="bg-black pt-12">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full">
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful and Functional Spaces?
            </h2>
            <a href="#contact">
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i className="ri-mail-line"></i>Contact Me</button>
                    </a>
                    
                    
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              For more of my updates you can -----!<ReactWhatsapp number="+91 9447648320" message="Hi Arun, I am interested in your service."><i className="ri-whatsapp-line" style={{ color: '#00cc00',  fontSize: '24px' }}></i></ReactWhatsapp>
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow me:
              </span>
              {/* <span className="w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                <i className="ri-github-fill"></i>
                </a>
              </span> */}
              <span className="w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.youtube.com/@modelflick" target="_blank" className="text-gray-300 font-[500] text-[18px]">
                <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.facebook.com/arunravi.ravimr?mibextid=ZbWKwL" target="_blank"  className="text-gray-300 font-[500] text-[18px]">
                <i className="ri-facebook-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.instagram.com/arunarchitect.in/"  target="_blank" className="text-gray-300 font-[500] text-[18px]">
                <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.linkedin.com/in/arun-ravikumar-336331165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="text-gray-300 font-[500] text-[18px]">
                <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div >
        <ul className='flex items-center justify-center gap-10 mt-10'>
          <li><a className='text-gray-400 font-[600]' href="/#about">About</a></li>
          <li><a className='text-gray-400 font-[600]' href="/#services">Services</a></li>
          <li><a className='text-gray-400 font-[600]' href="/#portfolio">Portfolio</a></li>
          <li><a className='text-gray-400 font-[600]' href="/#contact">Contact</a></li>
      </ul>
        </div>
      </div>
      {/* footer top end */}
      {/* footer bottom */}
      <div className="bg-black py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>
                  A
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]" >Arun</h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>Professional</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-gray-400 text-[14px]">Copyright {new Date().getFullYear()} developed by Arun ravikumar- All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer