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
    <div
      className={`relative m-[5%_20%] flex flex-col overflow-hidden rounded-md transition-all duration-200 ease-in-out md:m-0 ${hasAvatar ? "aspect-[3/4]" : ""}`}
    >
      {hasAvatar && (
        <div className="relative h-3/4">
          <Image
            loading="lazy"
            className="h-full w-full object-cover object-center"
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
                className="flex items-center justify-center rounded-bl bg-white/90 p-2"
              >
                <FaLinkedin className="h-6 w-6 text-black transition-colors hover:text-primary" />
              </a>
            </div>
          )}
        </div>
      )}
      <div
        className={`left-0 flex min-h-[25%] w-full flex-col bg-theme-maroon px-[5%] pb-[5%] pt-[7.5%] text-white ${hasAvatar ? "absolute bottom-0" : "relative"}`}
      >
        <div className={`font-semibold ${textTheme.title.className}`}>
          {name}
        </div>
        <p
          className={`w-full text-[0.9rem] font-extralight text-white ${textTheme.body.className}`}
        >
          {role}
        </p>
      </div>
      {!hasAvatar && !!linkedin && (
        <div className="absolute right-0 top-0 z-10 flex justify-end">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-bl bg-white/90 p-2"
          >
            <FaLinkedin className="h-6 w-6 text-black transition-colors hover:text-primary" />
          </a>
        </div>
      )}
    </div>
  );
}

export default function Team({
  memberDetailList,
  numberOfColumns = 5,
}: TeamProps) {
  const desktopGridClass =
    numberOfColumns === 4 ? "md:grid-cols-4" : "md:grid-cols-5";

  return (
    <div className="m-[0_0_3em] md:m-[4%_6%]">
      <div className={`grid grid-cols-1 gap-0 md:gap-[2%] ${desktopGridClass}`}>
        {memberDetailList.map((memberDetails, index) => (
          <div
            key={`${memberDetails.name}-${index}`}
            className="mb-0 md:mb-[3%]"
          >
            <TeamMemberCard {...memberDetails} />
          </div>
        ))}
      </div>
    </div>
  );
}
