import React from "react";

const MidBody = () => {
  return (
    <div className="mt-8 p-4">
      <div className="text-center text-4xl mb-4">
        <h1 style={{ fontFamily: "sans-serif" }}>
          BOOK THE BEST WEDDING PHOTOGRAPHER OF HIMACHAL
        </h1>
      </div>
      <div className="flex flex-row p-20 justify-center italic text-base">
        <div className="p-4 max-w-lg">
          Capturing timeless moments in the heart of Himachal, we bring your
          <br /> wedding day to life with stunning, high-quality photography.
          Known
          <br /> as the premier wedding photographer in Himachal Pradesh, we
          <br /> specialize in turning natural beauty and cherished memories
          into
          <br /> unforgettable images. From majestic mountain backdrops to the
          <br /> intimate details of your ceremony, trust us to create a visual
          story
          <br /> that you'll treasure forever.
        </div>
        <div
          className="w-40 h-60 bg-cover ml-24"
          style={{ backgroundImage: "url('/2.jpg')" }}
        ></div>
      </div>
    </div>
  );
};
export default MidBody;
