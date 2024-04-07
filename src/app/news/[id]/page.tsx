import { getSingleNewsletter } from "@/api/newsletter/newsletter";
import styles from "../newsletter.module.css";
import navStyles from "@/app/components/app-header/app-navbar.module.css";

const getNewsletter = async (id: any) => {
  const newsletter = await getSingleNewsletter(id)
  if (newsletter)
    return newsletter
}

export default async function Page({params} : any) {
  const {id} = params
  
  const newsletter = await getNewsletter(id)
  // console.log(news)
  return (
    <div className={`${styles.pageWrapper} ${navStyles.navbarSpace} bg-white min-h-screen`}>
      <span className={styles.page_title}>Newsletter<br></br>{newsletter?.key}</span>
      
      <iframe
        className={styles.newsletter}
        loading="lazy"
        src={newsletter?.val}
        allow="fullscreen"
      />
      
    </div>
  );
}
