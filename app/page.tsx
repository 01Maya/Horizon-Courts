"use client";

import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Memberships } from "@/components/sections/memberships";
import {
  ClubLife,
  Experience,
  Testimonials,
} from "@/components/sections/community";
import { Footer, Newsletter } from "@/components/sections/contact";

export default function Page() {
  const statsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".stat-number");
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => {
        const text = el.getAttribute("data-final") || el.textContent || "";
        el.textContent = text;
      });
      return;
    }

    const animateValue = (el: Element) => {
      const target = Number.parseFloat(el.getAttribute("data-final") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const start = 0;
      const duration = 1400;
      const startTime = performance.now();

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const value = Math.round(start + (target - start) * eased);
        el.textContent = `${value}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const onVisible = () => {
      elements.forEach((el) => animateValue(el));
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onVisible();
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <section ref={statsRef} className="stats section-wrap reveal">
          <h2>A few more facts about us in numbers</h2>
          <div className="stats-grid">
            {[
              ["12000+", "Hours of play annually", "+"],
              ["89", "Player Retention Rate", "%"],
              ["1200", "Active Members", "+"],
              ["125", "Annual Tournaments", "+"],
            ].map(([value, label, suffix]) => (
              <div key={label}>
                <strong
                  className="stat-number"
                  data-final={value}
                  data-suffix={suffix}
                >
                  {value}
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
        <Services />
        <Memberships />
        <ClubLife />
        <Experience />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
