'use client'

import {Montserrat} from "next/font/google";
import styles from "./app-header.module.css";
import {organization} from "@/lib/constants";
import AppNavbar from "@/app/components/app-header/app-navbar";
import NavToggleButton from "@/components/nav-toggle";
import {useEffect, useState} from "react";
import useArrangeNavbar from "@/hooks/useArrangeNavbar";
import useIsHomePage from "@/hooks/useIsHomePage";

const montserrat = Montserrat({subsets: ['latin']});

export const AppHeader = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const isBannerHidden = useArrangeNavbar();
    useEffect(() => {
        setIsNavOpen(window.innerWidth >= 768);
    }, []);

    return (
        <header>
            <div className={styles.mobileNav} >
                <div className={`lg:hidden flex justify-between
                 items-center p-2`}>
                    <div className={`${styles.navBrand}`} ><NavBrand/></div>
                    <div className={`${styles.navToggle} self-end ml-8 rounded`} >
                        <NavToggleButton onPress={() => {
                            setIsNavOpen(!isNavOpen)
                        }}/>
                    </div>
                </div>
            </div>

            <div className={`${styles.appHeader}
             ${isNavOpen ? "" : styles.appHeaderClosed}`}
            >
                <AppNavbar
                    onItemClick={()=>{
                    setIsNavOpen(false);
                }}/>
            </div>
        </header>
    );
}

export const NavBrand = () => {
    return (
        <a href={'/'} className={"flex items-center justify-center"}>
            <img
                className={"h-12 w-12 mr-3"}
                src="/images/logo_oaeg.png" alt="OAEG Logo"/>
            <h1 className={`${montserrat.className} mr-1`}
                style={{fontWeight: '600', color: '#fff',}}>
                {organization.name}
            </h1>
        </a>
    );
}