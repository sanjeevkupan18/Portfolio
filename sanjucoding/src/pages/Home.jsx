import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import React, { useRef } from 'react'
import {CodeXml} from 'lucide-react'
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();
  const imageDivRef = useRef()
  const nameTextRef = useRef()
  const nameLineRef = useRef()
  const HeroTextRef = useRef()
  const introDivRef = useRef()
  const containerRef = useRef()

  

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from([nameLineRef.current, nameTextRef.current], {
        x: -100,
        opacity: 0,
        duration: 0.4,
        delay:0.8
      })
      .from(
          imageDivRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.6,
          },
          "<"
        ) // image starts with buttons
        .from(HeroTextRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.4,
        })
        .from(introDivRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.4,
          stagger:0.15
        })
        
        
    },
    { scope:containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col-reverse gap-2 items-center  lg:flex-row lg:justify-between lg:items-center h-auto lg:h-screen lg:w-full bg-gradient-to-b from-black via-purple-950 to-violet-900"
    >
      <div className="lg:w-[40%] lg:h-full px-8 lg:px-20 py-10 flex flex-col ml-0 lg:ml-15">
        <div className="mt-2 lg:mt-20">
          <h2 ref={nameLineRef} className="text-xl lg:text-2xl mb-1">
            Hi! My Name is
          </h2>
          <h1
            ref={nameTextRef}
            className="text-4xl lg:text-4xl text-violet-400 font-semibold"
          >
            Sanjeev Kumar Pandit
          </h1>
          <h1
            ref={HeroTextRef}
            className="mt-2 lg:mt-4 text-5xl lg:text-6xl text-orange-400 font-bold "
          >
            <span className="flex items-center gap-5">
              Web
              <CodeXml size={60} strokeWidth={2.5} />{" "}
            </span>
            Developer
          </h1>
        </div>
        <div ref={introDivRef} className="mt-4 lg:mt-8 h-auto">
          <p className="text-medium lg:text-lg lg:mb-20 mb-18 font-semibold">
            A curious, creative, and passionate learner and aspiring developer
            who enjoys building clean, user-friendly web experiences, with a
            strong interest in web technologies, problem-solving, and real-world
            projects.
          </p>
          <div className="lg:w-full lg:h-auto items-center justify-center lg:flex-row flex flex-col lg:flex-nowrap flex-wrap lg:gap-0 gap-15 lg:mb-0 mb-20">
            <button
              onClick={() => navigate("/contact")}
              className="hover:bg-orange-400 transition-all duration-300 ease-out px-5 py-3 active:scale-95 lg:px-10 lg:py-3 font-semibold border-2 border-orange-500 rounded-3xl mr-0 lg:mr-15  shadow-[0_0_60px_40px_rgba(0,0,0,0.75)]"
            >
              Hire Me
            </button>
            <a
              href="/files/SanjeevkupanCV.pdf"
              download
              className="bg-orange-400  transition-all duration-300 ease-out px-5 py-3 hover:bg-transparent font-semibold active:scale-95 border-2 border-orange-500 hover:border-orange-500 lg:px-10 lg:py-3 rounded-3xl  shadow-[0_0_60px_40px_rgba(0,0,0,0.75)]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div
        ref={imageDivRef}
        className="w-[70%] h-[20%] lg:w-[40%] lg:h-[70%] lg:mr-30  flex items-center justify-center"
      >
        <img
          className="lg:h-full lg:w-full h-auto w-full transition-all duration-300 ease-out object-cover mt-20 lg:mt-0 aspect-square rounded-full lg:rounded-[50%] border-8 border-purple-500 shadow-[0_0_60px_30px_rgba(126,34,206,0.6)] hover:shadow-[0_0_60px_35px_rgba(0,0,0,0.7)]"
          src="/images/Gemini_Generated_Image_gd0b2igd0b2igd0b.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home
