"use client";

import { useState } from "react";
import { MapPin, Mail, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";

const CONCERNS = [
  "Acne & scarring",
  "Anti-ageing / fillers",
  "Pigmentation",
  "Hair & scalp",
  "Bridal prep",
  "Something else",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    concern: CONCERNS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please share your name and a phone number so we can reach you.");
      return;
    }
    setError("");
    // Frontend-only demo: no backend is wired up yet.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-stone-50 py-24 lg:py-32">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-[13px] font-medium text-clay-500 mb-4">
            Get in touch
          </p>
          <h2 className="font-display font-normal text-4xl leading-[1.1] text-pine-800 max-w-sm">
            Tell us what's on your mind, we'll take it from there
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-pine-700/75">
            Enquiries are usually answered within one business day by our
            patient coordination team.
          </p>

          <div className="mt-10 flex flex-col gap-6 border-t border-stone-200 pt-8">
            <div className="flex gap-4">
              <MapPin size={19} strokeWidth={1.5} className="mt-0.5 text-clay-400 shrink-0" />
              <div>
                <p className="text-[15px] text-pine-800">Meridian Skin Clinic</p>
                <p className="text-[14px] text-pine-700/70 mt-0.5">
                  14 Amrita Shergill Marg, New Delhi 110003
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={19} strokeWidth={1.5} className="mt-0.5 text-clay-400 shrink-0" />
              <div>
                <p className="text-[15px] text-pine-800">care@meridianskin.in</p>
                <p className="text-[14px] text-pine-700/70 mt-0.5">
                  For records requests and general enquiries
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={19} strokeWidth={1.5} className="mt-0.5 text-clay-400 shrink-0" />
              <div>
                <p className="text-[15px] text-pine-800">Mon – Sat, 10am – 7pm</p>
                <p className="text-[14px] text-pine-700/70 mt-0.5">
                  Closed Sundays and public holidays
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-100/50 p-7 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle2 size={32} strokeWidth={1.5} className="text-pine-600" />
                <h3 className="font-display text-2xl text-pine-800">
                  Thank you, {form.name.split(" ")[0]}
                </h3>
                <p className="text-[15px] text-pine-700/75 max-w-sm leading-relaxed">
                  We've noted your enquiry about{" "}
                  {form.concern.toLowerCase()}. A patient coordinator will
                  call you at {form.phone} within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", concern: CONCERNS[0], message: "" });
                  }}
                  className="mt-2 text-[14px] text-pine-800 underline underline-offset-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-[13px] text-pine-700/80 mb-1.5 block">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ananya Sharma"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-[15px] text-pine-800 placeholder:text-pine-700/35 focus:border-pine-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[13px] text-pine-700/80 mb-1.5 block">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="98xxxxxxxx"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-[15px] text-pine-800 placeholder:text-pine-700/35 focus:border-pine-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-[13px] text-pine-700/80 mb-1.5 block">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-[15px] text-pine-800 placeholder:text-pine-700/35 focus:border-pine-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="concern" className="text-[13px] text-pine-700/80 mb-1.5 block">
                    Primary concern
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-[15px] text-pine-800 focus:border-pine-500 outline-none transition-colors"
                  >
                    {CONCERNS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[13px] text-pine-700/80 mb-1.5 block">
                    Anything you'd like us to know
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you're experiencing and any past treatment"
                    className="w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-[15px] text-pine-800 placeholder:text-pine-700/35 focus:border-pine-500 outline-none transition-colors"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-[13.5px] text-clay-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-pine-700 px-7 py-3.5 text-[15px] text-stone-50 hover:bg-pine-800 transition-colors"
                >
                  Send enquiry
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <p className="text-[12.5px] text-pine-700/55">
                  This form is a frontend demo and isn't connected to a
                  backend yet — no data leaves your browser.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
