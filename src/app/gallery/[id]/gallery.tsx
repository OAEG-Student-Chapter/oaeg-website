'use client'
import React, {useEffect} from "react";
import {FaTimes} from "react-icons/fa";

interface Image{
    original:string,
    thumbnail:string,
}

export default function Gallery({images}:{images:Image[]}) {
    const [openGallery, setOpenGallery] = React.useState(false);
    const [galleryIndex, setGalleryIndex] = React.useState(0);
    const closeGallery = (e: KeyboardEvent)=>{
        if(e.key === 'Escape'){
            setOpenGallery(false);
        }
    }
    const navigateGallery = (e: KeyboardEvent)=>{
        if(e.key === 'ArrowRight'){
            setGalleryIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
        else if(e.key === 'ArrowLeft'){
            setGalleryIndex((prevIndex) => {
                // handle negative index
                if(prevIndex === 0){
                    return images.length - 1;
                }
                return prevIndex - 1;
            });
        }
    }

    // use a ref or state for isDesktop to avoid 'window is not defined' in SSR if needed
    // but this is 'use client' so it's fine, though innerWidth might change
    const [isDesktop, setIsDesktop] = React.useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 768);
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // add event listener for keydown
    useEffect(() => {
        if(openGallery){
            document.addEventListener('keydown', closeGallery)
            // add event listener for keydown
            document.addEventListener('keydown', navigateGallery)
        }
        else{
            document.removeEventListener('keydown', closeGallery)
            document.removeEventListener('keydown', navigateGallery)
        }

    },[openGallery])
    return(
        <div className="relative">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 px-4 md:px-20">
                {
                    images?.map((photo, index) => {
                        return <img
                            onClick={() => {
                                setGalleryIndex(index);
                                setOpenGallery(true);
                            }}
                            key={index}
                            className="h-full w-full object-cover transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
                            src={photo.original} alt={photo.original}
                            loading="lazy"
                        />
                    })
                }
            </div>
            {
                isDesktop &&
                openGallery &&
                <div className="fixed top-0 left-0 z-30 w-full h-full bg-[rgba(0,0,0,0.8)] mx-auto pt-[calc(var(--navbar-height)+var(--header-banner-height))] md:pt-0">
                    <div className="h-full relative flex flex-col items-center justify-center" onClick={(e) => {
                        // if clicked outside the image
                        if (e.target === e.currentTarget) {
                            setOpenGallery(false);
                        }
                    }}>
                        <div
                            onClick={() => {
                                setOpenGallery(false);
                            }}
                            className="absolute top-0 right-0 z-40 m-4 cursor-pointer text-[2rem] text-white"
                        >
                            <FaTimes/>
                        </div>
                        <img  
                            className="h-[90%] object-contain"
                            src={images[galleryIndex].original}
                            alt={images[galleryIndex].original}
                        />
                    </div>
                </div>
            }
        </div>
    )
}