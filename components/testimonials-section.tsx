import Image from "next/image";

const testimonials = [
  {
    name: "Anita Okafor",
    role: "HR Business Partner",
    quote:
      "TOBAMS brought structure, warmth, and real business clarity into our learning approach. The programmes felt customised instead of recycled.",
    avatar: "/tobams/testimonial-1.png",
  },
  {
    name: "Chinedu Adebayo",
    role: "Programme Lead",
    quote:
      "The delivery was practical, elegant, and genuinely useful. Our team left with language, tools, and confidence we could apply immediately.",
    avatar: "/tobams/testimonial-2.png",
  },
  {
    name: "Mariam Yusuf",
    role: "Operations Director",
    quote:
      "What stood out was the balance between strategic thinking and real implementation. It felt like a partner, not just a trainer, was in the room.",
    avatar: "/tobams/testimonial-3.png",
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
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[var(--surface-tint)]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
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
