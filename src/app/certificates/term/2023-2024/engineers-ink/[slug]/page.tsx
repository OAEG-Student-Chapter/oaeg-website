'use client'

import {ReactNode, useEffect, useState} from "react";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import NotFound from "@/components/not-found";
import {Certificate} from "@/app/certificates/certificate";

export const runtime = 'edge';

export default function Page({ params }: { params: { slug: string[] } }) {

    let path = window.location.pathname;
    path = '/' + path.split('/').slice(2).join('/');
    let imageUrl = window.location.origin + path  + '.jpg';

    const [result, setResult] = useState<ReactNode>();

    useEffect(() => {
        fetch(decodeURIComponent(imageUrl)).then((res) => {
            if (res.status === 200) {
                setResult(<Certificate path={path} />)
            }
            else {
                setResult(<NotFound/>)
            }
        }).catch(() => {
            setResult(<NotFound/>)
        })
    }, []);


    return <div className={`bg-white h-screen flex sm:items-center justify-center ${navStyles.navbarSpace}`}>
        {result}
    </div>
}