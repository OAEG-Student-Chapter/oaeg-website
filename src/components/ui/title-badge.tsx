// Rubik font
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ['latin'], weight: ['400'] });

export default function TitleBadge(props: { title: string, opacity?: number }) {

    return (
        <div 
            style={{ backgroundColor: `rgba(0,0,0,${props.opacity ?? 0.1})` }}
            className={`text-black px-2 py-1 border-l-4 border-primary w-fit ${rubik.className}`}
        >
            {props.title}
        </div>
    )
}