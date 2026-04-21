export function CalloutBanner() {
  return (
    <section className="bg-white pb-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-[var(--brand-700)] px-8 py-12 text-center text-white shadow-[0_24px_70px_rgba(86,24,71,0.22)]">
          <p className="eyebrow !text-white/70">Get Started</p>
          <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">
            Is sustainable development, growth, and advancement on your agenda too?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Let’s build a tailored development pathway that moves your team from ambition to
            visible capability gains.
          </p>
          <a href="#footer" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-800)] hover:bg-[var(--surface-tint)]">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
