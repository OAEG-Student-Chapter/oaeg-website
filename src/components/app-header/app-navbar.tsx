'use client'
import Link from "next/link";
import { routes, routesMap } from "@/lib/routes";
import { Krub } from "next/font/google";
import { usePathname } from "next/navigation";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/components/app-header/icon-links";
import React from "react";
const krubFont = Krub({ weight: '500', subsets: ['latin'] });
import { NavBrand } from "@/components/app-header/app-header";

export default function AppNavbar({ onItemClick }: {
    onItemClick?: () => void
}) {
    const pathName = usePathname();
    const links = () => (
        <ul className="h-full w-full flex flex-col md:flex-row items-start md:items-center list-none ml-2 md:justify-end">
            {
                routes.map((route, index) => {
                    const isActive = pathName === route.path;
                    return (
                        <li key={index} className={`mb-2 lg:mb-0 h-full flex justify-center items-center md:mx-4 border-b-[3px] transition-colors ${isActive ? "border-white" : "border-transparent hover:border-primary"}`}>
                            <Link href={route.path} className={`${krubFont.className} text-white no-underline`} onClick={() => {
                                if (onItemClick) onItemClick();
                            }}>
                                {route.name}
                            </Link>
                        </li>
                    );
                })
            }
            <li className="my-2 lg:my-0 lg:ml-1"><RegisterButton /></li>
            <li className="my-2 lg:my-0 text-[1.1em] text-white ml-0 md:ml-6">
                <IconLinks
                    color="white"
                    iconClass="h-8 w-8"
                    className="flex justify-center gap-1"
                    iconData={socialMediaLinks.map(l => {
                        return {
                            Icon: l.icon,
                            link: l.url
                        }
                    })} />
            </li>
            <li className="flex my-2 lg:my-0">
                <a
                    href="https://www.anandacollegeoba.org/old-boys-association/affiliated-groups/old-anandians-engineers-guild-details/"
                    target={"_blank"}
                    className="rounded h-10">
                    <img className="h-full contain" src={"/images/oba.webp"} alt={"ananda college oba"} />
                </a>
            </li>
        </ul>
    );
    return (
        <nav className="h-full md:h-[var(--navbar-height)] w-full bg-transparent px-[5vw] transition-all duration-500 ease-in-out relative flex items-center justify-between">
            <div className="hidden sm:block">
                <NavBrand />
            </div>
            {links()}
        </nav>
    );
}

export const RegisterButton = ({ cta }: { cta?: string }) => (
    <Link target={"_blank"} className="sm:h-full flex items-center" href={routesMap.register.path}>
        <span
            style={{ background: "var(--color-primary-gradient)", color: "black" }}
            className="rounded font-semibold tracking-wide uppercase px-4 py-2">
            {cta ?? routesMap.register.name}
        </span>
    </Link>);