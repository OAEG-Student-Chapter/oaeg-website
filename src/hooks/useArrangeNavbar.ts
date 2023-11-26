import { useState, useEffect } from 'react';

const useArrangeNavbar = () => {
    const [isBannerHidden, setIsBannerHidden] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBannerHidden(window.innerWidth > 768 && window.scrollY > 0);
        };

        const handleScroll = () => {
            setIsBannerHidden(window.innerWidth > 768 && window.scrollY > 0);
        };

        // Attach the event listeners for window resize and scroll
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return isBannerHidden;
};

export default useArrangeNavbar;
