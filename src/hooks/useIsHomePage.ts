import { useEffect, useState } from 'react';
import {usePathname} from "next/navigation";
import {routesMap} from "@/lib/routes";

const useIsHomePage = () => {
    const pathname = usePathname();
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        setIsHomePage(pathname === routesMap.home.path);
    }, [pathname]);

    return isHomePage;
};

export default useIsHomePage;
