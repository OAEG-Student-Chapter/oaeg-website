import React from "react";
import Style from "./TeamMember.module.css";
import SocialIcon from "./SocialIcon";
import socialMediaList from "./socialMediaList.json";
import textTheme from "@/lib/fonts";

interface TeamMemberProps {
    name: string;
    role: string;
    accountNames: string[];
    avatarSRC: string;
}

export default function TeamMember({ name, role, accountNames, avatarSRC }: TeamMemberProps) {
	return (
		<div className={Style.teamMember} >
            <div className={Style.user}>
                <div className={Style.imageDiv}>
				    <img className={Style.imgMain} src={avatarSRC} alt={name} />
                    <div className={Style.socialContainer}>
                        <div className={Style.iconsDiv} >
                            { socialMediaList.map((item, index) => (
                                <SocialIcon socialMedia={item.name} accountName={accountNames[index]} key={index}/>))
                            }
                        </div>
                    </div>
			    </div>
                <div className={Style.textDiv}>
                    <div className={`${Style.name} ${textTheme.title.className}`}>
                        {name}
                    </div>
                    <div className={`${Style.role} ${textTheme.body.className}`}>
                        {role}
                    </div>
                </div>

            </div>
		</div>
	);
}
