import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import { Mail } from "lucide-react";

const Contact = () => {

    const textRef1 = useRef()
    const textRef2 = useRef()
    const textRef3 = useRef()
    const formRef = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(textRef1.current,{
            x:-200,
            opacity:0,
            duration:0.6
        })
        .from(textRef2.current,{
            x:-200,
            opacity:0,
            duration:0.6
        })
        .from(formRef.current,{
            x:300,
            opacity:0,
            duration:0.5
        })
        .from(textRef3.current,{
            x:-200,
            opacity:0,
            duration:0.6
        })
    })
  return (
    <div className="lg:h-[90%] lg:w-full h-auto w-full flex flex-col lg:px-20 lg:py-10 bg-gradient-to-b from-black via-purple-950 to-violet-900">
      <Title title={"Contact"} />
      <div className="lg:w-full lg:h-full h-auto w-full lg:flex-row flex-col flex justify-between">
        <div className="lg:w-[40%] lg:h-full w-full h-auto flex flex-col items-center justify-center">
          <div className="h-1/3 w-full px-10 lg:py-15 py-5">
            <h1
              ref={textRef1}
              className="lg:text-5xl text-4xl lg:mt-0 mt-10 font-bold text-orange-500 mb-6 lg:mb-10 "
            >
              Get In Touch 👋🏻
            </h1>
            <h3 ref={textRef2} className="lg:text-2xl text-lg font-semibold">
              If you have any Inquiries or just want to <br />
              Say Hi, please use the Contact Form!
            </h3>
          </div>
          <div className="lg:h-1/2 lg:w-full h-auto w-full lg:px-10 lg:py-15 flex flex-col justify-baseline gap-10">
            <h1 ref={textRef3} className="flex items-center justify-baseline gap-5 lg:ml-0 ml-10 text-lg lg:text-xl">
              <Mail size={40} strokeWidth={2.5} /> sanjeevkupan18@gmail.com
            </h1>
            <SocialLinks />
          </div>
        </div>
        <div ref={formRef} className="lg:w-[60%] lg:h-full h-auto w-full px-8 lg:mb-0 mb-20 lg:px-15 lg:py-10 mt-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
