import TeamMember from "./TeamMember";
import React from "react";
import "/Team.css"

export default function Team(props) {
    let memberDetailList = props.memberDetailList;
    let numberOfMembers = memberDetailList.length;
    let numberOfColumns = props.numberOfColumns;
    let numberOfRows = Math.ceil(numberOfMembers / numberOfColumns);

    const renderComponents = () => {
        const components = [];

        for (let row = 0; row < numberOfRows; row++) {
            const rowComponents = [];

            for (let column = 0; column < numberOfColumns; column++) {
                const index = row * numberOfColumns + column;
                if (index<numberOfMembers) {
                    const memberDetails = memberDetailList[index];

                    rowComponents.push(
                        <div key={index} className="wrapper">
                            {<TeamMember
                                name={memberDetails.name}
                                role={memberDetails.role}
                                twitterAccountName={memberDetails.twitterAccountName}
                                facebookAccountName={memberDetails.facebookAccountName}
                                instagramAccountName={memberDetails.instagramAccountName}
                                avatarSRC={memberDetails.avatarSRC}
                            />}
                        </div>
                    );
                }
            }

            components.push(
                <div key={row} className="rowWrapper">
                    {rowComponents}
                </div>
            );
        }

        return components;
    };
    return <div className="mainWrapper">{renderComponents()}</div>;
}
