'use client'

import { Montserrat } from "next/font/google";
import { organization } from "@/lib/constants";
import AppNavbar from "@/components/app-header/app-navbar";
import NavToggleButton from "@/components/ui/nav-toggle";
import { useEffect, useState } from "react";
import useArrangeNavbar from "@/hooks/useArrangeNavbar";

const montserrat = Montserrat({ subsets: ['latin'] });

export const AppHeader = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const isBannerHidden = useArrangeNavbar();
    useEffect(() => {
        setIsNavOpen(window.innerWidth >= 768);
    }, []);

    return (
        <header>
            <div className="md:hidden block fixed bg-primary-dark z-[1000] w-full" >
                <div className="lg:hidden flex justify-between items-center p-2">
                    <div className="block"><NavBrand /></div>
                    <div className="self-end ml-8 rounded" >
                        <NavToggleButton onPress={() => {
                            setIsNavOpen(!isNavOpen)
                        }} />
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-in-out md:h-[var(--navbar-height)] bg-primary-dark md:bg-transparent pt-16 pb-8 md:p-0 h-fit max-h-full ${isNavOpen ? "top-0 opacity-100" : "max-md:top-[-100%] max-md:opacity-0"}`}>
                <AppNavbar
                    onItemClick={() => {
                        setIsNavOpen(false);
                    }} />
            </div>
        </header>
    );
}

export const NavBrand = () => {
    return (
        <a href={'/'} className="flex items-center justify-center">
            <img
                className="h-12 w-12 mr-3"
                src="/images/logo_oaeg.png" alt="OAEG Logo" />
            <h1 className={`${montserrat.className} mr-1 font-semibold text-white`}>
                {organization.name}
            </h1>
        </a>
    );
}