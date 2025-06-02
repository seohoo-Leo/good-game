
'use client'

import { useGameInfo } from '@/hooks/useGameInfo';
import Masonry from 'react-masonry-css';
import GameCard from './GameCard';
import Spinner from './Spinner';
import { Game } from '@/types/types';

const HomePage = () => {

    // 오늘 기준으로 현재 달 1일
        const today = new Date();
        const currentMonthFirst = new Date(today.getFullYear(), today.getMonth(), 1);

     // 지난 달 1일
        const lastMonthFirst = new Date(today.getFullYear(), today.getMonth() - 1, 1);


    // YYYY-MM-DD 형식으로 변환
        const formatDate = (date: Date) => date.toISOString().split('T')[0];
    
        const startDate = formatDate(lastMonthFirst);
        const endDate = formatDate(currentMonthFirst)


        const mode = '-added'


        const {data , isLoading, isError } = useGameInfo({startDate,endDate,mode})

        const breakpointColumnsObj = {
                default: 4,
                1280: 3,
                1024: 2,
                640: 2
              };

      if(isLoading){
        <Spinner/>
      }
      if(isError){
        <div>error : 에러입니다.</div>
      }



  return (
    <main className='w-full'>
      <div className='text-7xl font-bold pt-5 pl-5 pb-7'>
        New and trending
      </div>
        <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 mt-3"
      columnClassName="masonry-column"
    >
        {data!= undefined && data?.results?.map((game:Game,index:number) => {
          return(
            <div key={index} className="mb-4">
                <GameCard game={game} />  
            </div>        
          )})}
      </Masonry>
    </main>
  )
}

export default HomePage
