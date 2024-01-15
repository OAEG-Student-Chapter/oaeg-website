import React from "react";
import Style from "./TeamMember.module.css";
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
        return <div className={Style.user}>
            <div className={`${Style.textDiv} bg-theme-maroon rounded`}>
                <div className={`${Style.name} ${textTheme.title.className}`}>
                    {name}
                </div>
                <p className={`${Style.role} ${textTheme.body.className}`}>
                    {role}
                </p>
            </div>
        </div>;
	return (
        <div className={`${Style.user} aspect-[3/4]`}>
                <div className={Style.imageDiv}>
				    <img loading={"lazy"} className={Style.imgMain} src={avatarSRC} alt={name} />
                    <div className={Style.socialContainer}>
                        <div className={`${Style.iconsDiv} rounded-l`} >
                            { socialMediaList.map((item, index) => (
                                <SocialIcon socialMedia={item.name} accountName={accountNames[index]} key={index}/>))
                            }
                        </div>
                    </div>
			    </div>
                <div className={`${Style.textDiv} bg-theme-maroon absolute bottom-0 left-0 w-full`}>
                    <div className={`${Style.name} ${textTheme.title.className}`}>
                        {name}
                    </div>
                    <p className={`${Style.role} ${textTheme.body.className}`}>
                        {role}
                    </p>
                </div>
            </div>
	);
}
