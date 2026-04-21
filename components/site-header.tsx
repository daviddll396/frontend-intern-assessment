type SiteHeaderProps = {
  navItems: string[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/95 backdrop-blur-sm">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="EduNOW home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-tint)] text-lg font-extrabold text-[var(--brand-800)]">
            E
          </span>
          <div>
            <p className="font-sans text-xl font-extrabold tracking-tight text-[var(--brand-800)]">
              EduNOW
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              training & development
            </p>
          </div>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--brand-700)]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#footer" className="ghost-button">
            Contact Us
          </a>
          <a href="#consultation" className="secondary-button">
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
