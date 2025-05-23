'use client'

import { useState, useRef, useEffect } from 'react'
import { signIn } from 'next-auth/react'



export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)



// 모달 바깥 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleLogin = async () => {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    })
    onClose()
  }

 


  return (
    <div className="fixed inset-0 z-50 bg-black/60   flex items-center justify-center">
      <div  ref={modalRef} className="bg-white border-2 opacity-100 p-6 rounded-lg w-96 shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">로그인</h2>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded mb-2 hover: cursor-pointer">
          이메일 로그인
        </button>
 
        <button onClick={() => signIn('kakao',{callbackUrl: '/homepage'})} className=" hover: cursor-pointer w-full bg-yellow-400 text-black py-2 rounded">
          카카오로 로그인
        </button>
      </div>
    </div>
  )
}