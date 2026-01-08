import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

import Title from "../components/Title";
import SocialLinks from "../components/SocialLinks";

const About = () => {

    const AboutRef = useRef()
    const AboutIntroRef = useRef()
    const PerInfoRef = useRef()
    const InterestRef = useRef()
    const LanguageRef = useRef()
    const imageDivRef = useRef()


    useGSAP(()=>{
        const tl = gsap.timeline()

        
        .from(imageDivRef.current, {
          x: -200,
          opacity: 0,
          duration: 0.6,
          
        },"Anim1")
          .from(AboutIntroRef.current, {
            x: 200,
            opacity: 0,
            duration: 0.6,
          },"Anim1")
          .from(PerInfoRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
          })
          .from(InterestRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
          })
          .from(LanguageRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
          });
    })

  return (
    <div className="h-auto w-full lg:h-auto lg:w-full lg:px-20 lg:py-10 bg-gradient-to-b from-black via-purple-950 to-violet-900">
      <Title  title={"About"} />
      <div className="lg:w-full lg:h-fit w-full  flex lg:flex-row flex-col-reverse lg:justify-between">
        <div className="lg:h-full lg:w-[30%] flex flex-col items-center">
          <div ref={imageDivRef} className="h-[35%] w-full mt-20 flex items-center justify-center">
            <img
              className="h-full w-[45%] object-cover rounded-full transition-all duration-300 ease-out border-4 border-purple-400 shadow-[0_0_60px_30px_rgba(126,34,206,0.6)] hover:shadow-[0_0_60px_35px_rgba(0,0,0,0.7)]"
              src="/images/sanjeevProfile.jpeg"
              alt="about"
            />
          </div>
          <div className="lg:h-[65%] lg:w-full h-auto w-full flex flex-col gap-10 mt-8">
            <h1 className="text-3xl font-bold text-orange-400 text-center ">
              Sanjeev Kumar Pandit{" "}
            </h1>
            <SocialLinks />
          </div>
        </div>
        <div className="lg:h-full lg:w-[70%] lg:pl-40 lg:py-10 px-9 py-5 flex flex-col justify-between">
          <h1 className="lg:text-xl text-xl font-bold lg:mb-2 mt-5 lg:mt-0 text-orange-400">About Me</h1>
          <div ref={AboutIntroRef} className="lg:h-[30%] h-auto">
            <p className="lg:text-medium text-lg font-semibold">
              I am currently pursuing a degree in Computer Science and
              Engineering from BCET, Durgapur. I am strongly motivated by the
              transformative role of technology in today’s world and remain
              keenly interested in how innovation drives progress across
              industries.
              <br /> I approach my academic and professional journey with a
              disciplined mindset, a willingness to learn, and a strong sense of
              responsibility. I value continuous improvement and believe that
              adaptability, perseverance, and curiosity are essential qualities
              in an evolving professional environment.
              <br /> Outside of academics, I maintain a balanced lifestyle
              through personal interests such as Football and Dance, which
              contribute to teamwork, creativity, and personal well-being.
            </p>
          </div>
          <div className="lg:h-[60%] lg:w-full lg:mt-15 mt-10  flex lg:flex-row flex-wrap lg:flex-nowrap gap-5 lg:gap-6">
            <div ref={PerInfoRef} className="lg:w-[35%] lg:h-full w-full">
              <h1 className="text-xl font-semibold mb-4 text-orange-400">
                Personal Info :
              </h1>
              <li className="lg:text-sm text-lg font-medium">
                📧 Email - sanjeevkupan18@gmail.com
              </li>
              <li className="lg:text-sm text-lg font-medium">
                📞 Contact No. - 9264144666
              </li>
              <li className="lg:text-sm text-lg font-medium">
                🏠 Hometown - Dhanbad , Jharkhand
              </li>
              <li className="lg:text-sm text-lg font-medium">🎂 DOB - 05/05/2005</li>
            </div>
            <div ref={InterestRef} className="lg:w-[30%] lg:h-full w-full">
              <h1 className="text-xl font-semibold mb-4 text-orange-400">
                Interest and Hobbies :
              </h1>
              <li className="lg:text-sm text-lg font-medium">Tech Stuffs</li>
              <li className="lg:text-sm text-lg font-medium">Modern Technologies</li>
              <li className="lg:text-sm text-lg font-medium">Stock Marketing</li>
              <li className="lg:text-sm text-lg font-medium">Football</li>
              <li className="lg:text-sm text-lg font-medium">Dancing</li>
            </div>

            <div ref={LanguageRef} className="lg:w-[30%] lg:h-full w-full">
              <h1 className="text-xl font-semibold mb-4 text-orange-400">
                Languages Known :
              </h1>
              <li className="lg:text-sm text-lg font-medium">English</li>
              <li className="lg:text-sm text-lg font-medium">Hindi</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
