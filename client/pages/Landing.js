import React from "react";
import NavBar from "./components/NavBar";
import Link from "next/link"
import Image from "next/image";
const Landing = () => {
  return (
    <>
      <div>
          <NavBar/>
        <div className="h-screen   w-screen min-w-screen min-h-10v bg-black ">
       
          <div className="flex w">
            <div className="pt-40 pl-36 space-y-10 ">
              <p className="text-white font-semibold text-5xl font-mono">
                Lend & Borrow With Ease
              </p>
              <div>
                <p className="text-gray-300 text-2xl">
                  Deposit ETH and borrow STC Stable Coin
                </p>
                <p className="text-gray-300 text-2xl font-mono">
                  Repay and get your ETH back
                </p>
              </div>
              <div className="scale-150 ml-36 pt-6">
                <button className="transition ease-in-out   hover:-translate-y-1 ml-9  scale-150 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-teal-300 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <Link href="/HomeMain">
                    <span className="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      <p className="pr-5 font-mono">Get Started</p>
                      <div className="transition ease-in-out   hover:-translate-x-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            {/* <img
            src="/memth.png"
            className="pl-32 ml-9 scale-150 animate-pulse"
          /> */}
          </div>
          <div className="pl-40 ml-60  absolute right-9 top-40">
            <Image
              src="/eth.gif"
              alt="Eth"
              width="600"
              height="600"
              className=" "
            ></Image>
          </div>
          <div className="mt-72">
            {" "}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
