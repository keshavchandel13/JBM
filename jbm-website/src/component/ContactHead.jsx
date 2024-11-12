import React from "react";

const ContactHead = () => {
  return (
    <>
      <div
        className="parallax p-10 flex text-white items-center justify-center"
        style={{ backgroundImage: 'url("/contact-bg.jpg")' }}
      >
        {/* Heading of the contact form */}
        <div className="font-bold text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-7xl">
          CONTACT US
        </div>
      </div>

      <div className="my-4">
        {/* Design image */}
        <div className="flex   mx-auto h-10" style={{ width: "25rem" }}>
          <img src="/design.png" alt="" style={{ width: "25rem" }} />
        </div>
        <div className="text-center my-8 ">
          {/* PARA 1 */}
          <p>
            We are passionate about filmmaking and photography, and it's an
            honor to be chosen to capture your monumental event, preserving
            moments that last a lifetime.
          </p>
          <p>
            {" "}
            With our romantic fine art cinematography, we bring a unique
            atmosphere to your visual story.
          </p>
          {/* Para 2 */}
          <p className="mt-4">
            Take a moment, enjoy a cup of coffee, and share with us every detail
            you can think of if you'd like us to film your wedding journey. Tell
            us about yourselves; this helps
          </p>
          <p>
            {" "}
            us gain a genuine understanding of your personalities and connect
            with you as a couple.
          </p>

          {/* para 3 */}
          <p className="mt-4">
            When you look back at your films and photos years down the line, you
            won't just revisit those cherished moments, but you'll also see how
            beautifully your love
          </p>
          <p> story has grown. Let us craft this magic for you.</p>
        </div>

        {/* Design image */}

        <div className="flex mx-auto h-10" style={{ width: "25rem" }}>
          <img src="/design.png" alt="" style={{ width: "25rem" }} />
        </div>
      </div>
    </>
  );
};

export default ContactHead;
