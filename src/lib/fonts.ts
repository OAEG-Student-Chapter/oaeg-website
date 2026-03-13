import { Rubik, Krub, Inter, Poppins } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const krub = Krub({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const krubItalic = Krub({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const textTheme = {
  title: rubik,
  body: krub,
  inter: inter,
  accent: poppins,
};

export default textTheme;
