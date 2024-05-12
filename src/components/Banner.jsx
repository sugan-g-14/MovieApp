import React from "react";

function Banner() {
  return (
    <>
    <div
      className="md:h-[80vh]  bg-no-repeat  bg-cover flex flex-row justify-between items-end  "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/76/14/44/7614449325f2064899c51e93aa67d60d.jpg)",

      }}
    >
    <div className="text-white text-2xl text-center w-full bg-gray-900/60  p-4  ">Avengers Endgame</div>
    </div>
    </>
  );
}

export default Banner;
