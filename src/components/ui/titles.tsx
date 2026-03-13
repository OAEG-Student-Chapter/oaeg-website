import textTheme from "@/lib/fonts";

export function MainTitle({ title }: { title: string }) {
  return (
    <h2 className={`text-5xl font-bold ${textTheme.title.className}`}>
      {title}
    </h2>
  );
}

export function SecondaryTitle({ title }: { title: string }) {
  return <h3 className="text-3xl font-bold">{title}</h3>;
}

export function TertiaryTitle({ title }: { title: string }) {
  return <h4 className="text-[1.2rem] font-normal">{title}</h4>;
}

export default { MainTitle, SecondaryTitle, TertiaryTitle };
