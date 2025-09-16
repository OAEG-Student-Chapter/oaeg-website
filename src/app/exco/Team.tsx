import TeamMember from "./TeamMember";
import React from "react";
import Styles from "./Team.module.css";

interface memberDetailObject {
    name: string;
    role: string;
    linkedin: string;
    avatarSRC: string;
}

interface TeamProps {
    memberDetailList: memberDetailObject[];
    numberOfColumns: number;
}

export default /*async*/ function Team({memberDetailList, numberOfColumns}: TeamProps) {
    let numberOfMembers = memberDetailList.length;
    let numberOfRows = Math.ceil(numberOfMembers / numberOfColumns);

    const components = [];

    for (let row = 0; row < numberOfRows; row++) {
        const rowComponents = [];

        for (let column = 0; column < numberOfColumns; column++) {
            const index = row * numberOfColumns + column;
            if (index < numberOfMembers) {
                const memberDetails = memberDetailList[index];
                const accountNames = [memberDetails.linkedin];

                rowComponents.push(
                    <div key={index} className={Styles.wrapper}>
                        <TeamMember
                            name={memberDetails.name}
                            role={memberDetails.role}
                            accountNames={accountNames}
                            avatarSRC={memberDetails.avatarSRC}
                        />
                    </div>
                );
            }
        }

        components.push(
            <div key={row} className={Styles.rowWrapper}>
                {rowComponents}
            </div>
        );
    }

    return (
        <div className={Styles.teamWrapper}>
            {components}
        </div>
    );
}

