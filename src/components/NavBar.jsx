//work on navbar
import { useState } from "react";
import open from "../assets/icon-hamburger.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  scroll top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <a href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img src={open} alt="logo" className="w-[30px] h-[30px]" />
                  ) : (
                    <img
                      src={open}
                      // width={30}
                      // height={30}
                      alt="logo"
                      className="w-[30px] h-[30px] focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-auto items-center justify-center text-xl md:text-base md:flex ">
                <li className="pb-6  text-white py-2 px-6 text-left border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                    Mercury
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                    Venus
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                    Earth
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Mars
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Jupiter
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Saturn
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Uranus
                  </a>
                </li>
                <li className="pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] md:border-b-0    border-[rgb(55,55,78)]   ">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Neptune
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={`${navbar && "hidden"} border-[rgb(55,55,78)]`} />
        {/* <hr className="  border-[rgb(55,55,78)] " /> */}
      </nav>
    </div>
  );
}

export default NavBar;
