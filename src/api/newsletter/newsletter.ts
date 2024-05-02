const arr = [
  {
    key: "April-2024",
    val: "https://www.canva.com/design/DAGC7TuCuJY/-51hnnIOGwka5LpzqVDV_w/view?embed",
  },
];

export interface DataItem {
  key?: string;
  val?: string;
}

export async function getNewsletters() {
  try {
    return arr;
  } catch (err) {
    console.error(err);
  }
}

export const getSingleNewsletter = async (key: String) => {
  const newsletters = await getNewsletters();
  if (newsletters)
    return newsletters.find((newsletter: DataItem) => newsletter.key === key);
};
