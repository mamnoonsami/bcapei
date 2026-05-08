import { AnimatedIcon } from "@/components/AnimatedIcon";

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

export default function Events() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .text-glass {
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}} />

      <main className="pt-[140px] pb-xl px-4 md:px-8 max-w-[1280px] mx-auto selection:bg-primary-container selection:text-on-primary-container">
        {/* Header Section */}
        <header className="mb-xl text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-gutter">
          <div className="max-w-2xl">
            {/* Animated calendar icon */}
            <div className="flex justify-center md:justify-start mb-4">
              <AnimatedIcon
                src="/icons/calendar.json"
                trigger="loop"
                size={88}
                speed={0.7}
              />
            </div>
            <h1 className="font-display-xl text-display-xl text-primary mb-sm">Chronicles & Gatherings</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Stay connected with the heartbeat of the PEI Bangladeshi diaspora. Discover upcoming cultural celebrations, community milestones, and stories that bridge our deltaic roots with island life.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="glass-panel text-tertiary border border-tertiary px-6 py-2 rounded-full font-label-sm uppercase tracking-wider hover:bg-tertiary/5 transition-colors">Filter by Event</button>
            <button className="glass-panel text-primary border border-primary px-6 py-2 rounded-full font-label-sm uppercase tracking-wider hover:bg-primary/5 transition-colors">Filter by News</button>
          </div>
        </header>

        {/* Featured Article (Bento Grid Style) */}
        <section className="mb-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter glass-panel rounded-[24px] overflow-hidden">
            <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-[500px]">
              <img alt="Featured Event" className="absolute inset-0 w-full h-full object-cover" src={featuredEvent.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg w-full">
                <span className="inline-block bg-tertiary/90 text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm mb-md backdrop-blur-sm">Featured Event</span>
                <h2 className="font-headline-lg text-headline-lg text-on-primary mb-sm text-glass">{featuredEvent.title}</h2>
                <p className="font-body-md text-body-md text-surface-container-highest max-w-2xl mb-md">{featuredEvent.description}</p>
                <div className="flex items-center gap-2 text-surface-container-highest font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>{featuredEvent.date}</span>
                  <span className="mx-2">•</span>
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>{featuredEvent.location}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 p-lg bg-surface-bright flex flex-col justify-center">
              <h3 className="font-headline-md text-headline-md text-primary mb-md">Reserve Your Spot</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Early registration helps us ensure enough traditional sweets and savory dishes for everyone. Don't miss out on the biggest cultural event of the year.</p>
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors shadow-md">Register Now</button>
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center py-md opacity-20 mb-xl">
          <span className="material-symbols-outlined text-[48px] text-primary">eco</span>
        </div>

        {/* News & Events Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {newsAndEvents.map((item) => (
              <article key={item.id} className="glass-panel rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className={`h-48 relative ${item.icon ? 'bg-surface-variant flex items-center justify-center' : ''}`}>
                  {item.image ? (
                    <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                  ) : (
                    <div className="text-center p-md">
                      <span className="material-symbols-outlined text-[48px] text-tertiary mb-2">{item.icon}</span>
                      <h4 className="font-headline-md text-[20px] text-primary">Summer Cricket League</h4>
                    </div>
                  )}
                  <div className={`absolute top-4 left-4 ${item.typeBadge} px-3 py-1 rounded-full font-label-sm text-label-sm shadow-sm`}>{item.type}</div>
                </div>
                <div className="p-md flex flex-col flex-grow bg-surface/50">
                  <div className="text-on-surface-variant font-label-sm text-label-sm mb-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> {item.date}
                  </div>
                  <h3 className="font-headline-md text-[24px] leading-[32px] text-primary mb-sm">{item.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow line-clamp-3">{item.description}</p>
                  <a className="inline-flex items-center gap-2 text-tertiary font-label-sm text-label-sm uppercase tracking-wider hover:text-tertiary-container transition-colors mt-auto" href="#">
                    {item.linkText} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-lg flex justify-center">
            <button className="bg-surface text-primary border border-primary/20 px-8 py-3 rounded-full font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-variant transition-colors shadow-sm">Load Older Articles</button>
          </div>
        </section>
      </main>
    </>
  );
}
