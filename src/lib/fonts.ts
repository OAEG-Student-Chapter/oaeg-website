import {Rubik, Krub} from "next/font/google";

const rubik = Rubik({subsets: ['latin'], weight:['400','500','600','700']});
const krub = Krub({subsets: ['latin'], weight:['400','500','600','700']});

const textTheme = {
    title : rubik,
    body : krub
}

export default textTheme;


