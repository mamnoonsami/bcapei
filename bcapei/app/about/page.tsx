import Image from "next/image";
import { AnimatedIcon } from "@/components/AnimatedIcon";

export default function About() {
  return (
    <>
      <main className="pt-[140px] pb-xl px-gutter md:px-lg max-w-container-max mx-auto leaf-pattern">
        {/* Hero Section */}
        <section className="mb-xl text-center">
          {/* Animated journey/community icon */}
          <div className="flex justify-center mb-4">
            <AnimatedIcon
              src="/icons/heart.json"
              trigger="loop"
              size={96}
              speed={0.7}
            />
          </div>
          <h1 className="font-display-xl text-display-xl text-primary mb-md">Our Journey</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Bridging the vibrant deltaic roots of Bangladesh with the serene island life of Prince Edward Island. A story of community, resilience, and growth.
          </p>
        </section>

        {/* Our Mission (Bento Grid) */}
        <section className="mb-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-8 glass-panel rounded-xl p-lg relative overflow-hidden">
              <img 
                alt="Mission Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN92PgSy2s6lShD1J28XudQJ9kGiTkJynGqM0vCqqKufpmmmsl1QP88Utz8FNPGdPA9_MBmFoqkNcGfR5V-nEULfiK4Sm7Yysvb7riUzVmJ2tUisV80qOq54ndzm1OC_gHwhfwVj_lx7bVhriMCyDuugffdEevnzk79G78EnKkir9K_Uuxc8uaokDVgj3LLgAG_WC6GvoFNZhqFhJZUmiFIvlMOFLDmDk4ngTe2-cah0U4Gn1HE8xw4sObRBEknKL8Amp7C4wYc"
              />
              <div className="relative z-10">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Our Mission</h2>
                <p className="font-body-lg text-body-lg text-on-surface mb-md max-w-[576px]">
                  To foster a welcoming, supportive, and culturally rich environment for all individuals of Bangladeshi heritage in PEI. We aim to integrate our rich traditions with the local Canadian culture, creating a harmonious and thriving community space.
                </p>
                <div className="flex gap-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">Community</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">Culture</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-4 glass-panel rounded-xl p-md flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-[64px] text-tertiary mb-base" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-xs">Unity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Growing stronger together.</p>
            </div>
          </div>
        </section>

        {/* The Community Leaf Divider */}
        <div className="flex justify-center mb-xl">
          <span className="material-symbols-outlined text-primary/30 text-[40px]">eco</span>
        </div>

        {/* Our History (Asymmetric Layout) */}
        <section className="mb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-md">Our History</h2>
              <div className="space-y-md">
                <div className="pl-md border-l-2 border-primary-container relative">
                  <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-headline-md text-headline-md text-primary-container text-lg">The Early Days</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    What started as a small gathering of families has blossomed into a robust network. We began by celebrating key cultural events in small living rooms, sharing food and stories of home.
                  </p>
                </div>
                <div className="pl-md border-l-2 border-primary-container relative">
                  <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-headline-md text-headline-md text-primary-container text-lg">Growing Roots</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    As more families arrived in PEI, our community expanded. We established formal support systems to help newcomers settle, bridging the gap between familiar traditions and island life.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-panel rounded-2xl p-sm">
                <img 
                  alt="History Gathering" 
                  className="rounded-xl w-full h-auto shadow-sm" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-WvgNQ6Jhz4HOlfifBpsSqa2Fx7M23zCrtJgrT5nbuAEpLGaM6TLAcc6VJ1BxGfq9q7aazcXgx-AAhQduwcuW69kz3aVjRunAOY0NVXHHS-0_SyM1Gm9gk0OSBtW1OGkxRqsIyz80aMaFshpZ6YuzR4EPo3uOhetsAbnHFoDYCqpza_okVaOcLGEmOOj0GaT57ojCjcU9a5bLSHUj9ZTnQuAH9tFuIqXkXTitTmfYbSc73ibFY6JfAyPgawTBuxYzLPemX9kOk_o"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
