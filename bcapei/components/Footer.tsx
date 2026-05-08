import Link from "next/link";

const quickLinks = [
  { name: "Contact Us", href: "#" },
  { name: "Newsletters", href: "#" },
  { name: "Volunteer", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-emerald-100 dark:border-emerald-900 bg-stone-50 dark:bg-emerald-950 font-serif text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
            PEI Bangladeshi Community
          </span>
          <p className="text-emerald-900 dark:text-emerald-50 opacity-80 max-w-[320px] leading-relaxed">
            © 2024 PEI Bangladeshi Community. Bridging Deltaic Roots with Island Life.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-emerald-900 dark:text-emerald-50 font-bold mb-2">
            Quick Links
          </span>
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-600 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 opacity-80 hover:opacity-100 transition-opacity w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start md:items-end">
          <span className="text-emerald-900 dark:text-emerald-50 font-bold mb-2">
            Follow Us
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
