const testimonials = [
  {
    name: "Anita Okafor",
    role: "HR Business Partner",
    quote:
      "EduNOW brought structure, warmth, and real business clarity into our learning approach. The programmes felt customised instead of recycled.",
  },
  {
    name: "Chinedu Adebayo",
    role: "Programme Lead",
    quote:
      "The delivery was practical, elegant, and genuinely useful. Our team left with language, tools, and confidence we could apply immediately.",
  },
  {
    name: "Mariam Yusuf",
    role: "Operations Director",
    quote:
      "What stood out was the balance between strategic thinking and real implementation. It felt like a partner, not just a trainer, was in the room.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--surface-tint-2)] py-20">
      <div className="section-shell">
        <div className="text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mt-4">What our clients say</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-[var(--border-soft)] bg-white p-7 shadow-[0_12px_35px_rgba(45,18,36,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface-tint)] font-sans text-lg font-extrabold text-[var(--brand-700)]">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-[var(--foreground)]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-[var(--muted-foreground)]">
                “{testimonial.quote}”
              </p>
              <div className="mt-7 flex gap-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={`${testimonial.name}-${starIndex}`}
                    className={`h-2.5 w-2.5 rounded-full ${
                      starIndex <= 3 + (index % 2) ? "bg-[var(--accent-500)]" : "bg-[var(--surface-tint)]"
                    }`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
