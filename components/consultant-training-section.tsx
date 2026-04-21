const consultantTracks = [
  {
    title: "Business Consulting",
    body: "Structured advisory thinking, stakeholder mapping, and delivery methods for consultants who need to lead with confidence.",
  },
  {
    title: "Business Assessment",
    body: "Frameworks for diagnosing capability gaps, identifying risks, and presenting findings with clarity and commercial relevance.",
  },
  {
    title: "Market Research",
    body: "Research planning, insight translation, and practical reporting techniques to drive decisions rather than just documentation.",
  },
  {
    title: "Public Relations",
    body: "Message shaping, executive communication, and reputation-focused engagement strategies for complex business environments.",
  },
];

export function ConsultantTrainingSection() {
  return (
    <section className="bg-white py-20" id="consultation">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Consultant Capability</p>
          <h2 className="section-title mt-4">Training The Consultant</h2>
          <p className="section-copy mt-5">
            We equip consultants, facilitators, and client-facing professionals with the business,
            research, and communication depth required to deliver credible impact in demanding
            environments.
          </p>
        </div>

        <div className="mt-10 rounded-[32px] bg-[var(--brand-900)] px-6 py-8 text-white shadow-[0_25px_70px_rgba(27,11,24,0.2)] sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {consultantTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-[24px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm"
              >
                <h3 className="font-sans text-xl font-bold tracking-tight">{track.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{track.body}</p>
              </article>
            ))}
          </div>
          <a href="#footer" className="mt-8 inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--brand-800)]">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
