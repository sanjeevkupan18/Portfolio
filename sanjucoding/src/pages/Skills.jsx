import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Title from "../components/Title";
import Skilldiv from "../components/Skilldiv";

const Skills = () => {

    const skilldivRef1 = useRef()
    const skilldivRef2 = useRef()
    const skilldivRef3 = useRef()
    const skilldivRef4 = useRef()
    const skilldivRef5 = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(skilldivRef1.current,{
            y:200,
            opacity:0,
            duration:0.7,
        },"Ani")
        .from(skilldivRef2.current,{
            y:200,
            opacity:0,
            duration:0.7,
        },"Ani")
        .from(skilldivRef3.current,{
            x:-200,
            opacity:0,
            duration:0.7,
        },"Anim3")
        .from(skilldivRef4.current,{
            x:200,
            opacity:0,
            duration:0.7,
        },"Anim3")
        .from(skilldivRef5.current,{
            y:200,
            opacity:0,
            duration:0.3,
        })

    })

  return (
    <div className="lg:h-auto lg:w-full h-auto w-full lg:px-20 lg:py-10 bg-gradient-to-b from-black via-purple-950 to-violet-900">
      <Title title={"Skills"} />
      <div className="lg:h-fit lg:w-full lg:px-0 px-5 h-auto w-full flex flex-wrap gap-6 lg:mb-0 mb-15 items-center justify-center mt-10">
        <div
          ref={skilldivRef1}
          className="lg:h-[45%] lg:w-[45%] h-auto w-full border-2 border-violet-400 lg:px-10 px-5 lg:py-5 py-3 rounded-2xl shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.6)]"
        >
          <h1 className="text-xl font-bold mb-2">Frontend</h1>
          <div className="lg:h-full lg:w-full h-auto w-full flex-wrap flex gap-5">
            <Skilldiv name={"Html"} url={"/images/HTML5.png"} />
            <Skilldiv name={"Css"} url={"/images/CSS3.png"} />
            <Skilldiv name={"React"} url={"/images/React.png"} />
            <Skilldiv
              name={"TailwindCSS"}
              url={"/images/Tailwind CSS.png"}
            />
            <Skilldiv name={"Bootstrap"} url={"/images/Bootstrap.png"} />
          </div>
        </div>

        <div
          ref={skilldivRef2}
          className="lg:h-[45%] lg:w-[45%] h-auto w-full border-2 border-violet-400 lg:px-10 lg:py-5 px-5 py-3 rounded-2xl shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.6)]"
        >
          <h1 className="text-xl font-bold mb-2">Database</h1>
          <div className="lg:h-full lg:w-full h-auto w-full flex-wrap flex gap-5">
            <Skilldiv name={"MongoDB"} url={"/images/MongoDB.png"} />
            <Skilldiv name={"MySQL"} url={"/images/MySQL.png"} />
          </div>
        </div>

        <div
          ref={skilldivRef3}
          className="lg:h-[45%] lg:w-[45%] h-auto w-full border-2 border-violet-400 lg:px-10 lg:py-5 px-5 py-3 rounded-2xl shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.6)]"
        >
          <h1 className="text-xl font-bold mb-2">Backend</h1>
          <div className="lg:h-full lg:w-full h-auto w-full flex-wrap flex gap-5">
            <Skilldiv name={"NodeJs"} url={"/images/Node.js.png"} />
            <Skilldiv name={"ExpressJs"} url={"/images/Express.png"} />
            <Skilldiv name={"Firebase"} url={"/images/Firebase.png"} />
            <Skilldiv name={"Nodemon"} url={"/images/Nodemon.png"} />
            <Skilldiv name={"Nginx"} url={"/images/NGINX.png"} />
          </div>
        </div>
        <div
          ref={skilldivRef4}
          className="lg:h-[45%] lg:w-[45%] h-auto w-full border-2 border-violet-400 lg:px-10 px-5  lg:py-5  py-3 rounded-2xl shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.8)]"
        >
          <h1 className="text-xl font-bold mb-2">Language</h1>
          <div className="lg:h-full lg:w-full h-auto w-full flex-wrap flex gap-5">
            <Skilldiv name={"JAVA"} url={"/images/Java.png"} />
            <Skilldiv name={"Python"} url={"/images/Python.png"} />
            <Skilldiv name={"JavaScript"} url={"/images/JavaScript.png"} />
            <Skilldiv name={"C"} url={"/images/C.png"} />
            <Skilldiv name={"C++"} url={"/images/C++ (CPlusPlus).png"} />
          </div>
        </div>
        <div
          ref={skilldivRef5}
          className="lg:h-[45%] lg:w-[45%] h-auto w-full border-2 border-violet-400 lg:mb-0 mb-20 lg:px-10 lg:py-5 px-5 py-3 rounded-2xl shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.6)]"
        >
          <h1 className="text-xl font-bold mb-2">Tools</h1>
          <div className="lg:h-full lg:w-full h-auto w-full flex-wrap flex gap-5">
            <Skilldiv name={"Postman"} url={"/images/Postman.png"} />
            <Skilldiv name={"Git"} url={"/images/Git.png"} />
            <Skilldiv name={"Github"} url={"/images/GitHub.png"} />
            <Skilldiv
              name={"Vs Code"}
              url={"/images/Visual Studio Code (VS Code).png"}
            />
            <Skilldiv name={"Canva"} url={"/images/Canva.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
