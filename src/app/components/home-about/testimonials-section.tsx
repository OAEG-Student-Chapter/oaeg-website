'use client';
import styles from "./testimonial-card.module.css";
import {Krub} from "next/font/google";
import {Slide} from "react-slideshow-image";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";
import {TestimonialCardProps, data} from "./testimonials";
import {splitByDoubleNewline, splitByNewLine} from "@/lib/helpers";

const krub = Krub({subsets: ['latin'], weight: ['400']});


export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.cardLeft + " cursor-default"}>
                <div className={styles.testimonialImage} >
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            aspectRatio: "1/1",
                            borderRadius: "50%",
                        }}
                        src={props.image}
                        alt=""
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        padding: 20,
                    }}
                >
                    <h3
                        style={{
                            fontSize: "1.2em",
                        }}
                    >
                        {props.name}
                    </h3>
                    <p style={{textAlign: 'left', fontWeight: 500, fontSize:"0.8em", marginBottom:"0.5rem"}}>
                        {splitByNewLine(props.title)}</p>
                    <p style={{textAlign: 'left', fontWeight: 500, fontSize: "1em"}}>{props.position}</p>
                </div>
            </div>
            <div className={`${styles.cardRight}`}>
                <p className={`${krub.className} ${styles.quote} cursor-default`}>
                    {
                        splitByDoubleNewline(props.quote)
                    }
                </p>
            </div>
        </div>
    );
}

export const TestimonialsSection = () => {
    const iconStyle = {
        height: "1.5rem", width: "1.5rem"};
    const testimonials: TestimonialCardProps[] = data;

    const slideProperties = {
        prevArrow: <div className={`bg-theme-yellow rounded-full p-1 
        -bottom-10`}
                        style={{left:"50%", transform: "translate(-150%, 50%)"}}>
            <FaArrowLeft style={iconStyle}/>
        </div>,
        nextArrow: <div className={`bg-theme-yellow rounded-full p-1  
        -bottom-10`} style={{left:"50%", width:"min-content", transform:"translate(50%, 50%)"}}>
            <FaArrowRight style={iconStyle}/>
        </div>,
        pauseOnHover: true,
        canSwipe: false,
        // random number between 0 and length of testimonials
        defaultIndex: Math.floor(Math.random() * testimonials.length),
    }

    return (<Slide cssClass={"bg-white"} {...slideProperties}>
        {
            testimonials.map((testimonial, index) => (<TestimonialCard
                key={index}
                title={testimonial.title}
                name={testimonial.name}
                position={testimonial.position}
                quote={testimonial.quote}
                image={testimonial.image}
            />))
        }
    </Slide>);
}


