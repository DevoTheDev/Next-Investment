import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

type Props = {}

const AppHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center relative
        bg-gradient-to-r from-zinc-400 to-gray-950
        py-4 md:pl-8 md:pr-[3.9rem] px-8">
      <div className='w-full flex md:ml-0 md:w-full' >
        <Link href={'/'} className="flex justify-center items-center">
          <Image src={'./coin-stack.svg'} alt='coins.svg' height={30} width={30}
            className='mr-2'
          />
          <p className='text-xl font-extrabold text-black'>Next</p>
          <p className='text-xl font-extrabold text-customCyan'>Investment</p>
        </Link>
      </div>
      <div className="
        flex items-center w-full relative group
        justify-end
        ">
        <span className='md:hidden flex'>
          <MobileNav />
        </span>
        <span className='md:flex hidden cursor-pointer'>
          <Link href={'./settings'} className='bg-customCyan rounded-full border-black border-2 hover:border-white hover:bg-cyan-600' >
            <Image src={'./person.svg'} alt='person.svg' height={50} width={50} />
          </Link>
        </span>
      </div>
    </div>
  )
}

export default AppHeader