import Image from "next/image";

const featureCards = [
  "Strategic capability building",
  "Innovation-led transformation",
  "Digital learning pathways",
  "Performance acceleration",
  "Operational reinvention",
  "Change adoption support",
];

export function TransformationHubSection() {
  return (
    <section className="bg-[var(--surface-tint-2)] py-20">
      <div className="section-shell rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-8 shadow-[0_20px_60px_rgba(45,18,36,0.07)] sm:px-8 lg:px-10 lg:py-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Transformation Hub</p>
          <h2 className="section-title mt-4">Transformation Hub With Purpose</h2>
          <p className="section-copy mt-5">
            A curated ecosystem of learning, advisory, and execution support for organisations that
            want to transform intentionally. The hub brings strategy, people capability, and modern
            delivery models together in one experience.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-6">
            <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-[var(--border-soft)] sm:h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1516321310764-8d3f1a8e6c8c?auto=format&fit=crop&w=900&q=80"
                alt="Creative professional in a colourful studio environment representing transformation and innovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <a href="#consultation" className="secondary-button">
              Read More
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((card) => (
              <article
                key={card}
                className="rounded-[24px] border border-[var(--border-soft)] bg-white px-5 py-6 shadow-sm"
              >
                <span className="inline-flex rounded-full bg-[var(--surface-tint)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-700)]">
                  Focus
                </span>
                <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-[var(--foreground)]">
                  {card}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  Practical frameworks and hands-on delivery support to help teams move from intent
                  to measurable progress.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
