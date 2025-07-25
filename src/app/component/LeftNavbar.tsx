'use client'

import Link from "next/link"
import { useState } from "react";
import { motion } from 'framer-motion';

const LeftNavbar = () => {

const [isHover, setIsHover] = useState(false);
const [isHovertop, setIsHovertop] = useState(false);

  return (
      /* Sidebar */
      <aside className=" md:flex w-auto pl-5 pb-3 md:pb-0 text-black bg-amber-400 md:bg-white ">
        <nav className="flex justify-center md:justify-start flex-row md:flex-col gap-4 pt-3 md:w-60">
          <Link href="/homepage" className="md:hover:text-yellow-500  hover:text-white font-bold text-lg md:text-4xl">Home</Link>

          <div className="font-bold text-lg md:text-4xl text-center md:text-start  flex flex-col"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
            
             <div className= "hover:cursor-pointer">New Game  </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isHover ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
            <a href="/newmonth" className="flex items-center md:hover:text-yellow-500 hover:text-white   font-bold text-sm md:text-xl mt-3 md:ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-7 rounded-sm mr-2 border-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              최근 한달
            </a>
            </motion.div>
          </div>
          <div className="font-bold text-lg md:text-4xl text-center md:text-start flex flex-col"
              onMouseEnter={() => setIsHovertop(true)}
               onMouseLeave={() => setIsHovertop(false)}                   
                >
            <div className= "hover:cursor-pointer">Top</div>
            {isHovertop == true && 
                <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isHovertop ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
            <Link href="/topofyear" className="flex items-center md:hover:text-yellow-500 hover:text-white   font-bold text-sm md:text-xl mt-3 ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-7  rounded-sm mr-2 border-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              올해의 베스트</Link>
            <Link href="/toplastyear" className="flex items-center md:hover:text-yellow-500 hover:text-white   font-bold text-sm md:text-xl mt-3 ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-7  rounded-sm mr-2 border-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              2024 베스트
            </Link>
            </motion.div> }
          </div>
          <Link href="/allgame" className="md:hover:text-yellow-500 hover:text-white font-bold text-lg md:text-4xl">All Game</Link>
        </nav>
      </aside>

  )
}

export default LeftNavbar
