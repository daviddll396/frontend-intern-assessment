import Image from "next/image";

export type ServiceSplitSectionProps = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  imageLeft?: boolean;
  accent?: "default" | "tinted";
  imageShape?: "rectangle" | "circle";
};

export function ServiceSplitSection({
  title,
  description,
  bullets,
  image,
  imageAlt,
  ctaLabel,
  imageLeft = false,
  accent = "default",
  imageShape = "rectangle",
}: ServiceSplitSectionProps) {
  const textColumn = (
    <div className="max-w-xl">
      <p className="eyebrow">EduNOW Services</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
      <ul className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-base text-[var(--foreground)]">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent-500)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a href="#consultation" className="primary-button mt-8">
        {ctaLabel}
      </a>
    </div>
  );

  const imageColumn = (
    <div className={`relative ${imageShape === "circle" ? "mx-auto h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]" : "h-[320px] w-full sm:h-[420px]"}`}>
      <div
        className={`relative h-full w-full overflow-hidden border border-[var(--border-soft)] shadow-[0_25px_60px_rgba(45,18,36,0.08)] ${
          imageShape === "circle" ? "rounded-full" : "rounded-[28px]"
        }`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
    </div>
  );

  return (
    <section className={accent === "tinted" ? "bg-[var(--surface-tint)] py-20" : "bg-white py-20"}>
      <div
        id={title === "Learning Management System" ? "services" : undefined}
        className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>{imageLeft ? imageColumn : textColumn}</div>
        <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>{imageLeft ? textColumn : imageColumn}</div>
      </div>
    </section>
  );
}
