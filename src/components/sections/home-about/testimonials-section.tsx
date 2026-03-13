"use client";
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
    <div className="flex flex-col border border-gray-200 md:flex-row">
      <div className="flex max-h-[60vh] min-h-[60vh] flex-1 cursor-default flex-col justify-center bg-gray-50 p-2">
        <div className="p-4">
          <img
            className="aspect-square h-full w-full rounded-full object-cover"
            src={props.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start p-5">
          <h3 className="text-[1.2em]">{props.name}</h3>
          <div className="mb-2 text-left text-[0.8em] font-medium">
            {splitByNewLine(props.title)}
          </div>
          <p className="text-left text-base font-medium">{props.position}</p>
        </div>
      </div>
      <div className="flex max-h-[60vh] min-h-[60vh] flex-[3] flex-col justify-center bg-primary-dark p-8 italic text-white">
        <div
          className={`${krub.className} scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent cursor-default overflow-y-auto pr-4 text-center`}
        >
          <span className="mr-2 text-[1.25em] text-primary">"</span>
          {splitByDoubleNewline(props.quote)}
          <span className="ml-2 text-[1.25em] text-primary">"</span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const testimonials: TestimonialCardProps[] = data;

  return (
    <div className="bg-white px-12 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-6xl"
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
        <CarouselPrevious className="border-none bg-theme-yellow hover:bg-theme-yellow/80" />
        <CarouselNext className="border-none bg-theme-yellow hover:bg-theme-yellow/80" />
      </Carousel>
    </div>
  );
};
