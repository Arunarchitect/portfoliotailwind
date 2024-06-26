import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8 text-center'>Get in touch</h2>
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
                    <form  action="https://getform.io/f/9ea19b12-f9b6-4fcc-9f20-e5b6859f17a1" method="POST" className="w-full">
                        <div className="mb-5">
                            <input type="text" name="name" placeholder='Enter your Name' className="w-full p-3 focus:outline-none" />
                        </div>
                        <div className="mb-5">
                            <input type="email" name="email" placeholder='Enter your Email' className="w-full p-3 focus:outline-none" />
                        </div>
                        <div className="mb-5">
                            <input type="text" name='subject' placeholder='Enter your Subject' className="w-full p-3 focus:outline-none" />
                        </div>
                        <div className="mb-5">
                            <textarea type="text" name='message' placeholder='Write your message' className="w-full p-3 focus:outline-none" />
                        </div>
                        <button type="submit" className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor  text-center ease-linear duration-150">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact