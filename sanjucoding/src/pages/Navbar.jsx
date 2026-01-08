import React,{useRef, useState} from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link,NavLink } from "react-router-dom"
import { Code } from "lucide-react";
import { CodeXml } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";



const Navbar = () => {

  const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  const logoRef = useRef()
  const navRef = useRef()


  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(logoRef.current, {
      x: -100,
      duration: 0.6,
      // delay: 0.2,
      opacity: 0,
    })
    .from(
      navRef.current,
      {
        y:-50,
        duration: 0.4,
        stagger:0.15,
        // delay: 0.4,
        opacity: 0,
      });
  })

  const navClass = ({ isActive }) =>
    `px-7 py-2 rounded-3xl text-white font-semibold transition-all duration-300 ease-out
     ${isActive ? "bg-orange-400" : "bg-purple-600 hover:bg-orange-400"}`;

  return (
    <div className=" sticky top-0 z-50 flex justify-between px-5  py-10 items-center h-15 bg-transparent backdrop-blur-lg border-b-2 border-orange-400 ml-5 mr-5 lg:ml-20 lg:mr-20">
      <h1
        ref={logoRef}
        className="text-xl lg:text-3xl font-semibold flex items-center gap-0.5"
      >
        <Code className="size-6 lg:size-10" size={40} strokeWidth={2.5} />
        <NavLink to="/" className="text-orange-400">
          SanjuCoding
        </NavLink>

        <CodeXml className="size-7 lg:size-10" size={40} strokeWidth={2.5} />
      </h1>
      <div
        ref={navRef}
        className="hidden w-[55%]  lg:flex justify-baseline gap-4 mr-15"
      >
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/education" className={navClass}>
          Education
        </NavLink>
        <NavLink to="/skills" className={navClass}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>

      <div className="lg:hidden md-flex flex-col justify-end">
        <button
          onClick={toggleNavbar}
          
        >
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileDrawerOpen && (
        <div className="transition-all duration-300 ease-out absolute lg:hidden px-10  z-20  w-full right-0 top-20 flex justify-end">
          <div
            ref={navRef}
            className="w-full right-0 top-0 backdrop-blur-lg rounded-2xl bg-purple-900 border-2 border-purple-400 py-6 px-8 flex flex-col gap-3 justify-end"
          >
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/education" className={navClass}>
              Education
            </NavLink>
            <NavLink to="/skills" className={navClass}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={navClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar
