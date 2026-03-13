import React from "react";
import SocialIcon, { socialMediaList} from "./SocialIcon";
import textTheme from "@/lib/fonts";

interface TeamMemberProps {
    name: string;
    role: string;
    accountNames: string[];
    avatarSRC: string;
}

export default function TeamMember({ name, role, accountNames, avatarSRC }: TeamMemberProps) {
    if(!avatarSRC)
        return <div className="relative flex flex-col rounded-md overflow-hidden md:m-0 m-[5%_20%] transition-all duration-200 ease-in-out">
            <div className="min-h-[25%] flex flex-col px-[5%] pt-[7.5%] pb-[5%] text-white bg-theme-maroon rounded">
                <div className={`font-semibold ${textTheme.title.className}`}>
                    {name}
                </div>
                <p className={`font-extralight w-full text-[0.9rem] text-white ${textTheme.body.className}`}>
                    {role}
                </p>
            </div>
        </div>;
	return (
        <div className="relative flex flex-col rounded-md overflow-hidden md:m-0 m-[5%_20%] transition-all duration-200 ease-in-out aspect-[3/4]">
                <div className="h-3/4 relative">
				    <img loading={"lazy"} className="w-full h-full object-cover object-center" src={avatarSRC} alt={name} />
                    {
                        accountNames.filter(a => a !== "").length > 0 && <div className="absolute z-10 top-0 translate-y-0 right-0 h-[9vw] md:h-[3vw] flex justify-end">
                            <div className="flex justify-evenly bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6] flex-row rounded-bl" >
                                { socialMediaList.map((item, index) => (
                                    <SocialIcon socialMedia={item.name} accountName={accountNames[index]} key={index}/>))
                                }
                            </div>
                        </div>
                    }
			    </div>
                <div className="min-h-[25%] flex flex-col px-[5%] pt-[7.5%] pb-[5%] text-white bg-theme-maroon absolute bottom-0 left-0 w-full">
                    <div className={`font-semibold ${textTheme.title.className}`}>
                        {name}
                    </div>
                    <p className={`font-extralight w-full text-[0.9rem] text-white ${textTheme.body.className}`}>
                        {role}
                    </p>
                </div>
            </div>
	);
}
