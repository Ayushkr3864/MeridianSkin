
"use client";

import {
  Sparkles,
  ScanFace,
  Syringe,
  Sun,
  Droplets,
  Flower2,
  ArrowUpRight,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: ScanFace,
    title: "Acne & Scar Therapy",
    description:
      "Medical-grade protocols combining topical treatment, extraction and laser resurfacing for active acne and old scarring.",
    image: "/images/services/acne.png",
  },
  {
    icon: Sparkles,
    title: "Chemical Peels",
    description:
      "Layered peel series calibrated to your skin's tolerance, used to even tone, refine texture and lift pigmentation.",
    image: "/images/services/peels.png",
  },
  {
    icon: Syringe,
    title: "Anti-Ageing & Fillers",
    description:
      "Botulinum toxin, dermal filler and skin-boosters administered by dermatologists, not technicians.",
    image: "/images/services/anti-ageing.png",
  },
  {
    icon: Sun,
    title: "Pigmentation Correction",
    description:
      "Diagnosis-led treatment for melasma, sun damage and post-inflammatory marks using targeted lasers and topicals.",
    image: "/images/services/pigmentation.png",
  },
  {
    icon: Droplets,
    title: "Hair & Scalp Care",
    description:
      "PRP therapy, scalp micro-needling and trichology consultations for thinning hair and scalp conditions.",
    image: "/images/services/hair.png",
  },
  {
    icon: Flower2,
    title: "Bridal & Event Prep",
    description:
      "A structured 6 to 12 week programme building toward a single event date, with a dermatologist tracking progress.",
    image: "/images/services/bridal.png",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-stone-50 py-24 lg:py-32"
    >
      <div className="container-content">

        {/* HEADER */}
        <div
          className={`
            max-w-lg
            mb-14
            transition-all
            duration-700
            ease-out
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <p className="text-[13px] font-medium text-clay-500 mb-4">
            Treatments
          </p>

          <h2 className="font-display font-normal text-4xl lg:text-5xl leading-[1.08] text-pine-800">
            Six areas of practice, one dermatologist for each visit
          </h2>

          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-pine-700/75">
            Every treatment plan is built in consultation and reviewed at
            each visit — nothing is templated to a package.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-[2rem]
                  bg-pine-800
                  shadow-sm
                  transition-all
                  duration-700
                  ease-out

                  hover:-translate-y-2
                  hover:shadow-2xl

                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }
                `}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >

                {/* BACKGROUND IMAGE */}

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-pine-900/10
                    via-pine-900/25
                    to-pine-900/95
                  "
                />

                {/* HOVER OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-pine-800/0
                    transition-colors
                    duration-500
                    group-hover:bg-pine-800/30
                  "
                />

                {/* CONTENT */}

                <div className="relative z-10 flex h-full flex-col justify-between p-7 lg:p-8">

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-stone-50/30
                      bg-stone-50/10
                      backdrop-blur-md
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-stone-50"
                    />
                  </div>

                  {/* TEXT */}

                  <div>
                    <h3
                      className="
                        font-display
                        text-2xl
                        leading-tight
                        text-stone-50
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-sm
                        text-[14px]
                        leading-relaxed
                        text-stone-50/80
                      "
                    >
                      {service.description}
                    </p>

                    {/* LINK */}

                    <a
                      href="#contact"
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-[14px]
                        text-stone-50
                        transition-all
                        duration-300
                        group-hover:gap-3
                      "
                    >
                      Learn more

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

