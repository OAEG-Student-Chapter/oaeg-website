'use client';
import styles from "./testimonial-card.module.css";
import { TestimonialCardProps, data } from "./testimonials";
import { splitByDoubleNewline, splitByNewLine } from "@/lib/helpers";
import { krub } from "@/lib/fonts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
                    <div style={{ textAlign: 'left', fontWeight: 500, fontSize: "0.8em", marginBottom: "0.5rem" }}>
                        {splitByNewLine(props.title)}</div>
                    <p style={{ textAlign: 'left', fontWeight: 500, fontSize: "1em" }}>{props.position}</p>
                </div>
            </div>
            <div className={`${styles.cardRight}`}>
                <div className={`${krub.className} ${styles.quote} cursor-default`}>
                    {
                        splitByDoubleNewline(props.quote)
                    }
                </div>
            </div>
        </div>
    );
}

export const TestimonialsSection = () => {
    const testimonials: TestimonialCardProps[] = data;

    return (
        <div className="bg-white px-12 py-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <TestimonialCard
                                title={testimonial.title}
                                name={testimonial.name}
                                position={testimonial.position}
                                quote={testimonial.quote}
                                image={testimonial.image}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-theme-yellow hover:bg-theme-yellow/80 border-none" />
                <CarouselNext className="bg-theme-yellow hover:bg-theme-yellow/80 border-none" />
            </Carousel>
        </div>
    );
}
