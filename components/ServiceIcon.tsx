import type { IconName } from "@/lib/section";

const shapes: Record<IconName, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="4" width="19" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </>
  ),
  it: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "text-marigold",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {shapes[name]}
    </svg>
  );
}