"use client";
import { Rubik } from "next/font/google";
import React from "react";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/components/app-header/icon-links";
import { IHeroImage } from "@/components/app-hero/hero-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const rubik = Rubik({ subsets: ["latin"], weight: ["600"] });

interface AppHeroProps {
  height?: number | string;
  heroImages: IHeroImage[];
}

export default function AppHero(props: AppHeroProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
  const fadePlugin = React.useRef(Fade());

  return (
    <div className="relative bg-[#272727]">
      <div
        className={`absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 ${rubik.className}`}
      >
        <h2 className="text-center text-4xl text-white md:text-7xl">
          <span className="text-theme-yellow">Old Anandian</span> <br />
          Engineers' Guild
        </h2>
        <h4 className="mt-2 text-center text-xl font-normal text-gray-100 md:text-2xl">
          Est. in 2017
        </h4>
        <div className="mt-4 flex w-full justify-center">
          <IconLinks
            color="white"
            iconData={socialMediaLinks.map((l) => {
              return {
                Icon: l.icon,
                link: l.url,
              };
            })}
            iconClass="h-8 w-8 md:h-12 md:w-12"
            className="flex justify-center gap-2"
          />
        </div>
      </div>
      <Carousel
        plugins={[plugin.current, fadePlugin.current]}
        opts={{
          loop: true,
          duration: 30,
        }}
      >
        <CarouselContent className="ml-0">
          {props.heroImages.map((slideImage, index) => (
            <CarouselItem key={index} className="pl-0">
              <SliderItem height={props.height} slideImage={slideImage} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

interface SliderItemProps {
  slideImage: IHeroImage;
  height?: number | string;
}

const SliderItem = (props: SliderItemProps) => {
  const slideImage = props.slideImage;
  return (
    <div
      style={{
        height: props.height,
      }}
      className="relative h-[100vh] w-full md:mt-[var(--navbar-height)] md:h-[calc(100vh-var(--navbar-height))]"
    >
      <div className="absolute inset-0 z-[1] bg-black/70" />
      <img
        className="h-full w-full object-cover object-top"
        src={slideImage.url}
        alt=""
      />
    </div>
  );
};
