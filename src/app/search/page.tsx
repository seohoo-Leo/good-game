'use client'

import { Suspense } from 'react';
import SearchResult from "../component/SearchResult"


const Page = () => {


  return (
    <div className=" w-screen">
      <Suspense fallback={<div>로딩 중...</div>}>
        <SearchResult/>
      </Suspense>
    </div>
  )
}

export default Page