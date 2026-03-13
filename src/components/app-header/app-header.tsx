"use client";

import { Montserrat } from "next/font/google";
import { organization } from "@/lib/constants";
import AppNavbar from "@/components/app-header/app-navbar";
import NavToggleButton from "@/components/ui/nav-toggle";
import { useEffect, useState } from "react";
import useArrangeNavbar from "@/hooks/useArrangeNavbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const AppHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isBannerHidden = useArrangeNavbar();
  useEffect(() => {
    setIsNavOpen(window.innerWidth >= 768);
  }, []);

  return (
    <header>
      <div className="fixed z-[1000] block w-full bg-primary-dark md:hidden">
        <div className="flex items-center justify-between p-2 lg:hidden">
          <div className="block">
            <NavBrand />
          </div>
          <div className="ml-8 self-end rounded">
            <NavToggleButton
              onPress={() => {
                setIsNavOpen(!isNavOpen);
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-[999] h-fit max-h-full w-full bg-primary-dark pb-8 pt-16 transition-all duration-500 ease-in-out md:h-[var(--navbar-height)] md:bg-transparent md:p-0 ${isNavOpen ? "top-0 opacity-100" : "max-md:top-[-100%] max-md:opacity-0"}`}
      >
        <AppNavbar
          onItemClick={() => {
            setIsNavOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export const NavBrand = () => {
  return (
    <a href={"/"} className="flex items-center justify-center">
      <img
        className="mr-3 h-12 w-12"
        src="/images/logo_oaeg.png"
        alt="OAEG Logo"
      />
      <h1 className={`${montserrat.className} mr-1 font-semibold text-white`}>
        {organization.name}
      </h1>
    </a>
  );
};
