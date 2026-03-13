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
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 md:mx-4 md:flex-row">
      <div className="relative group flex flex-1 flex-col justify-end overflow-hidden min-h-[280px] sm:min-h-[350px] md:min-h-[400px]">
        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          src={props.image}
          alt={props.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-transform duration-500">
          <h3 className="mb-1 text-lg sm:text-xl font-bold tracking-tight text-white">{props.name}</h3>
          <div className="mb-2 text-xs sm:text-sm font-medium text-primary md:text-theme-yellow">
            {splitByNewLine(props.title)}
          </div>
          {props.position && (<p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300 bg-white/10 w-fit px-2 py-1 rounded backdrop-blur-sm">
            {props.position}
          </p>)}
        </div>
      </div>
      <div className="flex flex-[1.5] flex-col justify-center bg-primary-dark p-6 sm:p-8 md:p-12">
        <div
          className={`${krub.className} relative flex h-full flex-col justify-center text-center sm:text-left`}
        >
          <span className="absolute -left-2 -top-4 text-4xl sm:text-5xl text-theme-yellow/30 md:-left-6 md:-top-6">
            "
          </span>
          <div className="relative z-10 max-h-[45vh] overflow-y-auto pr-2 sm:pr-4 text-sm sm:text-base italic leading-relaxed text-gray-100 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary md:text-lg md:leading-loose text-justify">
            {splitByDoubleNewline(props.quote)}
          </div>
          <span className="absolute -bottom-6 -right-2 text-4xl sm:text-5xl text-theme-yellow/30 md:-bottom-12 md:-right-6">
            "
          </span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const testimonials: TestimonialCardProps[] = data;

  return (
    <div className="bg-gray-50/30 px-6 py-12 md:px-12 md:py-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
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
        <div className="mt-8 flex justify-center gap-6 pointer-events-none md:pointer-events-auto md:absolute md:inset-x-0 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:justify-between lg:-inset-x-6">
          <CarouselPrevious className="pointer-events-auto static translate-x-0 translate-y-0 h-10 w-10 sm:h-12 sm:w-12 border-none bg-theme-yellow hover:bg-theme-yellow/80 md:absolute md:left-0 md:-translate-y-1/2" />
          <CarouselNext className="pointer-events-auto static translate-x-0 translate-y-0 h-10 w-10 sm:h-12 sm:w-12 border-none bg-theme-yellow hover:bg-theme-yellow/80 md:absolute md:right-0 md:-translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  );
};
