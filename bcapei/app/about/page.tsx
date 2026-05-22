"use client";

import { useRef } from "react";
import Image from "next/image";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

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

const timelineLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const timelineRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      <main ref={containerRef} className="pb-xl bg-background overflow-hidden selection:bg-primary-container selection:text-on-primary-container relative">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 leaf-pattern opacity-50 pointer-events-none z-0" />

        {/* Hero Section */}
        <motion.section
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative pt-[180px] pb-16 px-gutter text-center z-10"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-4 relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <AnimatedIcon
                src="/icons/heart.json"
                trigger="loop"
                size={80}
                speed={0.7}
              />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block py-1 px-4 rounded-full bg-surface-container border border-outline-variant/30 text-primary font-label-sm tracking-widest uppercase mb-4 shadow-sm">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display-xl text-[36px] md:text-[48px] leading-tight text-on-surface mb-4">
              Bridging <span className="text-primary italic">Deltaic Roots</span> <br className="hidden md:block" /> with Island Life
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl font-light">
              A journey of community, resilience, and growth in Prince Edward Island.
            </motion.p>
          </motion.div>
        </motion.section>

        <div className="max-w-container-max mx-auto px-gutter relative z-20">

          {/* Our Mission (Redesigned Glassmorphic) */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={timelineLeft} className="order-2 lg:order-1 relative z-10">
                <h2 className="font-display-xl text-4xl md:text-5xl text-primary mb-12">Our Mission</h2>
                <div className="space-y-10">
                  <div className="pl-6 border-l-2 border-primary-container relative">
                    <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-headline-md text-2xl text-primary-container mb-3">Community First</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      To foster a welcoming, supportive, and culturally rich environment for all individuals of Bangladeshi heritage in PEI. We provide a space where everyone feels they belong.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-primary-container relative">
                    <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-headline-md text-2xl text-primary-container mb-3">Cultural Heritage</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      We aim to seamlessly weave our vibrant traditions into the beautiful tapestry of Canadian island life, celebrating our roots while embracing our new home.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-primary-container relative">
                    <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-headline-md text-2xl text-primary-container mb-3">Mutual Support</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      Building a legacy for future generations by lifting each other up, sharing resources, and growing stronger together as a united community.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={timelineRight} className="order-1 lg:order-2 w-full flex justify-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    alt="Mission Community" 
                    className="w-full h-auto object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN92PgSy2s6lShD1J28XudQJ9kGiTkJynGqM0vCqqKufpmmmsl1QP88Utz8FNPGdPA9_MBmFoqkNcGfR5V-nEULfiK4Sm7Yysvb7riUzVmJ2tUisV80qOq54ndzm1OC_gHwhfwVj_lx7bVhriMCyDuugffdEevnzk79G78EnKkir9K_Uuxc8uaokDVgj3LLgAG_WC6GvoFNZhqFhJZUmiFIvlMOFLDmDk4ngTe2-cah0U4Gn1HE8xw4sObRBEknKL8Amp7C4wYc"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Interactive Timeline for History */}
          <section className="mb-32 px-4 md:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display-xl text-4xl lg:text-5xl text-primary"
              >
                The Timeline
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-body-lg text-on-surface-variant mt-4"
              >
                How we planted our roots in the red soil of PEI.
              </motion.p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Center Line (Hidden on small screens) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 -translate-x-1/2" />

              {/* Timeline Item 1 */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24 gap-8 lg:gap-0 w-full"
              >
                <div className="flex-1 flex justify-center lg:justify-end lg:pr-16 w-full relative z-10 shrink-0">
                  <motion.div variants={timelineLeft} className="glass-panel p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-[450px] bg-surface border border-outline-variant/30">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-sm mb-4">The Beginning</span>
                    <h4 className="font-headline-md text-2xl text-on-surface mb-3">The Early Days</h4>
                    <p className="font-body-md text-on-surface-variant">
                      What started as a small gathering of families has blossomed into a robust network. We began by celebrating key cultural events in small living rooms, sharing food, music, and stories of home to keep our heritage alive.
                    </p>
                  </motion.div>
                </div>
                {/* Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-4 border-primary shadow-lg items-center justify-center z-20">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 flex justify-center lg:justify-start lg:pl-16 w-full shrink-0">
                  <motion.div variants={timelineRight} className="w-full max-w-[450px] h-64 lg:h-72 rounded-3xl overflow-hidden shadow-md">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-WvgNQ6Jhz4HOlfifBpsSqa2Fx7M23zCrtJgrT5nbuAEpLGaM6TLAcc6VJ1BxGfq9q7aazcXgx-AAhQduwcuW69kz3aVjRunAOY0NVXHHS-0_SyM1Gm9gk0OSBtW1OGkxRqsIyz80aMaFshpZ6YuzR4EPo3uOhetsAbnHFoDYCqpza_okVaOcLGEmOOj0GaT57ojCjcU9a5bLSHUj9ZTnQuAH9tFuIqXkXTitTmfYbSc73ibFY6JfAyPgawTBuxYzLPemX9kOk_o" alt="Early Gathering" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24 gap-8 lg:gap-0 w-full"
              >
                {/* Image on left for desktop */}
                <div className="flex-1 flex justify-center lg:justify-end lg:pr-16 w-full order-2 lg:order-1 shrink-0">
                  <motion.div variants={timelineLeft} className="w-full max-w-[450px] h-64 lg:h-72 rounded-3xl overflow-hidden shadow-md">
                    <img src="/gallery/picnic.png" alt="Community Picnic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                </div>
                {/* Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-4 border-secondary shadow-lg items-center justify-center z-20">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <div className="flex-1 flex justify-center lg:justify-start lg:pl-16 w-full order-1 lg:order-2 relative z-10 shrink-0">
                  <motion.div variants={timelineRight} className="glass-panel p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-[450px] bg-surface border border-outline-variant/30">
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-label-sm mb-4">Expansion</span>
                    <h4 className="font-headline-md text-2xl text-on-surface mb-3">Growing Roots</h4>
                    <p className="font-body-md text-on-surface-variant">
                      As more families and students arrived in PEI, our community expanded significantly. We established formal support systems to help newcomers settle, bridging the gap between familiar traditions and adapting to island life.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </section>
        </div>
      </main>
    </>
  );
}
