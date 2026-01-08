
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Title from "../components/Title";

const Education = () => {

    const EdRef1 = useRef()
    const EdRef2 = useRef()
    const EdRef3 = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(EdRef1.current,{
            x:-300,
            opacity:0,
            duration:0.5
        })
        .from(EdRef2.current,{
            x:300,
            opacity:0,
            duration:0.5
        })
        .from(EdRef3.current,{
            x:-300,
            opacity:0,
            duration:0.5
        })
    })
    
  return (
    <div className="lg:h-full lg:w-full h-auto w-full  bg-gradient-to-b from-black via-purple-950 to-violet-900 lg:px-20 lg:py-10">
      <Title title={"Education"} />
      <div className="lg:h-fit lg:w-full h-auto w-full items-center  mt-25 flex flex-col relative gap-4">
        <div
          ref={EdRef1}
          className="lg:h-1/3 lg:w-full h-auto w-[90%] lg:px-0 px-8   rounded-2xl flex "
        >
          <div className="w-1/2 h-full border-2 border-violet-400 px-5 py-3 rounded-2xl shadow-[0_0_30px_20px_rgba(126,34,206,0.6)] hover:shadow-[0_0_30px_20px_rgba(0,0,0,0.75)] transition-all duration-300 ease-out hover:-translate-x-9">
            <h1 className="text-2xl font-bold text-orange-500">B.Tech</h1>
            <h2 className="text-xl font-bold text-violet-500">
              Bengal College of Engineering & Technology
            </h2>
            <h4 className="text-lg font-semibold">
              Computer Science & Engineering
            </h4>
            <p className="text-medium font-semibold">2023 - 2027</p>
          </div>

          <div className="w-1/2 h-full border-l-8 border-violet-400 px-5 py-3">
            <h1 className="opacity-0 text-2xl font-bold text-orange-500">
              B.Tech
            </h1>
            <h2 className="opacity-0 text-xl font-bold text-violet-500">
              Bengal College of Engineering & Technology
            </h2>
            <h4 className="opacity-0 text-lg font-semibold">
              Computer Science & Engineering
            </h4>
            <p className="opacity-0 text-medium font-semibold">2023 - 2027</p>
          </div>
        </div>

        <div
          ref={EdRef2}
          className="lg:h-1/3 lg:w-full h-auto w-[90%] lg:px-0 px-8  rounded-2xl flex "
        >
          <div className="w-1/2 h-full z-1 border-r-8 border-violet-400 px-5 py-3 ">
            <h1 className="opacity-0 text-2xl font-bold text-orange-500">
              12th (CBSE)
            </h1>
            <h2 className="opacity-0 text-xl font-bold text-violet-500">
              DAV Centenary Public School , Baniahir
            </h2>
            <h4 className="opacity-0 text-lg font-semibold">PCM - 81%</h4>
            <p className="opacity-0 text-medium font-semibold">2020 - 2022</p>
          </div>

          <div className="w-1/2 h-full border-2 border-violet-400 px-5 py-3 rounded-2xl shadow-[0_0_30px_20px_rgba(126,34,206,0.6)] hover:shadow-[0_0_30px_20px_rgba(0,0,0,0.75)] transition-all duration-300 ease-out hover:translate-x-9">
            <h1 className="text-2xl font-bold text-orange-500">12th (CBSE)</h1>
            <h2 className="text-xl font-bold text-violet-500">
              DAV Centenary Public School , Baniahir
            </h2>
            <h4 className="text-lg font-semibold">PCM - 81.6%</h4>
            <p className="text-medium font-semibold">2020 - 2022</p>
          </div>
        </div>

        <div
          ref={EdRef3}
          className="lg:h-1/3 lg:w-full h-auto w-[90%] lg:px-0 px-8 lg:mb-0 mb-20  rounded-2xl flex "
        >
          <div className="w-1/2 h-full border-2 border-violet-400 px-5 py-3 rounded-2xl shadow-[0_0_30px_20px_rgba(126,34,206,0.6)] hover:shadow-[0_0_30px_20px_rgba(0,0,0,0.75)] transition-all duration-300 ease-out hover:-translate-x-9">
            <h1 className="text-2xl font-bold text-orange-500">10th (CBSE)</h1>
            <h2 className="text-xl font-bold text-violet-500">
              DAV Centenary Public School , Baniahir
            </h2>
            <h4 className="text-lg font-semibold">Science - 93.4%</h4>
            <p className="text-medium font-semibold">2020</p>
          </div>

          <div className="w-1/2 h-full border-l-8 border-violet-400 px-5 py-3">
            <h1 className="opacity-0 text-2xl font-bold text-orange-500">
              10th (CBSE)
            </h1>
            <h2 className="opacity-0 text-xl font-bold text-violet-500">
              DAV Centenary Public School , Baniahir
            </h2>
            <h4 className="opacity-0 text-lg font-semibold">Science - 93.4%</h4>
            <p className="opacity-0 text-medium font-semibold">2020</p>
          </div>
        </div>

        <div className="lg:h-10 lg:w-10 h-10 w-10 top-74 left-47 z-2 absolute lg:top-32 lg:left-155 bg-orange-400 rounded-full"></div>
        <div className="lg:h-10 lg:w-10 h-10 w-10 top-149 left-47 z-2 absolute lg:left-155 lg:top-71 bg-orange-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Education;
