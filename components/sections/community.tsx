"use client";

import { useEffect, useState } from "react";
import { SectionPill } from "../site-header";

const experiences = [
  [
    "01",
    "Open play",
    "Reserve a court, bring your people, and make the most of every hour.",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "02",
    "Match nights",
    "Low-pressure games, new faces, and just enough competition to keep it interesting.",
    "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "03",
    "Recovery lounge",
    "Slow down after the final point with coffee, conversation, and a view of the courts.",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  ],
];
const quotes = [
  [
    "“Horizon Courts has completely transformed my game. The coaches are amazing and the community is unbeatable!”",
    "Emma Roberts",
    "Advanced Player",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  ],
  [
    "“Great facilities, professional coaching, and a welcoming environment. Best tennis club I’ve ever been a part of.”",
    "James Wilson",
    "Club Member",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  ],
  [
    "“From casual play to tournaments, Horizon offers everything a tennis lover needs.”",
    "Sophia Martin",
    "Tournament Player",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  ],
];
const clubPillars = [
  [
    "02",
    "Saturday socials",
    "Drop in, meet new players, and stay for the after-match coffee.",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=500&q=85",
  ],
  [
    "03",
    "Junior mornings",
    "Playful sessions designed to build confidence, coordination, and community.",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=500&q=85",
  ],
  [
    "04",
    "Club tournaments",
    "Friendly competition with enough energy to keep you coming back.",
    "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=500&q=85",
  ],
];

export function ClubLife() {
  const [open, setOpen] = useState(0);
  return (
    <section id="club-life" className="section-wrap reveal">
      <div className="section-heading">
        <SectionPill>Club life</SectionPill>
        <h2>Find your rhythm beyond the baseline.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <article className="group shine relative min-h-[420px] overflow-hidden rounded-[24px] bg-[var(--deep)]">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
            src="club.png"
            alt="Players sharing a relaxed moment beside a tennis court"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-transparent to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
            <small className="text-xs uppercase tracking-[.16em] text-blue-200">
              01 / Social courts
            </small>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              Good games. Better company.
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
              Join weekly mixers, relaxed rallies, and a club culture that makes
              every visit feel easy.
            </p>
          </div>
        </article>
        <article className="glass-panel rounded-[24px] border border-[var(--border)] bg-[var(--ice)] px-6 py-2 shadow-[0_14px_40px_rgba(7,26,58,.05)]">
          {clubPillars.map((item, index) => (
            <div
              className="border-b border-[var(--border)] last:border-0"
              key={item[0]}
            >
              <button
                type="button"
                className="group flex min-h-[102px] w-full items-center gap-4 text-left"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${open === index ? "text-[var(--blue)]" : "text-[var(--gray)]"}`}
                >
                  {item[0]}
                </span>
                <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={item[3]}
                    alt=""
                    className={`h-full w-full object-cover transition duration-700 ${open === index ? "scale-110 saturate-100" : "scale-100 grayscale-[.15]"}`}
                  />
                  <span className="absolute inset-0 bg-[var(--navy)]/10" />
                </span>
                <span className="flex-1 text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {item[1]}
                </span>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)] text-lg transition duration-300 ${open === index ? "rotate-45 bg-[var(--blue)] text-white shadow-[0_6px_16px_rgba(22,119,255,.25)]" : "group-hover:border-[var(--blue)] group-hover:text-[var(--blue)]"}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${open === index ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <p className="min-h-0 overflow-hidden pl-[7.5rem] text-sm leading-6 text-[var(--gray)]">
                  {item[2]}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section-wrap reveal">
      <div className="section-heading">
        <SectionPill>The experience</SectionPill>
        <h2>Play hard. Reset well. Stay awhile.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {experiences.map((item, index) => (
          <article
            className="group shine relative min-h-[320px] overflow-hidden rounded-[24px] bg-[var(--deep)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(7,26,58,.14)]"
            key={item[0]}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
              src={item[3]}
              alt={`${item[1]} at Horizon Courts`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-[var(--deep)]/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <span className="text-sm font-semibold text-blue-200">
                {item[0]}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item[1]}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                  {item[2]}
                </p>
                <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[var(--navy)]">
                  ↗
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % quotes.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);
  const current = quotes[active];
  return (
    <section className="testimonials section-wrap reveal">
      <div className="section-heading centered">
        <SectionPill>Testimonials</SectionPill>
        <h2>What our members say</h2>
      </div>
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--white)] text-xl transition duration-300 hover:-translate-x-1 hover:border-[var(--blue)] hover:text-[var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
          onClick={() =>
            setActive((active - 1 + quotes.length) % quotes.length)
          }
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <article
          className="quote-card glass-panel shine testimonial-active min-h-[260px] flex-1 transition duration-500"
          key={current[1]}
        >
          <span>“</span>
          <p>{current[0]}</p>
          <div className="quote-person mt-6 flex items-center gap-3">
            <img
              src={current[3]}
              alt={current[1]}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
              loading="lazy"
            />
            <div className="flex flex-col">
              <strong>{current[1]}</strong>
              <small>{current[2]}</small>
            </div>
          </div>
        </article>
        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--white)] text-xl transition duration-300 hover:translate-x-1 hover:border-[var(--blue)] hover:text-[var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
          onClick={() => setActive((active + 1) % quotes.length)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
      <div
        className="mt-7 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Testimonials"
      >
        {quotes.map((quote, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Show testimonial from ${quote[1]}`}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--blue)] ${active === index ? "w-7 bg-[var(--blue)]" : "w-2 bg-[var(--border)] hover:bg-[var(--bright)]"}`}
            onClick={() => setActive(index)}
            key={quote[1]}
          />
        ))}
      </div>
    </section>
  );
}
