import Image from "next/image";
import Feed from '../components/Feed'
import logo from "../public/favicon.ico";
import logoname from "../public/logoname.png";
import { SearchIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      
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
               <a className="bg-red-600 px-2 rounded-lg" href='/auth/signup'>Sign Up</a>
               <a className="bg-red-600 px-2 rounded-lg" href='/auth/login'>Login</a>
            </div>
        </div>
        </div>
      <Feed /> 

    </div>
  )
}
