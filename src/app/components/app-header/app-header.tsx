'use client'

import {Montserrat} from "next/font/google";
import styles from "./app-header.module.css";
import {organization} from "@/lib/constants";
import AppNavbar from "@/app/components/app-header/app-navbar";
import NavToggleButton from "@/components/nav-toggle";
import {useEffect, useState} from "react";
import useArrangeNavbar from "@/hooks/useArrangeNavbar";
import useIsHomePage from "@/hooks/useIsHomePage";
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin']});

export const AppHeader = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const isBannerHidden = useArrangeNavbar();
    useEffect(() => {
        setIsNavOpen(window.innerWidth >= 768);
    }, []);

    const isHome = useIsHomePage();

    return (
        <header>
            <div className={styles.mobileNav} data-transparent={isHome}>
                <div className={`sm:hidden flex justify-between
                 items-center p-2`}>
                    <div className={styles.navBrand} data-hide={isHome}><NavBrand/></div>
                    <div className={`${styles.navToggle} rounded ml-auto`} data-bg={isHome}>
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
            {/* <img
                className={"h-12 w-12 mr-3"}
                src="/images/logo_oaeg.webp" alt="OAEG Logo"/> */}
            <Image
                className={"h-12 w-12 mr-3"}
                src="/images/logo_oaeg.webp" alt="OAEG Logo"
                width={48}
                height={48}
            />
            <h1 className={montserrat.className}
                style={{fontWeight: '600', color: '#fff',}}>
                {organization.name}
            </h1>
        </a>
    );
}

export const AppHeaderBanner = () => {
    return <div className={styles.appHeaderBanner}>
        <div className={styles.appHeaderBannerContent}>
            {/* <img
                style={{marginRight: '1rem'}}
                className={styles.logo}
                src="/images/logo_ac.webp" alt="AC Logo"/> */}
            <Image
                style={{marginRight: '1rem'}}
                className={styles.logo}
                src="/images/logo_ac.webp" alt="AC Logo"
                width={48}
                height={48}
            />

            <h1 className={montserrat.className}
                style={{fontWeight: '600', color: '#fff',}}>
                {organization.name}
            </h1>

            {/* <img
                style={{marginLeft: '1rem'}}
                className={styles.logo}
                src="/images/logo_oaeg.webp" alt="OAEG Logo"/> */}
            <Image
                style={{marginLeft: '1rem'}}
                className={styles.logo}
                src="/images/logo_oaeg.webp" alt="OAEG Logo"
                width={48}
                height={48}
            />
        </div>
    </div>
}