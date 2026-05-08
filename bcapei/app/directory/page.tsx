import { AnimatedIcon } from "@/components/AnimatedIcon";

// Mock data array for easy integration with real data later
const directoryData = [
  {
    id: 1,
    name: "Arif Rahman",
    profession: "Senior Software Engineer",
    company: "TechNova Solutions",
    location: "Charlottetown",
    phone: "+1 (902) 555-0101",
    email: "arif.rahman@technova.ca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD19bCmHxkaNUL3qOmQFXXi-g_t6s6laGbgX8nCN2ojLTK8VDWfHzLri2chz9AjA8ageawUCl8ywSJHJ7bWR-007i4KcopKeKZ3oYqxrSSTPIbIm88VCBY6_O196K2TsP_i4XTDtTJ3hj8U6HdeysHmuyb5N0Ed0E56jF5yeF18ROTfarBGeQ0CL4asjY3rgET47p5-jXWHh2s4QSHF8kiJ5m89mdAmVefXeJGKtq6YkS9l7yIGO0fFcLiSgtG2ZoeXrtRkv1rVfpI",
  },
  {
    id: 2,
    name: "Nadia Chowdhury",
    profession: "Research Scientist",
    company: "UPEI",
    location: "Stratford",
    phone: "+1 (902) 555-0102",
    email: "n.chowdhury@upei.ca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBr2uDA27cppNwBhyFiXytIeHDCyCY7k8bFSQTpT5My1UKE7Nx2crcjbVrNxUYpdeuWZUWjdBpkGcsqd4ciBM19CZBn4DxTVZMrNuiutyBSlumBzgYRxypKX8Imb8KJQMQr3MKJ2q6O9o7XqmueSLBbmxhzsrrbGQZBkJqyDG7Y6THCLktjQm_cSb5iLcNuX03yRndFeTNYEu7lnxC7_nbWn0QIAipX13ex0suyJFGf8eOkqGSUxTrIAasj2fD_fEAaDp8fOB6-QI",
  },
  {
    id: 3,
    name: "Hasan Mahmud",
    profession: "Architectural Designer",
    company: "Island Design Studio",
    location: "Summerside",
    phone: "+1 (902) 555-0103",
    email: "hasan@islanddesign.studio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZhj14XjiWpVWVeG0Q_VzXm2wmVdPggdApzlw01uaWkzvWdvJqUijeRNDTkjg3iN6cxHGDXNXlvg09T6z_a2HydXAh0tXnJu-ppacTJQWis2xUp38QAEnGlNprLbu-sU56UsNr5eBH4j6vpf8_O1hrE6Ig81g95ojoCz_-7WHX8FCGxJxkM2bKjWexCSwmZJf_Abl-KlyEq21XDYtfllw2W1qWUZXC8PpBAO1ckBEUwzZNsvDYXEulEltRTNzwPVqW9tbHQS_DrCg",
  },
  {
    id: 4,
    name: "Farhana Begum",
    profession: "Healthcare Administrator",
    company: "Health PEI",
    location: "Charlottetown",
    phone: "+1 (902) 555-0104",
    email: "f.begum@healthpei.ca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgeCN1TL-h1giK1SqsXOAa82GpdLcH0wt0KVng8chpXLHTKSY0Si66SBZixxJP0qpe-Uf5gYxoYIF4LKQYJYylueD5Z70ZpGCIucuHY9xBnOrscrJGebqvXO6261vnYoSyyBjUcYd3H4h2nrHdrx-6IQV2sLFjV_E6B8kCCGTpkvFR2Vnc81kZwN4fHTtE8kOjmYc2vO5BUFwiUekvvzs5nz3Gz0720N9KfpfszzXdkdEhVTmIcHxU-ItOfJu8c31yiI7sC1lx7a8",
  }
];

export default function Directory() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background-image: radial-gradient(circle at 10% 20%, rgba(0, 80, 58, 0.03) 0%, transparent 20%),
                              radial-gradient(circle at 90% 80%, rgba(126, 39, 23, 0.03) 0%, transparent 20%);
            background-attachment: fixed;
        }
      `}} />

      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-xl pt-[140px]">
        {/* Header Section */}
        <header className="mb-lg text-center max-w-3xl mx-auto">
          {/* Animated community/network icon */}
          <div className="flex justify-center mb-4">
            <AnimatedIcon
              src="/icons/people.json"
              trigger="loop"
              size={88}
              speed={0.7}
            />
          </div>
          <h1 className="font-display-xl text-display-xl text-primary mb-sm">Community Directory</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Connect with professionals, creatives, and leaders within the PEI Bangladeshi diaspora. A network bridging deltaic roots with island life.</p>
        </header>

        {/* Advanced Filter & Search Bar */}
        <div className="glass-panel rounded-xl p-md mb-xl flex flex-col md:flex-row gap-gutter items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-lg text-body-md font-body-md focus:ring-2 focus:ring-secondary-container shadow-inner outline-none" placeholder="Search by name, profession, or company..." type="text"/>
          </div>
          <div className="flex gap-sm w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="px-4 py-2 rounded-full bg-secondary-container/20 text-on-surface font-label-sm text-label-sm whitespace-nowrap hover:bg-secondary-container/30 transition-colors border border-secondary-container/30">All Fields</button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-variant transition-colors border border-outline-variant/50">Technology</button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-variant transition-colors border border-outline-variant/50">Healthcare</button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-variant transition-colors border border-outline-variant/50">Academia</button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-variant transition-colors border border-outline-variant/50">Business</button>
          </div>
        </div>

        {/* Directory Grid (Bento/Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">
          {directoryData.map((person) => (
            <div key={person.id} className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="px-md pb-md relative flex flex-col items-center text-center pt-md">
                <img alt="Profile" className="w-24 h-24 rounded-full border-4 border-surface object-cover mb-4 shadow-md z-10" src={person.image} />
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">{person.name}</h3>
                <p className="font-body-md text-body-md text-primary mb-2">{person.profession}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-wider">{person.company} • {person.location}</p>
                <div className="flex flex-col gap-2 mb-6 text-on-surface-variant font-body-md text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">call</span>
                    <span>{person.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">mail</span>
                    <span>{person.email}</span>
                  </div>
                </div>
                <button className="w-full py-2 px-4 rounded border border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors font-label-sm text-label-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">link</span>
                  View LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Minimalist) */}
        <div className="mt-xl flex justify-center items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="font-label-sm text-label-sm text-on-surface font-semibold">1</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">2</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">3</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">...</span>
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </>
  );
}
