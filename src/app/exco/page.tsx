import Team from "./Team";
import memberDetailList from "./membersDetailList.json";
import Styles from "./Team.module.css";
import TeamHeader from "./TeamHeader";


interface MemberObject {
  name: string; 
  role: string; 
  linkedin: string;
  avatarSRC: string
}

interface DataObject {
  [key: string]: {
    [key: string]: never[] | MemberObject[];
  };
}

export const runtime = "edge";

export default function Page({ params, searchParams}: {
    params: { slug: string };
    searchParams?: { [key: string]: string };
  }) {
    // By default, the year is 2023 and the body is mainBody ( hardcoded here )
    const year:string = searchParams?.year || "2024";
    const body:string = searchParams?.body || "mainBody";
    const detailList: DataObject = memberDetailList;
    return (
        <div className="bg-white py-24 sm:py-12 min-h-screen">
            <div className={Styles.mainWrapper}>
                <div>
                    <TeamHeader currentYear={year} currentBody={body} />
                </div>
                <Team
                    memberDetailList={ (year!=undefined &&
                        body!=undefined &&
                        detailList[year]!=undefined &&
                        detailList[year][body]!=undefined)  ?  detailList[year][body] : []
                    }
                    numberOfColumns={5} />
            </div>
        </div>
    );
}


