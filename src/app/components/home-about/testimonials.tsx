'use client';
import styles from "./testimonial-card.module.css";
import {Krub} from "next/font/google";
import {Slide} from "react-slideshow-image";
const krub = Krub({subsets: ['latin'], style:"italic", weight:['400']});
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";

export const TestimonialCard = () => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.cardLeft}>
                <div style={{
                    padding:5,
                }}>
                    <img
                        style={{
                            width:'100%',
                            height:'100%',
                            objectFit:'cover',
                            aspectRatio: '1/1',
                            borderRadius: '50%',
                        }}
                        src="/images/exco2023.jpg" alt=""/>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    padding:20,
                }}>
                    <h3 style={{
                        fontSize: '1.3em',
                    }}>Founder</h3>
                    <p style={{
                    }}>Organization</p>
                </div>
            </div>
            <div className={`${styles.cardRight}`}>
                <p className={`${krub.className} ${styles.quote}`}>
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
        </div>
    );
}

export const Testimonials = () => {
    const iconStyle = {height:"1.5rem", width:"1.5rem"};
    const slideProperties = {
        prevArrow: <div className={"hidden sm:block bg-theme-yellow rounded-full p-1 -translate-x-12"}>
            <FaArrowLeft style={iconStyle}/>
        </div>,
        nextArrow: <div className={`hidden sm:block bg-theme-yellow rounded-full p-1 translate-x-12`}>
            <FaArrowRight style={iconStyle}/>
        </div>,
    }
    return (<Slide cssClass={"bg-white"} {...slideProperties}>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
    </Slide>);
}

