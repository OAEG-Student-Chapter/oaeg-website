'use client'

import {useEffect, useState} from "react";
import navStyles from "@/app/components/app-header/app-navbar.module.css";
import NotFound from "@/components/not-found";
import {Certificate} from "@/app/certificates/(group)/certificate";

export const runtime = 'edge';

export default function Page({ params }: { params: { slug: string[] } }) {

    let path = '/' + params.slug.join('/');
    let imageUrl = window.location.origin + path + '.jpg';

    const [result, setResult] = useState<React.ReactNode>();

    useEffect(() => {
        fetch(imageUrl).then((res) => {
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


    return <div className={`bg-white h-screen flex items-center justify-center ${navStyles.navbarSpace}`}>
        {result}
    </div>
}