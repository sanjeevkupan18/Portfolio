import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Title = (props) => {

    const AboutRef = useRef()

    useGSAP(()=>{
        gsap.from(AboutRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.4,
        });
    })

  return (
    <div className="flex justify-center mt-10 lg:mt-0" ref={AboutRef}>
      <h1 className="text-lg lg:text-4xl transition-all duration-300 ease-out font-semibold text-center hover:bg-violet-800 hover:text-purple-300 text-violet-500 px-20 py-2 border-2 lg:w-full w-[80%] border-purple-500 rounded-2xl ">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
