"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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

        {/* Left Background Image: ~40% width, behind the overlapping image */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[40%] z-0">
          <img
            alt="Left background"
            className="w-full h-full object-cover"
            src="/bg-image/bg-image999.png"
          />
        </div>

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
            className="w-7/12 h-[80vh] shadow-2xl flex-shrink-0"
            style={{
              transform: `translateX(${-ease * 110}%)`,
              opacity: Math.max(0, 1 - ease * 2.2),
              pointerEvents: ease > 0.05 ? "none" : "auto",
            }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full overflow-hidden"
            >
              <img
                alt="Hero background"
                className="w-full h-full object-cover object-center"
                src="/bg-image/bg-image.jpg"
              />
            </motion.div>
          </div>
        </div>

        {/* Desktop Content: shifts from right-only to full width */}
        <div
          className="hidden md:flex absolute inset-0 items-center z-20"
          style={{ transform: `translateX(${(1 - ease) * 58}%)` }}
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } }}
            className="w-full px-10 lg:px-16"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-label-sm text-label-sm shadow-sm mb-6 backdrop-blur-sm border border-white/20">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              Heritage &amp; Home
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display-xl text-5xl md:text-6xl lg:text-[72px] text-white drop-shadow-sm leading-tight font-bold mb-6">
              Bridging Deltaic Roots <br />
              <span className="text-emerald-200 italic font-medium">with Island Life.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body-lg text-lg md:text-xl text-white/90 font-medium max-w-2xl mb-10 leading-relaxed">
              Welcome to the digital home of the PEI Bangladeshi Community. A curated space celebrating our rich cultural heritage.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-row items-center justify-start gap-6">
              <button className="btn-explore bg-white text-primary px-10 py-4 rounded-full font-label-sm text-label-sm shadow-lg font-bold whitespace-nowrap flex items-center gap-2">
                Upcoming Events
                <span className="btn-explore-arrow material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-white/10 transition-colors font-bold whitespace-nowrap">
                Explore Directory
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Mobile layout (unchanged) ─────────────────────────── */}
        <div className="md:hidden w-full">
          {/* Mobile image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[60vh] shadow-2xl overflow-hidden z-10"
          >
            <img
              alt="Hero background"
              className="w-full h-full object-cover object-center"
              src="/bg-image/bg-image.jpg"
            />
          </motion.div>
          {/* Mobile content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center px-6 sm:px-10 py-12 text-left z-20 bg-primary relative -mt-[30vh] mr-8 sm:mr-16 shadow-2xl"
          >
            <div className="absolute bottom-0 left-0 right-0 h-2 flex">
              <div className="w-1/3 bg-secondary" />
              <div className="w-1/3 bg-tertiary" />
              <div className="w-1/3 bg-primary-container" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-label-sm text-label-sm shadow-sm mb-6 backdrop-blur-sm border border-white/20">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                Heritage &amp; Home
              </motion.span>
              <motion.h1 variants={fadeUp} className="font-display-xl text-5xl text-white drop-shadow-sm leading-tight font-bold mb-6">
                Bridging Deltaic Roots <br />
                <span className="text-emerald-200 italic font-medium">with Island Life.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="font-body-lg text-lg text-white/90 font-medium w-full mb-10 leading-relaxed">
                Welcome to the digital home of the PEI Bangladeshi Community. A curated space celebrating our rich cultural heritage.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full">
                <button className="btn-explore w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-full font-label-sm text-label-sm shadow-lg font-bold whitespace-nowrap flex items-center justify-center gap-2">
                  Upcoming Events
                  <span className="btn-explore-arrow material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-white/10 transition-colors font-bold whitespace-nowrap">
                  Explore Directory
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>


      {/* Upcoming Events (Bento Grid) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/bg-image/events-bg.png" alt="Events Background" className="w-full h-full object-cover" />
        </div>
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[320px]"
          >
            {/* Featured Event */}
            <motion.div variants={fadeUp} className="md:col-span-8 glass-panel rounded-3xl overflow-hidden relative group">
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
            </motion.div>

            {/* Smaller Event 1 */}
            <motion.div variants={fadeUp} className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between bg-surface-container-lowest/80 relative overflow-hidden group">
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
            </motion.div>

            {/* Smaller Event 2 */}
            <motion.div variants={fadeUp} className="md:col-span-5 glass-panel rounded-3xl p-8 flex flex-col justify-between bg-surface-container-lowest/80 relative overflow-hidden group">
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
            </motion.div>

            {/* Smaller Event 3 */}
            <motion.div variants={fadeUp} className="md:col-span-7 glass-panel rounded-3xl overflow-hidden relative group">
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
            </motion.div>
          </motion.div>
        </section>
      </div>
      {/* Community Moments Gallery */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-150px" }}
        className="relative py-xl overflow-hidden bg-[#E9F0ED] border-b border-outline-variant/40"
      >

        {/* Hanging Camera decoration in the center */}
        <motion.div
          variants={{
            initial: { y: -200 },
            animate: {
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 10, mass: 1 }
            }
          }}
          className="absolute left-1/2 -translate-x-1/2 top-0 z-20 flex flex-col items-center origin-top pointer-events-none"
        >
          {/* Swinging motion */}
          <motion.div
            animate={{ rotate: [-28, 28, -28] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center origin-top"
          >
            {/* Camera strap */}
            <div className="w-[1.5px] h-24 bg-primary/30" />
            {/* Camera body */}
            <div className="-mt-1 p-3.5 bg-surface-bright rounded-2xl shadow-xl border border-outline-variant/60 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-container-max mx-auto px-gutter mb-12 text-center relative z-10 pt-28">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Community Moments</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Glimpses of our vibrant life, heritage, and the beauty of PEI.</p>
        </div>

        <div className="relative z-10 w-full overflow-hidden px-4 pb-4">
          <div className="max-w-6xl mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[EffectCoverflow, Navigation, Pagination]}
              className="w-full py-8 !overflow-visible"
            >
              {[
                "/gallery/picnic.png",
                "/gallery/dance.png",
                "/gallery/coastline.png",
                "/gallery/food.png",
                "/gallery/children.png",
                "/gallery/crafts.png",
              ].map((src, idx) => (
                <SwiperSlide key={idx} className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px]">
                  <div className="w-full aspect-[4/5] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-surface-container">
                    <img
                      src={src}
                      alt={`Gallery moment ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/50 hover:bg-white transition-colors bg-surface-container-lowest">
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
              </button>
              <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/50 hover:bg-white transition-colors bg-surface-container-lowest">
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center relative z-10">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95">
            View All Moments
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
          </button>
        </div>
      </motion.section>

      {/* Stay Connected (Newsletter) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="pt-[200px] pb-[176px] -mb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/bg-image/newsletter-bg.png" alt="Newsletter Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl mx-auto px-gutter text-center relative z-10">
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
          <form className="flex flex-col sm:flex-row gap-4 max-w-[576px] mx-auto overflow-hidden p-2">
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 bg-surface-container shadow-inner border border-transparent focus:border-secondary focus:ring-0 rounded-full px-6 py-4 font-body-md text-body-md text-on-surface placeholder:text-outline-variant transition-colors outline-none"
              placeholder="Enter your email address"
              required
              type="email"
            />
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-label-sm text-label-sm shadow-md hover:bg-tertiary-container transition-colors whitespace-nowrap"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>
          <p className="font-label-sm text-label-sm text-outline mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.section>
    </>
  );
}
