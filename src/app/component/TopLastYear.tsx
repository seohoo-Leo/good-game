'use client'

import { useGameInfo } from '@/hooks/useGameInfo';
import Masonry from 'react-masonry-css';
import GameCard from './GameCard';

const TopLastYear = () => {
  const mode = "-rating"
 
        const today = new Date();

      // 작년 1월 1일
        const lastYearFirst = new Date(today.getFullYear()-1, 0, 1);
   
       // 작년 12월 31일
        const lastYearLast =new Date( new Date().getFullYear()-1, 11 ,31 )
   
       // YYYY-MM-DD 형식으로 변환
           const formatDate = (date: Date) => date.toISOString().split('T')[0];
         
           const startDate = formatDate(lastYearFirst);
           const endDate = formatDate(lastYearLast);
   
           const {data , isLoading, isError } = useGameInfo({startDate,endDate,mode})
   
           const breakpointColumnsObj = {
                   default: 4,
                   1280: 3,
                   1024: 2,
                   640: 2
                 };
   
         if(isLoading){
           <p>로딩중</p>
         }
         if(isError){
           <div>error : 에러입니다.</div>
         }
         
 
     return (
       <main className='w-full'>
         <div className='text-7xl font-bold pt-5 pl-5 pb-7'>
           작년 베스트
         </div>
           <Masonry
         breakpointCols={breakpointColumnsObj}
         className="flex gap-4 mt-3"
         columnClassName="masonry-column"
       >
           {data?.results?.map((game,index) => {
             return(
               <div key={index} className="mb-4">
                   <GameCard game={game} />  
               </div>        
             )})}
         </Masonry>
       </main>
     )
 }

export default TopLastYear
