import TeamMember from "./TeamMember";
import React from "react";

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
                    <div key={index} className="w-full">
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
            <div key={row} className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-[2%] mb-0 md:mb-[3%]">
                {rowComponents}
            </div>
        );
    }

    return (
        <div className="m-[0_0_3em] md:m-[4%_6%]">
            {components}
        </div>
    );
}

