export default function SectionHeading({
  id,
  title,
  intro,
  tone = "dark",
}: {
  id: string;
  title: string;
  intro: string;
  /** "dark" = for navy backgrounds, "light" = for white / off-white backgrounds */
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className={`font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl ${
          light ? "text-navy-deep" : "text-frost"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-relaxed sm:text-lg ${
          light ? "text-navy-deep/75" : "text-mist"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}