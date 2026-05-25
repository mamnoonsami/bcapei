"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

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
  },
  {
    id: 5,
    name: "Tariq Islam",
    profession: "Marine Biologist",
    company: "Ocean Tech PEI",
    location: "Charlottetown",
    phone: "+1 (902) 555-0105",
    email: "tariq.islam@oceantech.ca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZhj14XjiWpVWVeG0Q_VzXm2wmVdPggdApzlw01uaWkzvWdvJqUijeRNDTkjg3iN6cxHGDXNXlvg09T6z_a2HydXAh0tXnJu-ppacTJQWis2xUp38QAEnGlNprLbu-sU56UsNr5eBH4j6vpf8_O1hrE6Ig81g95ojoCz_-7WHX8FCGxJxkM2bKjWexCSwmZJf_Abl-KlyEq21XDYtfllw2W1qWUZXC8PpBAO1ckBEUwzZNsvDYXEulEltRTNzwPVqW9tbHQS_DrCg",
  },
  {
    id: 6,
    name: "Rina Akter",
    profession: "Financial Advisor",
    company: "Island Wealth Management",
    location: "Cornwall",
    phone: "+1 (902) 555-0106",
    email: "rina.akter@islandwealth.ca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgeCN1TL-h1giK1SqsXOAa82GpdLcH0wt0KVng8chpXLHTKSY0Si66SBZixxJP0qpe-Uf5gYxoYIF4LKQYJYylueD5Z70ZpGCIucuHY9xBnOrscrJGebqvXO6261vnYoSyyBjUcYd3H4h2nrHdrx-6IQV2sLFjV_E6B8kCCGTpkvFR2Vnc81kZwN4fHTtE8kOjmYc2vO5BUFwiUekvvzs5nz3Gz0720N9KfpfszzXdkdEhVTmIcHxU-ItOfJu8c31yiI7sC1lx7a8",
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Directory() {
  const fullText = "Community Directory";
  const [displayText, setDisplayText] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    timer = setTimeout(() => {
      let currentIdx = 0;
      interval = setInterval(() => {
        setDisplayText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
        if (currentIdx >= fullText.length) {
          clearInterval(interval);
          setIsDoneTyping(true);
        }
      }, 70);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="flex-grow w-full py-xl pt-[180px] bg-background relative overflow-hidden min-h-screen">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 leaf-pattern opacity-30 pointer-events-none z-0" />

        <div className="w-full px-6 md:px-[10%] mx-auto relative z-10">
        {/* Header & Controls Section */}
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-12 mb-16">
          <motion.header
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="inline-block py-1 px-4 rounded-full bg-surface-container border border-outline-variant/30 text-primary font-label-sm tracking-widest uppercase mb-4 shadow-sm">
              Our People
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display-xl text-4xl md:text-5xl lg:text-6xl text-primary mb-6 flex items-center min-h-[1.2em] flex-wrap"
              aria-label="Community Directory"
            >
              {displayText}
              {!isDoneTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                  className="inline-block w-[3px] md:w-[4px] h-[0.85em] bg-primary ml-1 align-middle"
                />
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Connect with professionals, creatives, and leaders within the PEI Bangladeshi diaspora. A network bridging deltaic roots with island life.
            </motion.p>
          </motion.header>

          {/* Floating Search/Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center w-full xl:w-auto shadow-xl border border-white/40 bg-white/60"
          >
            <div className="relative w-full xl:w-80">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-white/80 border border-outline-variant/30 rounded-xl text-body-md font-body-md focus:ring-2 focus:ring-primary/50 shadow-inner outline-none transition-all" placeholder="Search members..." type="text"/>
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="px-5 py-2.5 rounded-xl bg-primary text-white font-label-sm text-label-sm whitespace-nowrap shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors">All Fields</button>
              <button className="px-5 py-2.5 rounded-xl bg-surface hover:bg-surface-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap border border-outline-variant/30 transition-colors shadow-sm">Technology</button>
              <button className="px-5 py-2.5 rounded-xl bg-surface hover:bg-surface-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap border border-outline-variant/30 transition-colors shadow-sm">Healthcare</button>
              <button className="px-5 py-2.5 rounded-xl bg-surface hover:bg-surface-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap border border-outline-variant/30 transition-colors shadow-sm">Academia</button>
            </div>
          </motion.div>
        </div>

        {/* Directory Grid (High Density) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 relative z-10"
        >
          {directoryData.map((person) => (
            <motion.div variants={fadeUp} key={person.id} className="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative bg-white/60 border border-white/50 shadow-lg">
              {/* Cover Pattern/Gradient */}
              <div className="h-24 w-full bg-gradient-to-r from-primary/20 to-tertiary/20 relative">
                <div className="absolute inset-0 leaf-pattern opacity-30"></div>
              </div>
              
              {/* Profile Picture */}
              <div className="px-6 relative flex flex-col items-center text-center -mt-12">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <img alt="Profile" className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg mb-4 bg-white" src={person.image} />
                  <div className="absolute bottom-5 right-0 w-4 h-4 bg-[#006a4e] rounded-full border-2 border-white shadow-sm"></div>
                </div>
                
                <h3 className="font-headline-md text-xl text-on-surface mb-1 group-hover:text-primary transition-colors">{person.name}</h3>
                <p className="font-body-md text-sm text-primary mb-2 font-medium">{person.profession}</p>
                <p className="font-label-sm text-[11px] text-on-surface-variant mb-6 uppercase tracking-wider bg-surface-variant/50 px-3 py-1 rounded-full">{person.company} • {person.location}</p>
                
                {/* Contact Icons */}
                <div className="flex items-center justify-center gap-3 mb-6 w-full">
                  <a href={`tel:${person.phone}`} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors tooltip-trigger" title={person.phone}>
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors tooltip-trigger" title={person.email}>
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </a>
                  <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-on-surface-variant hover:bg-[#0A66C2] hover:text-white transition-colors tooltip-trigger" title="LinkedIn">
                    <span className="material-symbols-outlined text-[18px]">link</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination (Minimalist) */}
        <div className="mt-20 flex justify-center items-center gap-4 relative z-10">
          <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-label-sm shadow-md">1</span>
          <span className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-on-surface-variant font-label-sm hover:bg-white cursor-pointer transition-colors">2</span>
          <span className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-on-surface-variant font-label-sm hover:bg-white cursor-pointer transition-colors">3</span>
          <span className="font-label-sm text-on-surface-variant tracking-widest">...</span>
          <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        </div>
      </main>
    </>
  );
}
