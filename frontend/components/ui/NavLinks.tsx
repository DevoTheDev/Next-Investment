"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


interface NavItem {
    route: string
    imgUrl: string
    title: string
}

export const navigationValues: NavItem[] = [
    {
        route: "/home",
        imgUrl: "./home.svg",
        title: "Home",
    },
    {
        route: "/invest",
        imgUrl: "./money-note.svg",
        title: "Invest",
    },
    {
        route: "/portfolio",
        imgUrl: "./person-folder.svg",
        title: "Portfolio",
    },
]

type Props = {
    classes: {
        container: string,
        link: string,
        activeLink: string
    },
}

const NavLinks = (props: Props) => {
    const { classes } = props;
    const pathname = usePathname();
    
    return (
        <section className={classes.container}>
            {navigationValues.map((navItem) => {
                const linkClassName = navItem.route === pathname 
                    ? `${classes.link} ${classes.activeLink}` 
                    : classes.link;
                return (
                    <Link
                        key={navItem.title}
                        href={navItem.route}
                        className={linkClassName}
                    >
                        <Image
                            className='md:hidden'
                            src={navItem.imgUrl} 
                            alt={`${navItem.title}.icon`} 
                            height={30}
                            width={30}
                        />
                        <span className='md:block hidden'>
                            {navItem.title}
                        </span>
                    </Link>
                )
            })}
        </section>
    )
}

export default NavLinks