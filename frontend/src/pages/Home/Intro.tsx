import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 ">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-6xl text-secondary font-semibold">
        Swathy Sukumaran Vadakkath
      </h1>
      <h1 className="text-5xl text-white font-semibold">
        I build things for the Web
      </h1>
      <p className="text-white w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem ipsum,
        magnam distinctio voluptate laborum quod tempore eius, possimus dolorum
        qui ullam debitis aperiam reiciendis, fugiat adipisci? Libero, laborum
        veniam.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
