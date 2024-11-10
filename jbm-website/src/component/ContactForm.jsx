import React, { useState } from "react";
const ContactForm = () => {
  // useState hook to manage the data locally
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // handleChange function--> handle the input changes

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handleSubmit function -->handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers:{
          "Content-Type":"application/json/;charset=utf=8",
        },
        body:JSON.stringify(formData),
      });
      const result = await response.json();
      if(response.ok){
        alert("Message sent succesfully!");
      }
      else{
        alert("Failed to sent the message"+result);
      }
    } catch (error) {
      console.log("error:"+error);
      alert("Error in sending the message");
    }
  };
  return (
    <div className="parallax p-10  font-bold">
      {/* Heading of the contact form */}

      <div className="text-5xl text-center mb-6 text-white  hover:underline decoration-gray-700 ">
        Contact Us!
      </div>
      <div className="bg-none">
        {/* contact form */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name input */}

          <div>
            <input
              id="name"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 mb-4 focus:outline-none focus:border-orange-400"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          {/* Phone number input */}

          <div>
            <input
              id="phone"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300  focus:outline-none focus:border-orange-400"
              type="number"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Email input */}

          <div>
            <input
              id="email"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 focus:outline-none focus:border-orange-400"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
            />
          </div>

          {/* message input */}

          <div>
            <textarea
              id="message"
              className="bg-transparent border-b-2 border-white p-2 w-full text-white placeholder-gray-300 focus:outline-none focus:border-orange-400"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit button */}

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
