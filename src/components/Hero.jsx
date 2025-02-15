import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      {/* image background */}
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      {/* Overlay,, the "/in the "bg-black adds an alpha value */}
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />

      {/* centered hero text */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        {/* media queries,,, the"[]" in tailwind css classes is used to add custom values */}
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Escape to a world of serenity and exclusivity with our private
            beaches and luxury getaways.
          </p>
          <button className="bg-white text-black ">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
