import Link from "next/link";

interface Newsletter {
  key: string;
  val: string;
}

const NEWSLETTERS: Newsletter[] = [
  {
    key: "April-2024",
    val: "https://www.canva.com/design/DAGC7TuCuJY/-51hnnIOGwka5LpzqVDV_w/view?embed",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key: urlKey } = await searchParams;
  const newsletter = NEWSLETTERS.find((n) => n.key === urlKey) || NEWSLETTERS[0];

  return (
    <div className="flex h-auto w-full flex-col bg-white pb-4 pt-[calc(var(--navbar-height)+1rem)] md:h-screen md:flex-row">
      <div className="flex max-h-min w-full flex-col items-center justify-center border-b border-[#d6d6d6] px-[10px] md:w-1/4 md:border-b-0 md:border-r">
        <div className="mb-3 mt-5 w-fit border-l-4 border-primary bg-[#f3f3f3] px-2 py-[0.2rem] text-base font-medium text-[#1c1f35]">
          Newsletters
        </div>
        <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 flex h-full flex-row justify-center overflow-x-auto whitespace-nowrap px-[10px] md:flex-col md:overflow-y-auto md:whitespace-normal">
          {NEWSLETTERS.map((item) => (
            <Link
              key={item.key}
              href={`/news?key=${item.key}`}
              className={`relative mb-5 ml-2.5 inline-block h-[182.5px] w-[125px] overflow-hidden rounded-[5px] border md:ml-0 md:block md:h-auto md:w-full ${
                newsletter?.key === item.key ? "border-primary ring-1 ring-primary" : "border-black"
              }`}
            >
              <img
                src={`/newsletter_images/${item.key}.webp`}
                className="brightness-90 transition-all hover:brightness-100 object-cover"
                alt={item.key}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-[10px] text-center text-sm text-white">
                {item.key}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-2.5 flex h-auto w-full md:mt-0 md:h-full">
        {newsletter && (
          <div className="flex h-[600px] w-full flex-col items-center p-0 md:h-full md:p-5">
            <iframe
              className="h-full w-full border-0"
              loading="lazy"
              src={newsletter.val}
              title={newsletter.key}
            />
          </div>
        )}
      </div>
    </div>
  );
}


