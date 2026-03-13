import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import textTheme from "@/lib/fonts";

interface MemberDetailObject {
  name: string;
  role: string;
  linkedin: string;
  avatarSRC: string;
}

interface TeamProps {
  memberDetailList: MemberDetailObject[];
  numberOfColumns?: number;
}

function TeamMemberCard({
  name,
  role,
  linkedin,
  avatarSRC,
}: MemberDetailObject) {
  const hasAvatar = Boolean(avatarSRC);

  return (
    <div className="group relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-xl bg-theme-maroon shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {hasAvatar ? (
        <div className="relative h-[75%] w-full overflow-hidden bg-gray-100">
          <Image
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            src={avatarSRC}
            alt={name}
            width={600}
            height={800}
          />
          {!!linkedin && (
            <div className="absolute right-0 top-0 z-10 flex justify-end">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ "background": "var(--theme-gold)" }}
                className="flex items-center justify-center rounded-bl-lg p-2.5 transition-all hover:bg-white hover:opacity-100"
              >
                <FaLinkedin className="h-5 w-5 text-theme-maroon transition-colors hover:text-black" />
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex h-[75%] w-full items-center justify-center bg-black/10">
          <div className="flex h-full w-full items-center justify-center text-white/20">
            <span className="text-4xl font-bold uppercase tracking-widest">{name.charAt(0)}</span>
          </div>
          {!!linkedin && (
            <div className="absolute right-0 top-0 z-10 flex justify-end">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-bl-lg bg-white/90 p-2.5 opacity-90 backdrop-blur-sm transition-all hover:bg-white hover:opacity-100"
              >
                <FaLinkedin className="h-5 w-5 text-theme-maroon transition-colors hover:text-black" />
              </a>
            </div>
          )}
        </div>
      )}
      <div className="flex h-[25%] flex-col items-center justify-center bg-theme-maroon px-3 py-2 text-center text-white">
        <h3 className={`line-clamp-1 text-sm font-semibold sm:text-base ${textTheme.title.className}`}>
          {name}
        </h3>
        <p className={`line-clamp-2 w-full text-xs font-light text-white/90 sm:text-sm ${textTheme.body.className}`}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Team({
  memberDetailList,
  numberOfColumns = 5,
}: TeamProps) {
  const desktopGridClass =
    numberOfColumns === 4
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";

  return (
    <div className="w-full">
      <div className={`grid gap-4 md:gap-6 ${desktopGridClass}`}>
        {memberDetailList.map((memberDetails, index) => (
          <TeamMemberCard key={`${memberDetails.name}-${index}`} {...memberDetails} />
        ))}
      </div>
    </div>
  );
}
