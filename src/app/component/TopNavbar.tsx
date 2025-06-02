
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';
import { useSession } from 'next-auth/react';
import useUserInfo from '../../../store/useUserInfo';
import Image from 'next/image';
import { signOut } from 'next-auth/react';


const TopNavbar = () => {

  const router = useRouter();
  const [query, setQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] =useState(false) 
  const [isLoginOpen, setLoginOpen] = useState(false)
  const {login,setLogin} =useUserInfo()
  const [isOpen,setIsOpen] =useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    }

    // 로그인 상태 확인
     const { data: session } = useSession()
      useEffect(()=>{
        if(session?.user){setLogin(true)}
        else(setLogin(false))
      },[session?.user, setLogin])
     

    // Enter 키로 검색 시 실행되는 함수
  const searchEnter = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {  // Enter 키가 눌리면
      event.preventDefault();  // 기본 동작 방지 (폼 제출 등)
       if (!query.trim()) return
      router.push(`/search?query=${encodeURIComponent(query)}`)
       setQuery('') 
    }
    }
 

  return (
     <header className="bg-white">
      <nav aria-label="Global" className=" flex max-w-8xl items-center justify-between p-6 lg:px-8">
        <div className="flex mr-5 ">
          <Link href="/homepage" className="-m-1.5 p-1.5 font-bold bg-amber-300 border-4">
            <span>Good </span> <br/>
            <span>Game</span>
          </Link>
        </div>
      <div className=" flex items-center justify-center min-w-50 bg-gray-100 rounded-lg shadow px-4 py-2 w-6/10 ">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={query}
          className="w-full focus:outline-none  text-gray-700"
          onKeyPress={searchEnter}
          onChange={handleInputChange}
          />
    </div>
        {!login? <div>
        <button onClick={() => setLoginOpen(true)} className= "hover: cursor-pointer font-bold px-3 py-1 rounded">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
           <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
          </div> : 
            <div className='relative inline-block text-left min-w-15 ml-5'
                  ref={dropdownRef}>
               <button onClick={()=>setIsOpen(!isOpen)}  className="flex hover: cursor-pointer items-center space-x-2 focus:outline-none">     
              {session?.user?.image && (
                <Image src={session?.user?.image} 
                        alt="프로필사진"
                        width={40}
                        height={40}
                        className='rounded-full w-12 h-12'/>
              )}
              <div className='hidden md:flex m-3 text-2xl font-medium'>{session?.user?.name}</div>
              </button> 
               {/* 드롭다운 메뉴 */}
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300"
                      >
                        프로필 설정
                      </a>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover: cursor-pointer hover:bg-amber-300"
                      >
                        로그아웃
                      </button>
                    </div>
                  )}
            </div> }
       
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex  items-center justify-between">
            <Link href="/homepage" className="-m-1.5 p-1.5">
              <span className="sr-only">Good Game</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 ">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                  </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default TopNavbar
