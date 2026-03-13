'use client';
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
        <div className="flex flex-col md:flex-row border border-gray-200">
            <div className="flex-1 flex flex-col justify-center p-2 bg-gray-50 min-h-[60vh] max-h-[60vh] cursor-default">
                <div className="p-4" >
                    <img
                        className="w-full h-full aspect-square rounded-full object-cover"
                        src={props.image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-start p-5">
                    <h3 className="text-[1.2em]">
                        {props.name}
                    </h3>
                    <div className="text-left font-medium text-[0.8em] mb-2">
                        {splitByNewLine(props.title)}</div>
                    <p className="text-left font-medium text-base">{props.position}</p>
                </div>
            </div>
            <div className="flex-[3] bg-primary-dark text-white p-8 italic flex flex-col justify-center min-h-[60vh] max-h-[60vh]">
                <div className={`${krub.className} text-center overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent cursor-default`}>
                    <span className="text-primary text-[1.25em] mr-2">"</span>
                    {
                        splitByDoubleNewline(props.quote)
                    }
                    <span className="text-primary text-[1.25em] ml-2">"</span>
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
