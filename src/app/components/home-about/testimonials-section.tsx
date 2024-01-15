'use client';
import styles from "./testimonial-card.module.css";
import {Krub} from "next/font/google";
import {Slide} from "react-slideshow-image";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";
import {TestimonialCardProps, data} from "./testimonials";
import {htmlEscapeJsonString} from "next/dist/server/htmlescape";
import {splitByDoubleNewline, splitByNewLine} from "@/lib/helpers";
const krub = Krub({subsets: ['latin'], style:"italic", weight:['400']});



export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
      <div className={styles.testimonialCard}>
        <div className={styles.cardLeft}>
          <div
            style={{
              padding: 5,
            }}
          >
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
              justifyContent:"start",
              padding: 20,
            }}
          >
            <h3
              style={{
                fontSize: "1.3em",
              }}
            >
              {props.name}
            </h3>
            <p style={{textAlign:'left'}}>President 2023-2024</p>
          </div>
        </div>
        <div className={`${styles.cardRight}`}>
          <p className={`${krub.className} ${styles.quote}`} >
              {
                  splitByDoubleNewline(props.quote)
              }
          </p>
        </div>
      </div>
    );
}

export const TestimonialsSection = () => {
    const iconStyle = {height:"1.5rem", width:"1.5rem"};
    const testimonials: TestimonialCardProps[] = data;

    const slideProperties = {
        prevArrow: <div className={"hidden sm:block bg-theme-yellow rounded-full p-1 -translate-x-12"}>
            <FaArrowLeft style={iconStyle}/>
        </div>,
        nextArrow: <div className={`hidden sm:block bg-theme-yellow rounded-full p-1 translate-x-12`}>
            <FaArrowRight style={iconStyle}/>
        </div>,
        pauseOnHover: true,
    }
    
    return (<Slide cssClass={"bg-white"} {...slideProperties}>
        {
          testimonials.map((testimonial, index) => (<TestimonialCard 
            name={testimonial.name}
            position={testimonial.position}
            quote={testimonial.quote}
            image={testimonial.image}
            />))
        }
    </Slide>);
}

