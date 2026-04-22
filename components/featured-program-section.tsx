import Image from "next/image";

const modules = [
  "Leadership and people management",
  "Strategic thinking and execution",
  "Stakeholder communication",
  "Decision-making under pressure",
];

export function FeaturedProgramSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell rounded-[32px] bg-[var(--brand-800)] px-6 py-8 text-white shadow-[0_28px_80px_rgba(54,18,47,0.28)] sm:px-8 lg:px-10 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-white/10 sm:h-[420px]">
            <Image
              src="/tobams/management-development.png"
              alt="Management development session with professionals reviewing materials together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="eyebrow !text-white/70">Flagship Programme</p>
            <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">
              Management Development Program
            </h2>
            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              Designed for leaders and managers who need more than theory, this programme blends
              strategic thinking, people leadership, and organisational clarity into a practical
              experience that improves real-world execution.
            </p>
            <div className="mt-8 space-y-3">
              {modules.map((module) => (
                <div
                  key={module}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                    {module}
                  </span>
                  <span className="text-xl leading-none text-white/70">+</span>
                </div>
              ))}
            </div>
            <a href="#consultation" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--surface-tint)]">
              Schedule a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
