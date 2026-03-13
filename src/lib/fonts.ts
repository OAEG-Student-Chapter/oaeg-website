import { Rubik, Krub, Inter } from "next/font/google";

export const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const krub = Krub({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const inter = Inter({ subsets: ["latin"] });

export const krubItalic = Krub({ 
  subsets: ["latin"], 
  weight: ["400"],
  style: 'italic'
});

const textTheme = {
    title: rubik,
    body: krub,
    inter: inter
};

export default textTheme;


