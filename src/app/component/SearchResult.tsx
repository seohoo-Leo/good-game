
'use client'

import Masonry from 'react-masonry-css';
import GameCard from './GameCard';
import { useGameSearch } from '@/hooks/useGameSearch';



const SearchResult = ({search}) => {

   

     const {data , isLoading, isError } = useGameSearch(search)

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
      <div className='text-5xl font-bold pt-5 pl-5 pb-7'>
        {search} 검색결과입니다
      </div>
        <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 mt-3"
      columnClassName="masonry-column"
    >
        {data!= undefined&&data?.results?.map((game,index) => {
          return(
            <div key={index} className="mb-4">
                <GameCard game={game} />  
            </div>        
          )})}
      </Masonry>
    </main>
  )
}

export default SearchResult
