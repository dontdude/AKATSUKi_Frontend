import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/solid";

import logo from "../public/favicon.ico";
import logoname from "../public/logoname.png";

function Header() {
  return (
    <div className="shadow-lg bg-stone-900 sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left logo - Everything in tailwind is mobile first */}
        <div className="relative hidden lg:inline-grid w-52 cursor-pointer pt-2">    
          <Image
            src={logoname}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src={logo}
            className="pt-3 w-30 h-15"
          />
        </div>
        {/* middle search*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-4 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-100" />
            </div>
            <input
              className="bg-stone-800 border-stone-800 block w-full h-8 pl-10 sm:text-sm rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder=" Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn " />
          <MenuIcon className="h-6 md:hidden cursor-pointer " />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-bounce">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn " />
          {/* <UserGroupIcon className="navBtn " /> */}
          <HeartIcon className="navBtn " />
          <img
            src="https://portfolio-dontdude.vercel.app/static/media/logo.f202a4f66203c8577fc1.jpg"
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer border-2 border-gray-700 p-[1.5px] hover:scale-110 transition transform duration-200 ease-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;