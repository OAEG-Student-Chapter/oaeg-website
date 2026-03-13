"use client";
import textTheme from "@/lib/fonts";
import Link from "next/link";
import {ReactNode} from "react";

export default function AppCard({
  title,
  shortDescription,
  link,
  imgSrc,
}: {
  title: string;
  shortDescription?: string;
  link: string;
  imgSrc: string;
}) {
  return (
    <Link href={link}>
      <div className="bg-white transition-all duration-300 ease-in-out cursor-pointer overflow-hidden relative h-full w-full rounded-[5px] group">
        <div className="absolute z-0 w-full h-full">
          <img className="absolute z-10 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src={imgSrc} alt={title} />
        </div>
        <InnerBottomShadow>
          <div className="absolute z-20 bottom-0 left-0 w-full p-4 text-white transition-all duration-300 ease-in-out">
            <h4 className={`line-clamp-1 truncate w-full z-10 ${textTheme.title.className}`}>
              {title}
            </h4>
            <p className={`text-primary line-clamp-1 truncate w-full z-10 ${textTheme.body.className}`}>
              {shortDescription}
            </p>
          </div>
        </InnerBottomShadow>

      </div>
    </Link>
  );
}

const InnerBottomShadow = (props: {children:ReactNode}) => (
    <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent via-transparent">
      {props.children}
    </div>
    );
