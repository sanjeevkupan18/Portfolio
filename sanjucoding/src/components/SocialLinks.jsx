import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";

const SocialLinks = () => {

    const SocialDivRef = useRef()
    const SocialDivRef1 = useRef()
    const SocialDivRef2 = useRef()
    const SocialDivRef3 = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(SocialDivRef.current,{
            y:200,
            opacity:0,
            duration:0.8,
            // stagger:0.15,
            rotate:360,
        })
        .from(SocialDivRef1.current,{
           
            duration:0.8,
            // stagger:0.15,
            rotate:360,
            repeat:-1,
        })
        .from(SocialDivRef2.current,{
            
            duration:0.8,
            // stagger:0.15,
            rotate:360,
            repeat:-1,
        })
        .from(SocialDivRef3.current,{
            
            duration:0.8,
            // stagger:0.15,
            rotate:360,
            repeat:-1,
        })

    })

  return (
    <div>
      <div
        ref={SocialDivRef}
        className="flex justify-center lg:px-0 px-10 lg:mb-0 mb-15 lg:gap-15 gap-10 mt-5"
      >
        <a
          ref={SocialDivRef1}
          className="px-5 py-5 lg:aspect-auto aspect-square transition-all duration-300 ease-out bg-violet-500 border-4 border-violet-600 rounded-full shadow-[0_0_60px_40px_rgba(0,0,0,0.75)] hover:shadow-[0_0_60px_30px_rgba(126,34,206,0.6)]"
          href="https://www.linkedin.com/in/sanjeevkupan18/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={40} strokeWidth={2.5} />
        </a>
        <a
          ref={SocialDivRef2}
          className="px-5 py-5 transition-all duration-300 ease-out bg-violet-500 border-4 border-violet-600 rounded-full shadow-[0_0_60px_40px_rgba(0,0,0,0.75)] hover:shadow-[0_0_60px_30px_rgba(126,34,206,0.6)]"
          href="https://www.instagram.com/heyy_san_ju/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={40} strokeWidth={2.5} />
        </a>
        <a
          ref={SocialDivRef3}
          className="px-5 py-5 transition-all duration-300 ease-out bg-violet-500 border-4 border-violet-600 rounded-full shadow-[0_0_60px_40px_rgba(0,0,0,0.75)] hover:shadow-[0_0_60px_30px_rgba(126,34,206,0.6)]"
          href="https://github.com/sanjeevkupan18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={40} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
