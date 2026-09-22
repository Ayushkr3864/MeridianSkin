
"use client";

const STATS = [
  {
    value: "22,000+",
    label: "Patients treated since 2011",
  },
  {
    value: "97%",
    label: "Would recommend to a friend",
  },
  {
    value: "14 yrs",
    label: "Average dermatologist experience",
  },
  {
    value: "6",
    label: "Board-certified specialists on staff",
  },
];

function StatItem({ stat, mobile = false }) {
  return (
    <div
      className={`
        flex-shrink-0
        ${mobile ? "w-[260px] px-6" : "px-2 lg:px-8"}
        py-8 lg:py-10
        border-stone-200
      `}
    >
      <p className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-pine-800 whitespace-nowrap">
        {stat.value}
      </p>

      <p className="mt-2 text-[14px] leading-snug text-pine-700/75 max-w-[18ch]">
        {stat.label}
      </p>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section
      id="stats"
      className="border-y border-stone-200 bg-stone-100/60 overflow-hidden"
    >
      
      <div className="hidden md:grid container-content grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`
              py-10 px-2 lg:px-8
              border-stone-200
              ${i !== STATS.length - 1 ? "border-r" : ""}
            `}
          >
            <p className="font-display text-4xl lg:text-[2.75rem] text-pine-800">
              {stat.value}
            </p>

            <p className="mt-2 text-[14px] leading-snug text-pine-700/75 max-w-[16ch]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      
      <div className="md:hidden relative">
        <div className="flex w-max animate-stats-scroll hover:[animation-play-state:paused]">
          
          {/* First set */}
          <div className="flex">
            {STATS.map((stat) => (
              <StatItem
                key={`first-${stat.label}`}
                stat={stat}
                mobile
              />
            ))}
          </div>

          
          <div className="flex">
            {STATS.map((stat) => (
              <StatItem
                key={`second-${stat.label}`}
                stat={stat}
                mobile
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
