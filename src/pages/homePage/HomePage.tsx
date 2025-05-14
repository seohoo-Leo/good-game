
'use client'

import { useRecentTrend } from '@/hooks/useRecentTrend';
import GameCard from '../common/component/GameCard';

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

        const {data , isLoading, isError } = useRecentTrend({startDate,endDate})


      if(isLoading){
        <p>로딩중</p>
      }
      if(isError){
        <div>error : 에러입니다.</div>
      }
        console.log(data)
  return (
    <main className='w-full'>
      <div className='text-7xl font-bold pt-5 pl-5'>
        New and trending
      </div>
      <hr className='mt-10 border-0.2' />
      <div className='flex col'>
        {data?.results?.map((game,index) => {return(<GameCard key={index}/>)})}
      </div>
    </main>
  )
}

export default HomePage
