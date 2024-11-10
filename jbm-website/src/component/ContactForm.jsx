import React from "react";
const ContactForm = () => {

  return (
    <div className="parallax p-10  font-bold">
      {/* Heading of the contact form */}
      <div className="text-5xl text-center mb-6 text-white  hover:underline decoration-gray-700 ">Contact Us!</div>
      <div className="bg-none">
        {/* contact form */}
        <form action="/submit-form" method="post" className="space-y-4">
          <div>
            <input 
              id="name"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 mb-4 focus:outline-none focus:border-orange-400" 
              type="text" 
              placeholder="Name" 
              required 
            />
          </div>
          <div>
            <input 
              id="phone"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300  focus:outline-none focus:border-orange-400" 
              type="number" 
              placeholder="Phone Number" 
              required 
            />
          </div>
          <div>
            <input 
              id="email"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 focus:outline-none focus:border-orange-400" 
              type="email" 
              placeholder="Email" 
            />
          </div>
          <div>
            <textarea 
              id="message"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 focus:outline-none focus:border-orange-400" 
              placeholder="Message" 
              rows="4" 
              required 
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-lg mt-8"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;