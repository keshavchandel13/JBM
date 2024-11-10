import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="py-20 px-4 bg-white-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Mission Section */}
        <div className="mb-16">
          <h2 className=" font-bold text-gray-800 mb-4 font-serif text-3xl">Our Mission</h2>
          <p className="text-lg text-gray-600 italic">
            Our mission is to capture the most beautiful and heartfelt moments, turning them into lasting memories through the art of photography and film. We aim to offer a personalized experience, ensuring each story is told with authenticity and emotion.
          </p>
        </div>

        {/* Vision Section */}
        <div>
          <h2 className=" font-bold text-gray-800 mb-4 font-serif text-3xl">Our Vision</h2>
          <p className="text-lg text-gray-600 italic">
            Our vision is to be recognized as a leading photography studio that pushes the boundaries of creativity and storytelling. We strive to build a legacy of trust and excellence, delivering high-quality visuals that resonate with our clients for a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
