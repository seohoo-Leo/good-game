import { useGameDetail } from "@/hooks/useGameDetail";
import { useGameDetailImg } from "@/hooks/useGameDetailImg";
import ScreenshotSlider from "./ScreenshotSlider";
import PlatformIcon from "./PlatformIcon";


const GameDetail = ({gameId}) => {

    
    const {data} = useGameDetail(gameId)
    const {data:img} =useGameDetailImg(gameId)

    

    const images = img?.results.length >0? img?.results?.map(a=>a.image) : [data?.background_image]

    const gamePlatformId =data?.platforms.map( item => item.platform.id)



  return (
    <div className="flex flex-col m-3">
      <div className="flex text-6xl font-bold pb-8" >
        {data?.name} 
      </div>
      <div className="flex items-center flex-col ">
        <ScreenshotSlider images={images}/>
        <div className=" flex flex-col  shadow-lg border-2 border-amber-400  mt-7 w-9/10 p-5 xl:ml-5">
            <div className="text-3xl font-bold"> {data?.name}  </div>
            <div className="flex justify-end">{gamePlatformId?.map((num,index) => <PlatformIcon key={index} id={num} />)}</div>
            <div className="text-end text-xl font-medium text-amber-700"> 
                { data?.genres.slice(0,3).map(a => a.name).join(", ")}</div>
            <div className="text-gray-700"> {data?.description_raw}</div>
            <div className="flex flex-row font-medium  text-amber-700 border-t-2 border-amber-400 mt-2">
                <div className="flex-1/4 ">출시년도</div>
                <div >{data?.released}</div>
            </div>
             <div className="flex flex-row font-medium  text-amber-700 border-t-2 border-amber-400 mt-2">
                <div className="flex-1/4 ">홈페이지</div>
                <div><a href={`${data?.website}`}  target="_blank">{data?.name} </a></div>
            </div>
            <div className="flex flex-row font-medium  text-amber-700 border-t-2 border-amber-400 mt-2">
                <div className="flex-1/4 ">평점</div>
                <div><a href={`${data?.website}`}  target="_blank">{data?.rating}</a></div>
            </div>
        </div>
  
      </div>
       
    </div>
  )
}

export default GameDetail
