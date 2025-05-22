'use client'
import { signIn } from 'next-auth/react'
import { useSession, signOut } from 'next-auth/react'



export default function LoginPage() {



   const { data: session } = useSession()

//   if (!session) return <p>로그인이 필요합니다</p>
  
  console.log(session);
  

  return (
     <div className="flex flex-col space-y-2">
    <button
      onClick={() => signIn('kakao', { callbackUrl: '/' })}
      className="bg-yellow-400 px-4 py-2 rounded text-black">
      카카오로 로그인
    </button>
    
     <button onClick={() => signOut()}>로그아웃</button>
    </div>
  )
}