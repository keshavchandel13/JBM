import React from 'react';

const PreWedding = () => {
  return (
    <div id='pre-wedding' className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Pre-Wedding Moments</h1>
        <p className="text-xl text-gray-600 mt-2 lora-unique">Celebrating love before the big day</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lora-unique">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i9.jpeg" alt="Pre-Wedding Moment 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">A Perfect Stroll</div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i7.jpeg" alt="Pre-Wedding Moment 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Embracing the Love</div>
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i20.jpg" alt="Pre-Wedding Moment 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Golden Hour Glow</div>
        </div>

        {/* Image 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i11.jpg" alt="Pre-Wedding Moment 4" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">In the Moment</div>
        </div>

        {/* Image 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i12.jpg" alt="Pre-Wedding Moment 5" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Hand in Hand</div>
        </div>

        {/* Image 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/i13.jpg" alt="Pre-Wedding Moment 6" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Under the Stars</div>
        </div>
      </div>
    </div>
  );
};

export default PreWedding;
