import React from 'react';

const Map = () => {
  return (
    <div className='mt-6'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13450.152366175882!2d76.09966711422062!3d32.56517083642216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391cbdd4036af169%3A0x4e466b9b9447a58!2sJBM%20FOOD&#39;S%20%26%20CAFE!5e0!3m2!1sen!2sin!4v1731069900852!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
