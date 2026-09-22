"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Personalized dermatology",
    title: (
      <>
        Skin care built around your{" "}
        <em className="italic text-clay-400">actual</em> skin
      </>
    ),
    description:
      "No rushed ten-minute visits. Every treatment begins with a detailed consultation designed around your skin, lifestyle and goals.",
    primaryCta: "Book your consultation",
    secondaryCta: "Explore treatments",
    primaryLink: "#contact",
    secondaryLink: "#services",
    image: "/skin-1.png",
    stat: "14",
    statLabel: "yrs average dermatologist experience",
  },

  {
    eyebrow: "Advanced skin treatments",
    title: (
      <>
        Science-backed care for{" "}
        <em className="italic text-clay-400">healthier</em> skin
      </>
    ),
    description:
      "From acne and pigmentation to ageing concerns, our treatments combine clinical expertise with carefully selected technology.",
    primaryCta: "View treatments",
    secondaryCta: "Meet our dermatologists",
    primaryLink: "#services",
    secondaryLink: "#about",
    image: "/skin-2.png",
    stat: "98",
    statLabel: "percent patient satisfaction",
  },

  {
    eyebrow: "Your skin, understood",
    title: (
      <>
        A treatment plan made <em className="italic text-clay-400">for you</em>
      </>
    ),
    description:
      "We take the time to understand your concerns before recommending a treatment plan that fits your skin and your everyday life.",
    primaryCta: "Start your skin journey",
    secondaryCta: "Why Meridian",
    primaryLink: "#contact",
    secondaryLink: "#about",
    image: "/skin-3.png",
    stat: "1,860",
    statLabel: "patient reviews",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("top");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const scrollableHeight = hero.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);

      const index = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length),
      );

      setActiveSlide(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      id="top"
      className="relative bg-stone-50"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
       

        <div className="absolute inset-0">
          {slides.map((item, index) => (
            <div
              key={item.image}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                activeSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={item.image}
                alt="Dermatology treatment"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent lg:from-stone-50 lg:via-stone-50/65 lg:to-transparent" />
            </div>
          ))}
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 h-full">
          <div className="container-content grid h-full grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* LEFT CONTENT */}

            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow */}

              <div key={`eyebrow-${activeSlide}`} className="animate-fadeUp">
                <p className="text-[13px] font-medium text-clay-500 mb-5">
                  {slide.eyebrow}
                </p>
              </div>

              {/* Heading */}

              <h1
                key={`title-${activeSlide}`}
                className="animate-fadeUp font-display font-normal text-[2.75rem] leading-[1.06] tracking-tight text-pine-800 sm:text-6xl lg:text-[4.25rem] lg:leading-[1.03] max-w-xl"
              >
                {slide.title}
              </h1>

              {/* Description */}

              <p
                key={`description-${activeSlide}`}
                className="animate-fadeUp mt-7 max-w-md text-[17px] leading-relaxed text-pine-700/85"
              >
                {slide.description}
              </p>

              {/* CTA */}

              <div
                key={`cta-${activeSlide}`}
                className="animate-fadeUp mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href={slide.primaryLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-pine-700 px-7 py-3.5 text-[15px] text-stone-50 hover:bg-pine-800 transition-colors"
                >
                  {slide.primaryCta}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={slide.secondaryLink}
                  className="inline-flex items-center gap-2 rounded-full border border-pine-300 bg-stone-50/70 backdrop-blur px-7 py-3.5 text-[15px] text-pine-800 hover:border-pine-500 transition-colors"
                >
                  {slide.secondaryCta}
                </a>
              </div>

              {/* Reviews */}

              <div className="mt-12 flex items-center gap-5 border-t border-stone-300 pt-6 max-w-md">
                <div className="flex -space-x-3">
                  {["#c08a3e", "#5f7f64", "#8fa992", "#d69f60"].map((c, i) => (
                    <span
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-stone-50"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-clay-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <p className="text-[13px] text-pine-700/70 mt-0.5">
                    4.9 from 1,860 patient reviews
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE CARD ================= */}

            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[480px] rounded-[2rem] overflow-hidden shadow-2xl">
                {slides.map((item, index) => (
                  <img
                    key={item.image}
                    src={item.image}
                    alt="Skin treatment"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                      activeSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-pine-900/70 via-transparent to-transparent" />

                {/* Bottom info */}

                <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-stone-50/95 backdrop-blur p-5">
                  <p className="font-display text-2xl text-pine-800 leading-none">
                    {slide.stat}
                    <span className="text-clay-400">
                      {activeSlide === 0 ? "yrs" : activeSlide === 1 ? "%" : ""}
                    </span>
                  </p>

                  <p className="mt-1.5 text-[13px] text-pine-700/75 leading-snug">
                    {slide.statLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SLIDE INDICATOR ================= */}

          <div className="absolute bottom-8 right-8 flex items-center gap-3">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-10 bg-pine-700"
                    : "w-4 bg-pine-700/30"
                }`}
              />
            ))}
          </div>

          {/* Scroll indicator */}

          <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-pine-700/60">
            <span className="h-8 w-[1px] bg-pine-700/40" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
