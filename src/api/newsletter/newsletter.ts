const arr = [
  {
    key: "April-2024",
    val: "https://www.canva.com/design/DAGCFKMZ1M4/nWZKLbiEFBitKAk2a9Ld8Q/view?embed",
  }
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
