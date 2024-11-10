import React from 'react';

const Packages = () => {
  return (
    <div className="bg-gray-100 py-12 " id='#projects'>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Wedding Photography Packages</h1>
        <p className="text-xl text-gray-600 mt-2">Choose the perfect package for your special day</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Package 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800">Basic Package</h2>
          <p className="text-lg text-gray-600 mt-2">Perfect for intimate weddings</p>
          <div className="mt-4">
            <p className="text-4xl font-semibold text-gray-800">₹15,000</p>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>5 hours of coverage</li>
              <li>300 edited photos</li>
              <li>Online gallery</li>
            </ul>
          </div>
          {/* <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button> */}
        </div>

        {/* Package 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800">Standard Package</h2>
          <p className="text-lg text-gray-600 mt-2">Great for medium-sized weddings</p>
          <div className="mt-4">
            <p className="text-4xl font-semibold text-gray-800">₹25,000</p>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>8 hours of coverage</li>
              <li>500 edited photos</li>
              <li>Online gallery & USB drive</li>
              <li>2 photographers</li>
            </ul>
          </div>
          {/* <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button> */}
        </div>

        {/* Package 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800">Premium Package</h2>
          <p className="text-lg text-gray-600 mt-2">For a lavish wedding celebration</p>
          <div className="mt-4">
            <p className="text-4xl font-semibold text-gray-800">₹40,000</p>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>12 hours of coverage</li>
              <li>700 edited photos</li>
              <li>Online gallery & USB drive</li>
              <li>3 photographers & videographers</li>
              <li>Pre-wedding shoot</li>
              <li>Wedding album</li>
            </ul>
          </div>
          {/* <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Packages;
