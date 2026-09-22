
"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "Your first visit starts with a proper conversation. We understand your concerns, routine, lifestyle and what you want to change.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "Your dermatologist examines your skin carefully and identifies the underlying cause before recommending any treatment.",
  },
  {
    number: "03",
    title: "Personalize",
    description:
      "We build a treatment plan around your skin, your timeline and your goals — never around a pre-designed package.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Your progress is reviewed at every visit. Treatments are adjusted as your skin responds, so your plan evolves with you.",
  },
];

export default function HowMeridianWorks() {
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
      className="bg-pine-800 py-24 lg:py-32 overflow-hidden"
    >
      <div className="container-content">

        {/* HEADER */}
        <div
          className={`
            max-w-2xl
            mb-16
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
          <p className="text-[13px] font-medium text-clay-300 mb-4">
            How Meridian works
          </p>

          <h2 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-stone-50">
            Less guesswork.
            <br />
            <em className="text-clay-300 italic">
              More understanding.
            </em>
          </h2>

          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-50/65">
            Good skin care starts with understanding your skin. Our process
            is deliberately simple — listen, diagnose, personalize and
            keep reviewing.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* IMAGE */}
          <div
            className={`
              lg:col-span-5
              transition-all
              duration-1000
              ease-out
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }
            `}
          >
            <div className="relative h-[520px] lg:h-[680px] overflow-hidden rounded-[2.5rem]">

              <img
                src="how-meridian-works.png"
                alt="Dermatologist consulting with a patient"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-pine-900/10" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-7 left-7 right-7">

                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-50/60">
                  The Meridian approach
                </p>

                <p className="mt-2 max-w-sm font-display text-2xl leading-tight text-stone-50">
                  Every recommendation starts with understanding your skin.
                </p>

              </div>
            </div>
          </div>

          {/* STEPS */}
          <div
            className={`
              lg:col-span-7
              flex
              flex-col
              justify-center
              transition-all
              duration-1000
              delay-200
              ease-out
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }
            `}
          >
            <div className="divide-y divide-stone-50/15">

              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    py-8
                    lg:py-10
                    first:pt-0
                    last:pb-0
                  "
                >
                  <div className="flex gap-6 lg:gap-10">

                    {/* NUMBER */}
                    <div className="flex-shrink-0">

                      <span className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-stone-50/20
                        text-[12px]
                        text-stone-50/60
                        transition-all
                        duration-300
                        group-hover:border-clay-300
                        group-hover:text-clay-300
                      ">
                        {step.number}
                      </span>

                    </div>

                    {/* CONTENT */}
                    <div className="max-w-xl">

                      <h3 className="
                        font-display
                        text-2xl
                        lg:text-3xl
                        text-stone-50
                      ">
                        {step.title}
                      </h3>

                      <p className="
                        mt-3
                        max-w-lg
                        text-[14.5px]
                        leading-relaxed
                        text-stone-50/60
                      ">
                        {step.description}
                      </p>

                    </div>
                  </div>

                  {/* HOVER LINE */}
                  <div
                    className="
                      absolute
                      left-0
                      bottom-0
                      h-px
                      w-0
                      bg-clay-300
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-12">

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-stone-50
                  px-7
                  py-3.5
                  text-[15px]
                  text-pine-800
                  transition-all
                  duration-300
                  hover:bg-clay-300
                "
              >
                Start with a consultation

                <ArrowUpRight
                  size={17}
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

        {/* BOTTOM TRUST POINTS */}
        <div
          className={`
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-6
            border-t
            border-stone-50/15
            pt-8
            transition-all
            duration-700
            delay-500
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >

          <div className="flex items-center gap-3">
            <Check size={17} className="text-clay-300" />
            <span className="text-[13px] text-stone-50/65">
              Dermatologist-led care
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Check size={17} className="text-clay-300" />
            <span className="text-[13px] text-stone-50/65">
              No templated packages
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Check size={17} className="text-clay-300" />
            <span className="text-[13px] text-stone-50/65">
              Progress reviewed every visit
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

