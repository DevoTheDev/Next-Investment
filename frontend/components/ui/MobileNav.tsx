import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import Image from 'next/image';
import Link from 'next/link';


type Props = {
}

const MobileNav = (props: Props) => {
    return (
        <Sheet>
            <SheetTrigger className='
            flex bg-customCyanDark border-2
            
            border-black rounded-full
            hover:bg-customCyan hover:border-white' >
                <Image src={'./center-burger.svg'} alt='profile.icon' height={30} width={30} className='md:hidden flex m-2' />
                <Image src={'./person.svg'} alt='profile.icon' height={40} width={40} className='md:flex hidden m-1' />
            </SheetTrigger>
            <SheetContent side={'left'} className='flex bg-gray-400' >
                <SheetHeader className='w-full' >
                    <SheetTitle>
                        <Link href={'./'} className='flex rounded-lg my-5 text-2xl ' >
                            <h1 className='font-bold text-customCyan'>Next</h1>
                            <h1 className='font-bold text-customNavy'>Invesment</h1>
                        </Link>
                    </SheetTitle>
                    <SheetDescription className='w-full flex flex-col gap-1 h-full' >
                        <div
                            className='flex w-full text-white
                            p-4 bg-gray-500 font-extrabold rounded-xl
                            hover:bg-gray-700'
                        >Money Management</div>
                        <div
                            className='flex w-full text-white
                            p-4 bg-gray-500 font-extrabold rounded-xl
                            hover:bg-gray-700'
                        >FAQ's</div>
                        <div
                            className='flex w-full text-white
                            p-4 bg-gray-500 font-extrabold rounded-xl
                            hover:bg-gray-700'
                        >Report a Problem</div>
                        <div
                            className='flex w-full text-white
                            p-4 bg-gray-500 font-extrabold rounded-xl
                            hover:bg-gray-700'
                        >Contact Us</div>
                        <div
                            className='flex w-full text-white
                            p-4 bg-gray-500 font-extrabold rounded-xl
                            hover:bg-gray-700'
                        >Sign Out</div>
                    </SheetDescription>
                    <SheetFooter className='w-full flex flex-col relative h-full justify-end' >
                        <p>&copy; 2024 Next Investment</p>
                    </SheetFooter>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNav