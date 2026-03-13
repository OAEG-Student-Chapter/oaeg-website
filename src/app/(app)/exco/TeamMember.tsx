import React from "react";
import SocialIcon, { socialMediaList } from "./SocialIcon";
import textTheme from "@/lib/fonts";

interface TeamMemberProps {
  name: string;
  role: string;
  accountNames: string[];
  avatarSRC: string;
}

export default function TeamMember({
  name,
  role,
  accountNames,
  avatarSRC,
}: TeamMemberProps) {
  if (!avatarSRC)
    return (
      <div className="relative m-[5%_20%] flex flex-col overflow-hidden rounded-md transition-all duration-200 ease-in-out md:m-0">
        <div className="flex min-h-[25%] flex-col rounded bg-theme-maroon px-[5%] pb-[5%] pt-[7.5%] text-white">
          <div className={`font-semibold ${textTheme.title.className}`}>
            {name}
          </div>
          <p
            className={`w-full text-[0.9rem] font-extralight text-white ${textTheme.body.className}`}
          >
            {role}
          </p>
        </div>
      </div>
    );
  return (
    <div className="relative m-[5%_20%] flex aspect-[3/4] flex-col overflow-hidden rounded-md transition-all duration-200 ease-in-out md:m-0">
      <div className="relative h-3/4">
        <img
          loading={"lazy"}
          className="h-full w-full object-cover object-center"
          src={avatarSRC}
          alt={name}
        />
        {accountNames.filter((a) => a !== "").length > 0 && (
          <div className="absolute right-0 top-0 z-10 flex h-[9vw] translate-y-0 justify-end md:h-[3vw]">
            <div className="flex flex-row justify-evenly rounded-bl bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6]">
              {socialMediaList.map((item, index) => (
                <SocialIcon
                  socialMedia={item.name}
                  accountName={accountNames[index]}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 flex min-h-[25%] w-full flex-col bg-theme-maroon px-[5%] pb-[5%] pt-[7.5%] text-white">
        <div className={`font-semibold ${textTheme.title.className}`}>
          {name}
        </div>
        <p
          className={`w-full text-[0.9rem] font-extralight text-white ${textTheme.body.className}`}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
