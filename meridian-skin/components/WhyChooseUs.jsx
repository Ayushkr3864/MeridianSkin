import { CheckCircle2 } from "lucide-react";

const POINTS = [
  {
    title: "Dermatologist-led, every time",
    description:
      "You see the same consulting dermatologist across your treatment course, not a rotating roster of technicians.",
  },
  {
    title: "Diagnosis before prescription",
    description:
      "Dermatoscopy and skin analysis inform every plan, so treatment addresses the cause rather than the symptom.",
  },
  {
    title: "Transparent, itemised pricing",
    description:
      "You receive a written treatment plan with costs before anything begins — no bundled packages you didn't ask for.",
  },
  {
    title: "Sterile, single-use protocols",
    description:
      "All injectables and energy-based devices follow single-use and hospital-grade sterilisation standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-pine-800 py-24 lg:py-32 text-stone-50">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="text-[13px] font-medium text-clay-300 mb-4">
            Why Meridian
          </p>
          <h2 className="font-display font-normal text-4xl lg:text-[2.75rem] leading-[1.1] max-w-md">
            A clinic built by dermatologists, for people who've outgrown
            guesswork
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone-50/70">
            Meridian was founded in 2011 by three dermatologists who wanted a
            clinic where consultations weren't capped at ten minutes. That
            hasn't changed as we've grown to three centres across Delhi NCR.
          </p>
          <div className="mt-9 flex items-center gap-4 rounded-2xl border border-stone-50/15 p-5 max-w-sm">
            <div className="font-display text-3xl text-clay-300">MBBS</div>
            <p className="text-[13px] leading-snug text-stone-50/65">
              MD-Dermatology, every consulting physician — verified
              registrations on request
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {POINTS.map((point) => (
            <div key={point.title} className="flex gap-4">
              <CheckCircle2
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-clay-300"
              />
              <div>
                <h3 className="text-[16px] font-medium text-stone-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-stone-50/65">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
