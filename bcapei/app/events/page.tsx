"use client";

import { AnimatedIcon } from "@/components/AnimatedIcon";
import { motion } from "framer-motion";

// Mock data for events and news
const featuredEvent = {
  title: "Pohela Boishakh Celebration 2024",
  description: "Join us as we welcome the Bengali New Year with vibrant colors, traditional music, and authentic cuisine at Victoria Park. A day to celebrate our heritage on the island.",
  date: "April 14, 2024",
  location: "Victoria Park, Charlottetown",
  image: "/events-image/pohela-boishakh.png",
};

const newsAndEvents = [
  {
    id: 1,
    type: "Newsletter",
    typeBadge: "bg-secondary-container text-on-secondary-container",
    date: "March 1, 2024",
    title: "Spring Community Update & Delta Echoes Issue 4",
    description: "Read our latest newsletter covering recent community achievements, upcoming volunteer opportunities, and a spotlight on small businesses owned by our members.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZFuAVZocfC0Z3KfJycHLe0CZjio0_L4sokEKdmcuYttfzu5stepr-mzs5JEQff_Hr0owaP9USMWh1zfTqjzg_IMJVR3FgXTaJdkC3QDOc7tTWoLGwL-4ZY26_TxOz9MszH7yRMKxRVNUaCzomtmkxOucd-fqKGByEpQcyFb-cXznfU9XgU9fE727EBxpQlBLdgMXgWOvbajbreQRddG02kWium-_h1SFRrY2AbduxEQmQKUyLM_09TlRxpEybgNK03ckn2PZ-qEI",
    linkText: "Read Full Issue",
  },
  {
    id: 2,
    type: "News",
    typeBadge: "bg-primary text-on-primary",
    date: "February 20, 2024",
    title: "New Mentorship Program Launched for Recent Immigrants",
    description: "We are thrilled to announce a new initiative pairing established professionals with newcomers to help navigate the local job market and cultural integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8lcv8_aSaZL-kEe8_YWeOngZ5DOz7GKOiVS9TkQGX5L3vPNqAvoCjTeCvqO8S97JDnwkE81_Fjnt7oV94ALs88Xg3F73a8fiudhE2bHYV7E0LQh38dDV59OvR6u4-qrzNNo-LR3GDp_kfWDn4pWJIg85d_E5lzeQw-I1bPOMEKjU1UDv6OMuc1TcC1vxI3n0EnxJfYwx_qm4XfhY_W143JPKr3OMMJwhmJhPPtG7qPpFTW5DWBOvpQ_IrALaz0VJR0zR0dyUAA6M",
    linkText: "Learn More",
  },
  {
    id: 3,
    type: "Event",
    typeBadge: "bg-tertiary text-on-primary",
    date: "Starts June 5, 2024",
    title: "Team Registrations Open for 2024 PEI BD Cricket Cup",
    description: "Gather your squad! Registration is now open for the annual summer cricket tournament. All skill levels welcome for a season of friendly competition.",
    icon: "sports_cricket",
    linkText: "Register Team",
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Events() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-glass {
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}} />

      <main className="pt-[180px] pb-xl px-6 md:px-12 xl:px-24 w-full mx-auto selection:bg-primary-container selection:text-on-primary-container">
        {/* Header Section */}
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mb-xl text-center md:text-left"
          >
            <div className="max-w-4xl">
              <motion.h1 variants={fadeUp} className="font-display-xl text-[40px] md:text-[56px] text-primary mb-4 leading-tight">Chronicles & Gatherings</motion.h1>
              <motion.p variants={fadeUp} className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed">Stay connected with the heartbeat of the PEI Bangladeshi diaspora. Discover upcoming cultural celebrations, community milestones, and stories that bridge our deltaic roots with island life.</motion.p>
            </div>
          </motion.header>
        </div>

        {/* Main Content Layout (Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
          
          {/* Left Column: Featured Event (Main Action) */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 xl:col-span-9 flex flex-col h-full"
          >
            <div className="glass-panel rounded-[24px] overflow-hidden flex flex-col h-full shadow-lg">
              <div className="relative min-h-[400px] lg:min-h-[600px] flex-grow">
                <img alt="Featured Event" className="absolute inset-0 w-full h-full object-cover" src={featuredEvent.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="inline-block bg-tertiary/90 text-on-primary px-4 py-1.5 rounded-full font-label-sm text-sm mb-4 backdrop-blur-sm shadow-sm">Featured Event</span>
                    <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-3 text-glass">{featuredEvent.title}</h2>
                    <p className="font-body-md text-white/90 text-lg mb-4">{featuredEvent.description}</p>
                    <div className="flex items-center gap-4 text-white/90 font-label-sm">
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[18px] text-tertiary-container">calendar_today</span>
                        <span>{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[18px] text-tertiary-container">location_on</span>
                        <span>{featuredEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <button className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:bg-secondary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-secondary/20">
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right Column: News & Events Vertical List */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 xl:col-span-3 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="font-headline-lg text-2xl text-primary">Latest Updates</h3>
              <button className="text-tertiary hover:text-tertiary-container transition-colors font-label-sm text-sm uppercase tracking-wider flex items-center gap-1">
                View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-6 lg:overflow-y-auto lg:max-h-[600px] hide-scrollbar lg:pr-2 pb-4">
              {newsAndEvents.map((item) => (
                <article key={item.id} className="glass-panel rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-md group border border-outline-variant/30 relative">
                  
                  {/* Event Type Badge - Top Right */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full font-label-sm text-xs uppercase tracking-wider shadow-md ${
                    item.type === 'Newsletter' ? 'bg-secondary-container text-on-secondary-container' : 
                    item.type === 'News' ? 'bg-primary text-white' : 
                    'bg-tertiary text-white'
                  }`}>
                    {item.type}
                  </div>

                  <div className={`h-40 relative overflow-hidden ${item.icon ? 'bg-surface-variant flex items-center justify-center' : ''}`}>
                    {item.image ? (
                      <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} />
                    ) : (
                      <div className="text-center p-md">
                        <span className="material-symbols-outlined text-[40px] text-tertiary mb-2 opacity-80">{item.icon}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow bg-surface/80">
                    <div className="text-primary font-label-sm text-xs mb-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {item.date}
                    </div>
                    <h4 className="font-headline-md text-lg text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2">{item.description}</p>
                    <a className="inline-flex items-center gap-1 text-tertiary font-label-sm text-xs uppercase tracking-wider hover:text-tertiary-container transition-colors mt-auto" href="#">
                      {item.linkText} <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
}
