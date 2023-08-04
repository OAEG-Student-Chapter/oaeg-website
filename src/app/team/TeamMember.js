import React from "react";
import "./TeamMember.css";
import SocialIcon from "./SocialIcon";

function TeamMember(props) {
    const socialItems = ["facebook", "instagram", "twitter"];
    
	return (
		<div className="team-member" >
            <div className="user">
                <div className="image-div">
				    <img className="imgMain" src={props.avatarSRC} alt={props.name} />
			    </div>
                <div className="text-div">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="role">
                        {props.role}
                    </div>
                </div>
                <div className="social-container">
                    <div className="icons-div" >
                        { socialItems.map((item, index) => (
                            <SocialIcon socialMedia={item} accountName={props.accountName}/>))
                        }
                    </div>
                </div>
            </div>
            
		</div>
	);
}

export default TeamMember;