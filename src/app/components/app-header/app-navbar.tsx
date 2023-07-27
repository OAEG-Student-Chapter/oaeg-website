'use client'
import styles from "./app-navbar.module.css";
import Link from "next/link";
import {routes} from "@/lib/routes";
import {Krub} from "next/font/google";
import {undefined} from "zod";
import {usePathname} from "next/navigation";
const krubFont = Krub({weight: '500', subsets: ['latin']});


export default function AppNavbar(){
    const pathName = usePathname();

    return(
        <div className={styles.navbar}>
            <ul>
                {
                    routes.map((route, index) => {
                        const isActive = pathName.startsWith(route.path);
                        return (
                            <li key={index} className={`${styles.navbarItem} ${isActive ? styles.navbarItemCurrent : ""}`}>
                                <Link href={route.path} className={krubFont.className}>
                                    {route.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}