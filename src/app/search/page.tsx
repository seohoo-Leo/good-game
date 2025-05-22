'use client'


import SearchResult from "../component/SearchResult"
import { useSearchParams } from "next/navigation"

const Page = () => {

   const searchParams= useSearchParams();
    const search = searchParams.get('query')

  return (
    <div className=" w-screen">
      <SearchResult search={search}/>
    </div>
  )
}

export default Page