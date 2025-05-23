'use client'
import { signIn } from 'next-auth/react'
import {  signOut } from 'next-auth/react'



export default function LoginPage() {



  

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