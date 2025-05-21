
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'

import { Search } from 'lucide-react';
import Link from 'next/link';

const TopNavbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
     
 

  return (
     <header className="bg-white">
      <nav aria-label="Global" className=" flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/homepage" className="-m-1.5 p-1.5 font-bold bg-amber-300 border-4">
            <span>Good </span> <br/>
            <span>Game</span>
          </Link>
        </div>
      <div className=" flex items-center  bg-gray-100 rounded-lg shadow px-4 py-2 w-7/10 ">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full focus:outline-none  text-gray-700"
        />
    </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    
    // < div className="flex items-center pl-5 h-20 text-white bg-violet-900 ">
    //    <div className="flex text-2xl font-bold">GGame</div>
    //    <Form action={search} className='flex justify-center items-center w-7/10'>
    //        <Search />
    //        <input className='text-black bg-violet-50 w-9/10  h-9 rounded-2xl opacity-80 pointer-events-auto '></input>
    //    </Form>
    //    <Link href="/" className=''><User className='size-10 bg-amber-500 rounded-4xl'/> </Link>
    //    <div>My library</div>
    // </div>
  )
}

export default TopNavbar
