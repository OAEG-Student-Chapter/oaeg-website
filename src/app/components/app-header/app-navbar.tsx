'use client'
import styles from "./app-navbar.module.css";
import Link from "next/link";
import {routes} from "@/lib/routes";
import {Krub} from "next/font/google";
import {usePathname} from "next/navigation";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/app/components/app-header/icon-links";
import React, {useEffect, useState} from "react";
const krubFont = Krub({weight: '500', subsets: ['latin']});
import {NavBrand} from "@/app/components/app-header/app-header";

export default function AppNavbar({onItemClick}: {
    onItemClick?: () => void}){
    const pathName = usePathname();
    const links = () => (
        <ul>
            {
                routes.map((route, index) => {
                    const isActive = pathName === route.path;
                    return (
                        <li key={index} className={`${styles.navbarItem} ${isActive ? styles.navbarItemCurrent : ""}`}>
                            <Link href={route.path} className={krubFont.className} onTouchStart={()=>{
                                if(onItemClick) onItemClick();
                            }}>
                                {route.name}
                            </Link>
                        </li>
                    );
                })
            }
            <li className={styles.socialLinks}>
                <IconLinks
                    color="white"
                    iconData={socialMediaLinks.map(l => {
                        return {
                            Icon: l.icon,
                            link: l.url
                        }
                    })}/>
            </li>
        </ul>
    );
    const navBrand = ()=>(<NavBrand/>);
    return (
        <nav className={`${styles.navbar} flex items-center justify-between`}>
            <div className="hidden sm:block">
                <NavBrand/>
            </div>
            {links()}
        </nav>
    );
}