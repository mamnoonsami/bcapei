"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedIcon } from "@/components/AnimatedIcon";

// Mock data for easy integration of real data later
const upcomingEvents = [
  {
    id: 1,
    title: "Boishakhi Mela 1431",
    date: "April 14, 2024",
    type: "Festival",
    description:
      "Join us for the grand celebration of the Bengali New Year. Experience traditional music, authentic cuisine, and vibrant cultural performances in the heart of Charlottetown.",
    imageSrc:
      "/events-image/Boishakhi-Mela.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Professional Networking Mixer",
    date: "May 5, 2024",
    type: "Networking",
    icon: "forum",
    iconBg: "bg-primary/10 text-primary",
    blurBg: "bg-tertiary/5",
    blurPosition: "-right-12 -top-12",
    description:
      "Connect with established professionals and newcomers over coffee.",
  },
  {
    id: 3,
    title: "Bangla Language Workshop",
    date: "Every Sunday",
    type: "Workshop",
    icon: "menu_book",
    iconBg: "bg-tertiary/10 text-tertiary",
    blurBg: "bg-primary/5",
    blurPosition: "-left-12 -bottom-12",
    description:
      "Interactive sessions for children to learn and practice reading Bangla.",
  },
  {
    id: 4,
    title: "Annual Summer Picnic",
    date: "July 20, 2024",
    type: "Community",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjGupO643DaPW8XBW9CX7b6zk4DNGTGzZu1uP6uYFwCw5nnvjQly3ke4c8nI6d9KjbphFcKxNqA6TaINH6gwMAbTjjB5k3vUW5sYZSlKlqvSSo9NNPmaDpjBcEgtBjdj-1lC9OwmAbvTocLNoetKRusBzPI50jln5bUl6-Bg_8UYWWgS778G-sXKyNp8AqqImDcmArWoGO_2KZ-SxLy6yU498FtpviV8Xz4KOGZBlnG4LJD3nS8kZ1qe2Oja4ZwGD0-_4lSEU6Rdg",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const p = Math.min(window.scrollY / (heroRef.current.offsetHeight * 0.5), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Eased value for smoother feel
  const ease = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  return (
    <>
      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen md:min-h-[125vh] w-full overflow-hidden bg-background pt-20">

        {/* ── Desktop layout (md+) ──────────────────────────────── */}

        {/* Green BG: starts at right 65%, expands to full via clip-path */}
        <div
          className="hidden md:block absolute inset-0 bg-primary z-0"
          style={{ clipPath: `inset(0 0 0 ${(1 - ease) * 35}%)` }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-2 flex">
            <div className="w-1/3 bg-secondary" />
            <div className="w-1/3 bg-tertiary" />
            <div className="w-1/3 bg-primary-container" />
          </div>
        </div>

        {/* Desktop Image: original grid card layout + scroll-out animation */}
        <div className="hidden md:flex w-full max-w-[1600px] mx-auto px-8 lg:px-12 py-8 absolute top-20 bottom-0 left-0 right-0 items-center z-10 pointer-events-none">
          <div
            className="w-7/12 h-[80vh] shadow-2xl overflow-hidden flex-shrink-0"
            style={{
              transform: `translateX(${-ease * 110}%)`,
              opacity: Math.max(0, 1 - ease * 2.2),
              pointerEvents: ease > 0.05 ? "none" : "auto",
            }}
          >
            <img
              alt="Hero background"
              className="w-full h-full object-cover object-center"
              src="/bg-image/bg-image.png"
            />
          </div>
        </div>

        {/* Desktop Content: shifts from right-only to full width */}
        <div
          className="hidden md:flex absolute inset-0 items-center z-20"
          style={{ transform: `translateX(${(1 - ease) * 58}%)` }}
        >
          <div className="w-full px-10 lg:px-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-label-sm text-label-sm shadow-sm mb-6 backdrop-blur-sm border border-white/20">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              Heritage &amp; Home
            </span>
            <h1 className="font-display-xl text-5xl md:text-6xl lg:text-[72px] text-white drop-shadow-sm leading-tight font-bold mb-6">
              Bridging Deltaic Roots <br />
              <span className="text-emerald-200 italic font-medium">with Island Life.</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-white/90 font-medium max-w-2xl mb-10 leading-relaxed">
              Welcome to the digital home of the PEI Bangladeshi Community. A curated space celebrating our rich cultural heritage.
            </p>
            <div className="flex flex-row items-center justify-start gap-6">
              <button className="btn-explore bg-white text-primary px-10 py-4 rounded-full font-label-sm text-label-sm shadow-lg font-bold whitespace-nowrap flex items-center gap-2">
                Upcoming Events
                <span className="btn-explore-arrow material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-white/10 transition-colors font-bold whitespace-nowrap">
                Explore Directory
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile layout (unchanged) ─────────────────────────── */}
        <div className="md:hidden w-full">
          {/* Mobile image */}
          <div className="relative w-full h-[60vh] shadow-2xl overflow-hidden z-10">
            <img
              alt="Hero background"
              className="w-full h-full object-cover object-center"
              src="/bg-image/bg-image.png"
            />
          </div>
          {/* Mobile content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 py-12 text-left z-20 bg-primary relative -mt-[30vh] mr-8 sm:mr-16 shadow-2xl">
            <div className="absolute bottom-0 left-0 right-0 h-2 flex">
              <div className="w-1/3 bg-secondary" />
              <div className="w-1/3 bg-tertiary" />
              <div className="w-1/3 bg-primary-container" />
            </div>
            <div className="w-full">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-label-sm text-label-sm shadow-sm mb-6 backdrop-blur-sm border border-white/20">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                Heritage &amp; Home
              </span>
              <h1 className="font-display-xl text-5xl text-white drop-shadow-sm leading-tight font-bold mb-6">
                Bridging Deltaic Roots <br />
                <span className="text-emerald-200 italic font-medium">with Island Life.</span>
              </h1>
              <p className="font-body-lg text-lg text-white/90 font-medium w-full mb-10 leading-relaxed">
                Welcome to the digital home of the PEI Bangladeshi Community. A curated space celebrating our rich cultural heritage.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full">
                <button className="btn-explore w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-full font-label-sm text-label-sm shadow-lg font-bold whitespace-nowrap flex items-center justify-center gap-2">
                  Upcoming Events
                  <span className="btn-explore-arrow material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-white/10 transition-colors font-bold whitespace-nowrap">
                  Explore Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Upcoming Events (Bento Grid) */}
      <section className="max-w-container-max mx-auto px-gutter py-xl relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Curated gatherings and cultural celebrations.
            </p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 font-label-sm text-label-sm text-tertiary hover:underline"
            href="#"
          >
            View All Events{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[320px]">
          {/* Featured Event */}
          <div className="md:col-span-8 glass-panel rounded-3xl overflow-hidden relative group">
            <img
              alt={upcomingEvents[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={upcomingEvents[0].imageSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between w-full z-20">
              <div className="flex items-center gap-3">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                  {upcomingEvents[0].type}
                </span>
                <span className="text-white/90 font-label-sm text-label-sm flex items-center gap-1 drop-shadow-md">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_month
                  </span>{" "}
                  {upcomingEvents[0].date}
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-2xl md:text-headline-md text-white mb-2 drop-shadow-lg">
                  {upcomingEvents[0].title}
                </h3>
                <p className="font-body-md text-body-md text-white/90 max-w-[576px] drop-shadow-md">
                  {upcomingEvents[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Smaller Event 1 */}
          <div className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between bg-surface-container-lowest/80 relative overflow-hidden group">
            <div className={`absolute ${upcomingEvents[1].blurPosition} w-48 h-48 ${upcomingEvents[1].blurBg} rounded-full blur-2xl transition-transform group-hover:scale-150`}></div>
            <div>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${upcomingEvents[1].iconBg} mb-6`}>
                <span className="material-symbols-outlined">{upcomingEvents[1].icon}</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-[24px] text-on-surface mb-2 leading-tight">
                {upcomingEvents[1].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {upcomingEvents[1].description}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex justify-between items-center z-10">
              <span className="font-label-sm text-label-sm text-outline">
                {upcomingEvents[1].date}
              </span>
              <button className="text-primary hover:text-primary-container">
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Smaller Event 2 */}
          <div className="md:col-span-5 glass-panel rounded-3xl p-8 flex flex-col justify-between bg-surface-container-lowest/80 relative overflow-hidden group">
            <div className={`absolute ${upcomingEvents[2].blurPosition} w-48 h-48 ${upcomingEvents[2].blurBg} rounded-full blur-2xl transition-transform group-hover:scale-150`}></div>
            <div>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${upcomingEvents[2].iconBg} mb-6`}>
                <span className="material-symbols-outlined">{upcomingEvents[2].icon}</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-[24px] text-on-surface mb-2 leading-tight">
                {upcomingEvents[2].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {upcomingEvents[2].description}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex justify-between items-center z-10">
              <span className="font-label-sm text-label-sm text-outline">
                {upcomingEvents[2].date}
              </span>
              <button className="text-tertiary hover:text-tertiary-container">
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Smaller Event 3 */}
          <div className="md:col-span-7 glass-panel rounded-3xl overflow-hidden relative group">
            <img
              alt={upcomingEvents[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={upcomingEvents[3].imageSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                  {upcomingEvents[3].type}
                </span>
                <span className="text-white/80 font-label-sm text-label-sm drop-shadow-md">
                  {upcomingEvents[3].date}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl md:text-[28px] text-white mb-1 drop-shadow-lg">
                {upcomingEvents[3].title}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Community Moments Gallery */}
      <section className="py-xl overflow-hidden bg-background">
        <div className="max-w-container-max mx-auto px-gutter mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Community Moments</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Glimpses of our vibrant life, heritage, and the beauty of PEI.</p>
        </div>

        <div className="flex relative">
          <div className="animate-scroll flex gap-[var(--gallery-gap)]">
            {[
              "/gallery/picnic.png",
              "/gallery/dance.png",
              "/gallery/coastline.png",
              "/gallery/food.png",
              "/gallery/children.png",
              "/gallery/crafts.png",
              // Duplicate sets for seamless infinite effect on large screens
              "/gallery/picnic.png",
              "/gallery/dance.png",
              "/gallery/coastline.png",
              "/gallery/food.png",
              "/gallery/children.png",
              "/gallery/crafts.png",
              "/gallery/picnic.png",
              "/gallery/dance.png",
              "/gallery/coastline.png",
              "/gallery/food.png",
              "/gallery/children.png",
              "/gallery/crafts.png",
            ].map((src, idx) => (
              <div
                key={idx}
                className="w-[var(--gallery-img-width)] h-[300px] md:h-[450px] flex-shrink-0 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/20"
              >
                <img
                  src={src}
                  alt={`Gallery moment ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95">
            View All Moments
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
          </button>
        </div>
      </section>

      {/* Stay Connected (Newsletter) */}
      <section className="mt-xl py-24 bg-surface-container-low relative border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          {/* Animated envelope — Lordicon free icon, loops on load */}
          <div className="flex justify-center mb-4">
            <AnimatedIcon
              src="/icons/envelope.json"
              trigger="loop"
              size={100}
              speed={0.7}
            />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Stay Connected
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Subscribe to our newsletter to receive updates on upcoming events,
            community news, and exclusive features directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-[576px] mx-auto">
            <input
              className="flex-1 bg-surface-container shadow-inner border border-transparent focus:border-secondary focus:ring-0 rounded-full px-6 py-4 font-body-md text-body-md text-on-surface placeholder:text-outline-variant transition-colors outline-none"
              placeholder="Enter your email address"
              required
              type="email"
            />
            <button
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-label-sm text-label-sm shadow-md hover:bg-tertiary-container transition-colors whitespace-nowrap"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="font-label-sm text-label-sm text-outline mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
