import Image from "next/image";

const footerLinks = {
  "What We Do": [
    "Training and Development",
    "Learning Management System",
    "Capacity Development",
    "Management Development Program",
  ],
  Company: ["About", "What We Do", "Projects", "Pricing"],
  Solutions: ["Corporate Trainings", "Transformation Hub", "Strategic Partnership", "TG Academy"],
};

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-[var(--brand-950)] text-white">
      <div className="border-b border-white/10">
        <div className="section-shell flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow !text-white/65">Let’s create a difference</p>
            <h2 className="mt-4 max-w-xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let’s work together to build stronger teams, better leaders, and measurable growth.
            </h2>
          </div>
          <a href="mailto:hello@tobamsgroup.com" className="secondary-button whitespace-nowrap">
            Let’s Talk
          </a>
        </div>
      </div>

      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/tobams/logo.png" alt="TOBAMS Group" width={166} height={64} className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            A learning and development partner helping organisations build capability, scale
            training systems, and lead sustainable transformation.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 px-3 py-1">Fb</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Ln</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Ig</span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-sans text-lg font-bold">{title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TOBAMS Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="mailto:hello@tobamsgroup.com" className="hover:text-white">
              hello@tobamsgroup.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
