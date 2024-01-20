//work on navbar and try to fix the wiki link
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
              <ul className="h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 px-6 text-left border-b-2 md:border-b-0  hover:bg-purple-600  border-yellow-600  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-left  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-left  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-left  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
