'use client'
import styles from "./app-navbar.module.css";
import Link from "next/link";
import {routes, routesMap} from "@/lib/routes";
import {Krub} from "next/font/google";
import {usePathname} from "next/navigation";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/app/components/app-header/icon-links";
import React from "react";
const krubFont = Krub({weight: '500', subsets: ['latin']});
import {NavBrand} from "@/app/components/app-header/app-header";

export default function AppNavbar({onItemClick}: {
    onItemClick?: () => void}){
    const pathName = usePathname();
    const links = () => (
        <ul className={"flex justify-center sm:justify-end "}>
            {
                routes.map((route, index) => {
                    const isActive = pathName === route.path;
                    return (
                        <li key={index} className={`${styles.navbarItem} ${isActive ? styles.navbarItemCurrent : ""}`}>
                            <Link href={route.path} className={krubFont.className} onClick={()=>{
                                if(onItemClick) onItemClick();
                                // go to route.path
                                // window.location.href = route.path;
                            }}>
                                {route.name}
                            </Link>
                        </li>
                    );
                })
            }
            <li className={"sm:ml-1"}><RegisterButton/></li>
            <li className={styles.socialLinks}>
                <IconLinks
                    color="white"
                    iconClass={styles.navSocialIcons}
                    iconData={socialMediaLinks.map(l => {
                        return {
                            Icon: l.icon,
                            link: l.url
                        }
                    })}/>
            </li>
            <li className={"flex"}>
                <a
                    href="https://www.anandacollegeoba.org/old-boys-association/affiliated-groups/old-anandians-engineers-guild-details/"
                    target={"_blank"}
                    className={"rounded"}
                    style={{
                    height:"2.5rem"}}>
                    <img className={"h-full contain"} src={"/images/oba.webp"}  alt={"ananda college oba"}/>
                </a>
            </li>
        </ul>
    );
    return (
        <nav className={`${styles.navbar} flex items-center justify-between`}>
            <div className="hidden sm:block">
                <NavBrand/>
            </div>
            {links()}
        </nav>
    );
}

export const RegisterButton = ({cta}:{cta? : string}) => (
    <Link target={"_blank"} className={`sm:h-full 
            flex items-center`} href={routesMap.register.path}>
                <span
                    style={{background:"var(--theme-gold)", color: "black"}}
                    className={`rounded
                    font-semibold tracking-wide uppercase
                px-4 py-2`}>
                     { cta ?? routesMap.register.name}
                </span>
    </Link>);