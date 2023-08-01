// Rubik font
import {Rubik} from "next/font/google";
const rubik = Rubik({subsets: ['latin'], weight:['400']});
export default function TitleBadge(props:{title:string, opacity?:number}){

    return (
        <div style={{
            color:'black',
            padding: '0.2rem 0.5rem',
            borderLeft: '4px solid var(--color-primary)',
            backgroundColor: `rgba(0,0,0,${props.opacity ?? 0.1})`,
            width: 'fit-content',
        }} className={rubik.className}>
            {props.title}
        </div>
    )
}