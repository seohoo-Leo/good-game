'use client'

import GameDetail from "@/app/component/GameDetail"
import { use } from 'react';


const Page = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);


  return (
    <div className=" w-screen">
      <GameDetail gameId={id}/>
    </div>
  )
}

export default Page