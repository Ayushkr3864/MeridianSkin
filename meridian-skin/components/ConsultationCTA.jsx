"use client";

import { ArrowUpRight, PhoneCall, Sparkles } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="bg-stone-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container-content">
        {/* Main CTA Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            sm:rounded-[2.5rem]
            bg-clay-400
            min-h-[520px]
            lg:min-h-[500px]
          "
        >
        

          <div className="absolute inset-0 pointer-events-none">
            {/* Large soft circle */}
            <div
              className="
                absolute
                -left-32
                -bottom-40
                w-[500px]
                h-[500px]
                rounded-full
                border
                border-stone-50/20
              "
            />

            {/* Second circle */}
            <div
              className="
                absolute
                -left-20
                -bottom-28
                w-[390px]
                h-[390px]
                rounded-full
                border
                border-stone-50/20
              "
            />

            {/* Third circle */}
            <div
              className="
                absolute
                -left-8
                -bottom-16
                w-[280px]
                h-[280px]
                rounded-full
                border
                border-stone-50/20
              "
            />

            {/* Soft filled circle */}
            <div
              className="
                absolute
                -left-24
                -top-24
                w-64
                h-64
                rounded-full
                bg-stone-50/10
                blur-[1px]
              "
            />

            {/* Decorative small circle */}
            <div
              className="
                absolute
                right-12
                top-10
                w-20
                h-20
                rounded-full
                border
                border-stone-50/20
                hidden sm:block
              "
            />

            {/* Decorative dot */}
            <div
              className="
                absolute
                right-28
                bottom-16
                w-3
                h-3
                rounded-full
                bg-stone-50/50
                hidden lg:block
              "
            />
          </div>


          <div
            className="
              relative
              z-10
              h-full
              min-h-[520px]
              lg:min-h-[500px]
              flex
              flex-col
              lg:flex-row
              lg:items-center
              justify-between
              gap-12
              px-7
              py-14
              sm:px-12
              sm:py-16
              lg:px-20
              lg:py-20
            "
          >
            {/* LEFT SIDE */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-50/15">
                  <Sparkles size={15} className="text-stone-50" />
                </span>

                <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-stone-50/80">
                  A thoughtful first step
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  font-display
                  font-normal
                  text-4xl
                  sm:text-5xl
                  lg:text-[3.6rem]
                  leading-[1.05]
                  tracking-tight
                  text-stone-50
                  max-w-2xl
                "
              >
                Start your journey
                <br className="hidden sm:block" />
                <span className="italic">with your skin.</span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-xl
                  text-[15px]
                  sm:text-base
                  leading-7
                  text-stone-50/80
                "
              >
                Your first consultation includes a complete skin assessment,
                personalised recommendations and a clear treatment plan — with
                no pressure to decide on the day.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >
                {/* Primary */}
                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-pine-800
                    px-7
                    py-4
                    text-[15px]
                    font-medium
                    text-stone-50
                    shadow-lg
                    shadow-pine-900/10
                    hover:bg-pine-900
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  Book a consultation
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

                {/* Secondary */}
                <a
                  href="tel:+911140001234"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-stone-50/40
                    px-7
                    py-4
                    text-[15px]
                    text-stone-50
                    hover:bg-stone-50/10
                    hover:border-stone-50/60
                    transition-all
                    duration-300
                  "
                >
                  <PhoneCall size={16} />
                  Call the clinic
                </a>
              </div>
            </div>

         

            <div
              className="
                relative
                hidden
                lg:flex
                w-[300px]
                h-[300px]
                shrink-0
                items-center
                justify-center
              "
            >
              {/* Outer ring */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-stone-50/20
                "
              />

              {/* Middle ring */}
              <div
                className="
                  absolute
                  inset-8
                  rounded-full
                  border
                  border-stone-50/25
                "
              />

              {/* Inner circle */}
              <div
                className="
                  absolute
                  inset-16
                  rounded-full
                  bg-stone-50/10
                  backdrop-blur-sm
                  border
                  border-stone-50/20
                "
              />

              {/* Center */}
              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  w-32
                  h-32
                  rounded-full
                  bg-stone-50
                  shadow-2xl
                "
              >
                <span className="font-display text-3xl text-pine-800">30</span>

                <span className="text-[11px] uppercase tracking-wider text-pine-700/60">
                  min consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
