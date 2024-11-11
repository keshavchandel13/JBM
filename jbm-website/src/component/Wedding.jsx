import React from 'react';

const Wedding = () => {
  return (
    <div id="wedding-section" className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Wedding Celebration</h1>
        <p className="text-xl text-gray-600 mt-2">Capturing the essence of love and joy</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lora-unique lora-unique">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i14.jpg" alt="Wedding Moment 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">The First Dance</div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i16.jpg" alt="Wedding Moment 2" className="w-full h-72  object-top  object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">The Vows</div>
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i9.jpeg" alt="Wedding Moment 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Candid Laughter</div>
        </div>

        {/* Image 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i17.jpg" alt="Wedding Moment 4" className="w-full h-72 object-contain" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Wedding Cake Cutting</div>
        </div>

        {/* Image 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i11.jpg" alt="Wedding Moment 5" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Bride and Groom</div>
        </div>

        {/* Image 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i12.jpg" alt="Wedding Moment 6" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">The Bridal Party</div>
        </div>
      </div>
      
    </div>
  );
};

export default Wedding;
