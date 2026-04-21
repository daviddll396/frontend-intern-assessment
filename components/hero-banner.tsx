import Image from "next/image";

export function HeroBanner() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
        alt="Professional woman working beside glowing screens during a learning technology session"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,11,24,0.72),rgba(27,11,24,0.8))]" />
      <div className="section-shell relative flex min-h-[420px] flex-col items-center justify-center py-24 text-center text-white sm:min-h-[500px]">
        <p className="eyebrow !text-white/70">What We Do</p>
        <h1 className="mt-5 max-w-4xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Training and Development
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Empowering organisations with practical learning systems, capacity building, and
          high-impact development programmes that strengthen people, teams, and long-term
          business performance.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#consultation" className="secondary-button">
            Book a Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--brand-800)]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
