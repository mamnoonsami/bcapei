import { AnimatedIcon } from "@/components/AnimatedIcon";

export default function Resources() {
  return (
    <>
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM29.627 0l.83.83-29.627 29.627-.83-.83L29.627 0zM59.627 29.627l.83.83-29.627 29.627-.83-.83L59.627 29.627z\\' fill=\\'%2300503a\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-[140px] pb-xl px-gutter max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <header className="mb-lg text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-sm justify-center md:justify-start">
            <AnimatedIcon
              src="/icons/book.json"
              trigger="loop"
              size={88}
              speed={0.7}
            />
            <h1 className="font-display-xl text-display-xl text-primary">Community Resources</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">A curated collection of guides, templates, and services to help you navigate life in Prince Edward Island while staying connected to your roots.</p>
        </header>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Category 1: Newcomer Guides */}
          <section className="col-span-1 md:col-span-8 bg-surface-container-low rounded-xl p-md border border-outline-variant/30 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center space-x-sm mb-md relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>flight_land</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Newcomer Guides</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm relative z-10">
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <h3 className="font-label-sm text-label-sm text-primary mb-xs">PDF Guide</h3>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-xs">First 30 Days in PEI</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">Essential checklist covering housing, SIN, healthcare registration, and banking.</p>
                <a className="inline-flex items-center text-tertiary hover:text-tertiary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">download</span> Download
                </a>
              </div>
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <h3 className="font-label-sm text-label-sm text-primary mb-xs">Article</h3>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-xs">Winter Preparedness</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">A comprehensive guide to dressing for, driving in, and enjoying PEI winters.</p>
                <a className="inline-flex items-center text-tertiary hover:text-tertiary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">open_in_new</span> Read Online
                </a>
              </div>
            </div>
          </section>

          {/* Category 2: Language Support */}
          <section className="col-span-1 md:col-span-4 bg-surface-container-low rounded-xl p-md border border-outline-variant/30 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center space-x-sm mb-md relative z-10">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>translate</span>
              </div>
              <h2 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface">Language Support</h2>
            </div>
            <div className="flex flex-col gap-sm relative z-10">
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow flex justify-between items-center">
                <div>
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">ESL Classes Info</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Schedule & Registration</p>
                </div>
                <a className="text-secondary hover:text-secondary-fixed-dim" href="#">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow flex justify-between items-center">
                <div>
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">Translation Services</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Official document translation</p>
                </div>
                <a className="text-secondary hover:text-secondary-fixed-dim" href="#">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>

          {/* Category 3: Local Services */}
          <section className="col-span-1 md:col-span-6 bg-surface-container-low rounded-xl p-md border border-outline-variant/30 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center space-x-sm mb-md relative z-10">
              <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Local Services in PEI</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm relative z-10">
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-xs">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">Healthcare Directory</h4>
                  <span className="material-symbols-outlined text-outline text-[20px]">local_hospital</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">Find family doctors, walk-in clinics, and pharmacies accepting new patients.</p>
                <a className="inline-flex items-center text-primary hover:text-primary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">arrow_forward</span> View Directory
                </a>
              </div>
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-xs">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">Halal Food Guide</h4>
                  <span className="material-symbols-outlined text-outline text-[20px]">restaurant</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">Locations of grocery stores and restaurants offering Halal options in Charlottetown.</p>
                <a className="inline-flex items-center text-primary hover:text-primary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">map</span> View Map
                </a>
              </div>
            </div>
          </section>

          {/* Category 4: Document Templates */}
          <section className="col-span-1 md:col-span-6 bg-surface-container-low rounded-xl p-md border border-outline-variant/30 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-outline/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center space-x-sm mb-md relative z-10">
              <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Document Templates</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm relative z-10">
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <h3 className="font-label-sm text-label-sm text-outline mb-xs">Word Template</h3>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-xs">Canadian Style Resume</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">A standard resume template formatted for the Canadian job market.</p>
                <a className="inline-flex items-center text-tertiary hover:text-tertiary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">download</span> Download
                </a>
              </div>
              <div className="bg-surface rounded-lg p-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
                <h3 className="font-label-sm text-label-sm text-outline mb-xs">PDF Form</h3>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-xs">Community Event Proposal</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-sm line-clamp-2">Form required to propose a new event or gathering to the community board.</p>
                <a className="inline-flex items-center text-tertiary hover:text-tertiary-container font-label-sm text-label-sm" href="#">
                  <span className="material-symbols-outlined text-[18px] mr-1">download</span> Download
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
