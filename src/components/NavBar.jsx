//work on navbar
import { useState } from "react";
import open from "../assets/icon-hamburger.svg";
import chron from "../assets/icon-chevron.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  scroll top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto  lg:items-center lg:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              {/* LOGO */}
              <a href="/">
                <h2 className="text-2xl text-white font-bold ">THE PLANETS</h2>
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
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
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-12 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-auto items-center justify-center text-xl lg:text-base lg:flex ">
                <li className=" lg:pb-6  text-white py-2 px-6 text-left border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#about"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Mercury
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#blog"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Venus
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#contact"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Earth
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#projects"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Mars
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#projects"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Jupiter
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#projects"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Saturn
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#projects"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Uranus
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
                  </a>
                </li>
                <li className=" lg:pb-6  text-white py-2 px-6 text-left  border-b-[0.2px] lg:border-b-0    border-[rgb(55,55,78)]   ">
                  <a
                    href="#projects"
                    className="flex justify-between items-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <span>Neptune</span>
                    <img
                      src={chron}
                      className="lg:hidden object-contain w-[10px]"
                    />
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
