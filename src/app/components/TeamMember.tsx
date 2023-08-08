import React from "react";
import Style from "./TeamMember.module.css";
import SocialIcon from "./SocialIcon";
import socialMediaList from "./socialMediaList.json";


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
			    </div>
                <div className={Style.textDiv}>
                    <div className={Style.name}>
                        {name}
                    </div>
                    <div className={Style.role}>
                        {role}
                    </div>
                </div>
                <div className={Style.socialContainer}>
                    <div className={Style.iconsDiv} >
                        { socialMediaList.map((item, index) => (
                            <SocialIcon socialMedia={item.name} accountName={accountNames[index]} key={index}/>))
                        }
                    </div>
                </div>
            </div>
		</div>
	);
}
