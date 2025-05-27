import Image from "next/image"
import { FaPlusSquare } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useState } from 'react';
import PlatformIcon from "./PlatformIcon";
import { useRouter } from "next/navigation"; 


const GameCard = ({game}) => {
    const [isHover, setIsHover] = useState(false);
    const router =useRouter();

    const handleClick = () => {
      router.push(`/gamedetail/${game.id}`);
       };

    const gamePlatformId =game?.platforms?.map( item => item?.platform?.id)
      
  
    return (
    <div onClick={handleClick} className=" hover: cursor-pointer">
    <div className="bg-amber-400 border-3 rounded-lg"
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}>
     <div className="relative aspect-video w-full">
      {game?.background_image? <Image src={game.background_image} 
                alt="게임이미지" 
                fill
                priority
                className="size-7 object-cover rounded-sm"/>
       : null}
         </div>  
      <div className="p-5">
        <div className="flex"> {gamePlatformId?.map((num,index) => <PlatformIcon key={index} id={num} />)}</div>
        <div className="font-bold text-2xl">{game?.name}</div>
        <div className="flex font-medium items-center"><FaPlusSquare />{game?.added}</div>
         <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isHover ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="flex flex-col ">
          <div className="mt-2 flex font-medium text-gray-700  flex-row border-t-1 ">
            <div className="basis-1/3" >장르</div> 
            <div className="basis-2/3 text-end" >
            { game?.genres.slice(0,2).map(a => a.name).join(", ")}
        
             </div>   
            </div>
          <div className="mt-2 flex  flex-row   border-t-1 font-medium text-gray-700 ">
              <div className="basis-1/3">출시년도</div>
              <div className="basis-2/3 text-end">{game?.released}</div>
          </div>
           <div className="mt-2 flex  flex-row   border-t-1 font-medium text-gray-700 ">
              <div className="basis-1/3">평점</div>
              <div className="basis-2/3 text-end">{game?.rating}</div>
          </div>
        </div>
      </motion.div>
      
      </div>    
    </div>
    </div>
  )
}

export default GameCard
