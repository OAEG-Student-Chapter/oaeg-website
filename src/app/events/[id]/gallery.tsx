'use client'
import styles from "@/app/events/[id]/page.module.css";
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
    const isDesktop = window.innerWidth > 768;

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
        <div style={{
            position: 'relative',
        }}>
            <div className={styles.grid}>
                {
                    images.map((photo, index) => {
                        return <img
                            onClick={() => {
                                setGalleryIndex(index);
                                setOpenGallery(true);
                            }}
                            key={index}
                            className={styles.image}
                            src={photo.original} alt={photo.original}
                            loading="lazy"
                        />
                    })
                }
            </div>
            {
                isDesktop &&
                openGallery &&
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    zIndex: 30,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    margin: '0 auto',
                }}
                     className={styles.galleryWrapper}
                >
                    <div className={styles.galleryContent} onClick={(e) => {
                        // if clicked outside the image
                        if (e.target === e.currentTarget) {
                            setOpenGallery(false);
                        }
                    }}>
                        <div
                            onClick={() => {
                                setOpenGallery(false);
                            }}
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                zIndex: 40,
                                margin: '1rem',
                                cursor: 'pointer',
                                fontSize: '2rem',
                                color: 'white',
                            }}
                        >
                            <FaTimes/>
                        </div>
                        <img  style={{
                            height: '90%',
                            objectFit: 'contain',
                        }}
                              src={images[galleryIndex].original}
                              alt={images[galleryIndex].original}
                        />
                    </div>
                </div>
            }
        </div>
    )
}