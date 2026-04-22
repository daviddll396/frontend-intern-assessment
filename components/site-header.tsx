import Image from "next/image";

type SiteHeaderProps = {
  navItems: string[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/95 backdrop-blur-sm">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="TOBAMS Group home">
          <Image src="/tobams/logo.png" alt="TOBAMS Group" width={166} height={64} className="h-12 w-auto sm:h-14" priority />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
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
          <a href="#footer" className="ghost-button header-account-button">
            <Image src="/tobams/account-icon.png" alt="" width={18} height={18} className="h-[18px] w-[18px]" aria-hidden />
            <span>Account</span>
          </a>
          <a href="#consultation" className="secondary-button">
            Take Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
