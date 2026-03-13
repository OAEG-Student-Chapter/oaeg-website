"use client";
import textTheme from "@/lib/fonts";
import Link from "next/link";
import { ReactNode } from "react";

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
      <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[5px] bg-white transition-all duration-300 ease-in-out">
        <div className="absolute z-0 h-full w-full">
          <img
            className="absolute z-10 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            src={imgSrc}
            alt={title}
          />
        </div>
        <InnerBottomShadow>
          <div className="absolute bottom-0 left-0 z-20 w-full p-4 text-white transition-all duration-300 ease-in-out">
            <h4
              className={`z-10 line-clamp-1 w-full truncate ${textTheme.title.className}`}
            >
              {title}
            </h4>
            <p
              className={`z-10 line-clamp-1 w-full truncate text-primary ${textTheme.body.className}`}
            >
              {shortDescription}
            </p>
          </div>
        </InnerBottomShadow>
      </div>
    </Link>
  );
}

const InnerBottomShadow = (props: { children: ReactNode }) => (
  <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent">
    {props.children}
  </div>
);
