import React, { useState } from 'react'
import ReactWhatsapp from 'react-whatsapp'

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const handleWhatsAppClick = () => {
    closePopup()
  }

  return (
    <section id="contact" className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8 text-center'>Get in touch</h2>
            
            {/* Note about contact methods */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-center">
                <p className="text-blue-800 font-medium">
                    📧 Contact Note: The contact form is currently inactive. Please click on WhatsApp or social media links to message me directly.
                </p>
            </div>

            <div className="md:flex justify-between items-center">
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe
                title='google-maps'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d696.5316935964355!2d76.56481791245582!3d9.047527470933437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702152166764!5m2!1sen!2sin"
                className='border-0 w-full h-full'
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                
                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-5">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Enter your Name' 
                                className="w-full p-3 focus:outline-none rounded" 
                            />
                        </div>
                        <div className="mb-5">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder='Enter your Email' 
                                className="w-full p-3 focus:outline-none rounded" 
                            />
                        </div>
                        <div className="mb-5">
                            <input 
                                type="text" 
                                name='subject' 
                                placeholder='Enter your Subject' 
                                className="w-full p-3 focus:outline-none rounded" 
                            />
                        </div>
                        <div className="mb-5">
                            <textarea 
                                name='message' 
                                placeholder='Write your message' 
                                rows="4"
                                className="w-full p-3 focus:outline-none rounded" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 text-center">
                <h3 className="text-headingColor font-[600] text-[1.5rem] mb-6">
                    Or contact me directly via:
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {/* WhatsApp */}
                    <div className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200 cursor-pointer">
                        <ReactWhatsapp
                            number="+91 9447648320"
                            message="Hi Arun, I am interested in architectural/planning your service."
                            onClick={handleWhatsAppClick}
                        >
                            <i
                                className="ri-whatsapp-line"
                                style={{ color: "#00cc00", fontSize: "24px" }}
                            ></i>
                            <span>WhatsApp</span>
                        </ReactWhatsapp>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4">
                        <span className="w-[45px] h-[45px] bg-headingColor p-2 rounded-[50px] cursor-pointer text-center hover:bg-smallTextColor ease-in duration-200">
                            <a href="https://www.youtube.com/@modelflick" target="_blank" rel="noopener noreferrer" className="text-white font-[500] text-[18px]">
                                <i className="ri-youtube-line"></i>
                            </a>
                        </span>
                        <span className="w-[45px] h-[45px] bg-headingColor p-2 rounded-[50px] cursor-pointer text-center hover:bg-smallTextColor ease-in duration-200">
                            <a href="https://www.facebook.com/arunravi.ravimr?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white font-[500] text-[18px]">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                        </span>
                        <span className="w-[45px] h-[45px] bg-headingColor p-2 rounded-[50px] cursor-pointer text-center hover:bg-smallTextColor ease-in duration-200">
                            <a href="https://www.instagram.com/arunarchitect.in/" target="_blank" rel="noopener noreferrer" className="text-white font-[500] text-[18px]">
                                <i className="ri-instagram-line"></i>
                            </a>
                        </span>
                        <span className="w-[45px] h-[45px] bg-headingColor p-2 rounded-[50px] cursor-pointer text-center hover:bg-smallTextColor ease-in duration-200">
                            <a href="https://www.linkedin.com/in/arun-ravikumar-336331165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white font-[500] text-[18px]">
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Feature Not Active</h3>
                        <p className="text-gray-600 mb-4">
                            The contact form is not active at the moment. Please contact me directly via WhatsApp or social media links.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={closePopup}
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                            >
                                Close
                            </button>
                            <div className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200 cursor-pointer">
                                <ReactWhatsapp
                                    number="+91 9447648320"
                                    message="Hi Arun, I am interested in architectural/planning your service."
                                    onClick={closePopup}
                                >
                                    <i
                                        className="ri-whatsapp-line"
                                        style={{ color: "#00cc00", fontSize: "20px" }}
                                    ></i>
                                    <span>Open WhatsApp</span>
                                </ReactWhatsapp>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600 mb-2">Or connect via social media:</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.youtube.com/@modelflick" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                                    <i className="ri-youtube-line text-2xl"></i>
                                </a>
                                <a href="https://www.facebook.com/arunravi.ravimr?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                    <i className="ri-facebook-box-fill text-2xl"></i>
                                </a>
                                <a href="https://www.instagram.com/arunarchitect.in/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                                    <i className="ri-instagram-line text-2xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arun-ravikumar-336331165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                    <i className="ri-linkedin-box-fill text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Contact