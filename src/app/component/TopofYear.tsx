
'use client'

import { useGameInfo } from '@/hooks/useGameInfo';
import Masonry from 'react-masonry-css';
import GameCard from './GameCard';
import { Game } from '@/types/types';
import Spinner from './Spinner';

const TopofYear = () => {

        const mode = "-rating"

     // 오늘 기준으로 현재 달 1일
          const today = new Date();
          const currentMonthFirst = new Date(today.getFullYear(), today.getMonth(), 1);
  
      // 이번년도 1일
         const firstDayOfYear =new Date( new Date().getFullYear(), 0 ,1 )
  
      // YYYY-MM-DD 형식으로 변환
          const formatDate = (date: Date) => date.toISOString().split('T')[0];
        
          const startDate = formatDate(firstDayOfYear);
          const endDate = formatDate(currentMonthFirst)
  
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
      <main className='w-full pr-5 pl-5'>
        <div className='text-7xl font-bold pt-5 pl-5 pb-7'>
          올해의 베스트
        </div>

        {data == undefined && <Spinner/>}  
          <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 mt-3"
        columnClassName="masonry-column"
      >
         
          {data!= undefined&&data?.results?.map((game:Game,index:number) => {
            return(
              <div key={index} className="mb-4">
                  <GameCard game={game} />  
              </div>        
            )})}
        </Masonry>
      </main>
    )
}

export default TopofYear
