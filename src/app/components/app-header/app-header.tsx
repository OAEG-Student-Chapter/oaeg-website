'use client'

import {Montserrat} from "next/font/google";
import styles from "./app-header.module.css";
import {organization} from "@/lib/constants";
import AppNavbar from "@/app/components/app-header/app-navbar";
import NavToggleButton from "@/components/nav-toggle";
import {useEffect, useState} from "react";


const montserrat = Montserrat({subsets: ['latin']});

export const AppHeader = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsNavOpen(window.innerWidth >= 768)
    }, []);

    return (
        <header>
            <div className={styles.navToggleButton}>
                <NavToggleButton onPress={() => {
                    setIsNavOpen(!isNavOpen)
                }}/>
            </div>
            <div className={`${styles.appHeader} ${isNavOpen ? "" : styles.appHeaderClosed}`}>
                <AppHeaderBanner/>
                <AppNavbar/>
            </div>
        </header>
    );
}

export const AppHeaderBanner = () => {
    return <div className={styles.appHeaderBanner}>
        <div className={styles.appHeaderBannerContent}>
            <img
                style={{marginRight: '1rem'}}
                className={styles.logo}
                src="/images/logo_ac.png" alt="AC Logo"/>

            <h1 className={montserrat.className}
                style={{fontWeight: '600', color: '#fff',}}>
                {organization.name}
            </h1>

            <img
                style={{marginLeft: '1rem'}}
                className={styles.logo}
                src="/images/logo_oaeg.png" alt="OAEG Logo"/>
        </div>
    </div>
}