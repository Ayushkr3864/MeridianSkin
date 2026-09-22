
"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Treatments", href: "#services" },
  { label: "Why Meridian", href: "#why-us" },
  { label: "Results", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      // Close mobile menu when user scrolls
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu if screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0
        w-full
        z-[100]
        transition-all duration-300
        ${
          scrolled
            ? "bg-stone-50/95 backdrop-blur-md border-b border-stone-200"
            : "bg-stone-50/90 backdrop-blur-sm border-b border-transparent"
        }
      `}
    >
      {/* ================= HEADER ================= */}

      <div className="container-content w-full h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pine-700 text-stone-50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C12 2 6 8.5 6 14a6 6 0 0012 0c0-5.5-6-12-6-12z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="font-display text-xl tracking-tight text-pine-800">
            Meridian
            <span className="text-clay-400"> Skin</span>
          </span>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-[15px]
                text-pine-700/80
                hover:text-pine-800
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+911140001234"
            className="text-[15px] text-pine-700/80 hover:text-pine-800 transition-colors"
          >
            +91 11 4000 1234
          </a>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-pine-700
              px-5
              py-2.5
              text-[15px]
              text-stone-50
              hover:bg-pine-800
              transition-colors
            "
          >
            Book a consultation

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            lg:hidden
            inline-flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-pine-200
            text-pine-800
            bg-stone-50
          "
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          lg:hidden
          fixed
          top-20
          left-0
          right-0
          w-screen
          min-h-[calc(100dvh-5rem)]
          bg-stone-50
          z-[90]
          overflow-y-auto
          transition-transform
          duration-300
          ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="container-content w-full flex flex-col min-h-[calc(100dvh-5rem)] pt-8 pb-10">

          {/* Links */}

          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  border-b
                  border-stone-200
                  py-5
                  font-display
                  text-2xl
                  text-pine-800
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}

          <div className="mt-auto pt-10 flex flex-col gap-4">

            <a
              href="tel:+911140001234"
              className="text-[15px] text-pine-700/80"
            >
              +91 11 4000 1234
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-full
                bg-pine-700
                px-5
                py-3.5
                text-[15px]
                text-stone-50
              "
            >
              Book a consultation
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}

