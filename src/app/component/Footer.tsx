import Link from "next/link"


const Footer = () => {
  return (
    <footer>
    <div className=" flex justify-center mx-auto pt-4 pb-6  bg-amber-400">
        <Link href="/homepage" className="-m-1.5 p-1.5 font-bold bg-amber-300 border-4">
            <span>Good </span> <br/>
            <span>Game</span>
          </Link>
        <div className="ml-5 flex items-center text-2xl ">GOOD GAME</div>

    </div>
    <div className="text-center text-xs bg-amber-100 text-gray-400">
        © 2025 GoodGame. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer
