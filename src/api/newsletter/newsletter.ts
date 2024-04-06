const arr = [
  {
    key: "august-2023",
    val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  },
  {
    key: "sep-2023",
    val: "https://www.canva.com/design/DAGBn99YUrI/xXbxuxBwTUNIgksDFNn7bA/view?embed",
  },
  {
    key: "oct-2023",
    val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  },
  {
    key: "oct-2023",
    val: "https://www.canva.com/design/DAGBn99YUrI/xXbxuxBwTUNIgksDFNn7bA/view?embed",
  },
  {
    key: "oct-2023",
    val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  },
  {
    key: "oct-2023",
    val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  },
  // {
  //   key: "oct-2023",
  //   val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  // },
  // {
  //   key: "oct-2023",
  //   val: "https://www.canva.com/design/DAGA4bH8HVc/Yic5zLE2RRjCvMzi-B89HA/view?embed",
  // },
];

export interface DataItem {
  key?: string;
  val?: string;
}

export async function getNewsletters() {
  try {
    // Type assertion for parsed data

    // Respond with the entire data array
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

//   // Example usage
//   getByKey('apiKey')
//     .then((value) => console.log('API Key:', value))
//     .catch((err) => console.error('Error retrieving data:', err));
