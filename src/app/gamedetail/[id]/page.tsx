'use client'

import GameDetail from "@/app/component/GameDetail"


const page = ({params}) => {
  


  return (
    <div >
      <GameDetail gameId={params?.id}/>
    </div>
  )
}

export default page