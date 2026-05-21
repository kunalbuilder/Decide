"use client";

import { ArrowUpRight, Check } from "lucide-react";

const checks = [
  "Content editing that holds attention",
  "Fast turnaround (24–48h)",
  "Cinematic cuts & motion",
  "Thumbnails & social formats",
  "2 revision rounds",
  "2 week delivery window",
];

const logos = ["Practo", "Audible", "Amazon", "TikTok", "Meesho"];

export default function AppDashboard() {
  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-5 pb-14 pt-8 text-[#1a1714] sm:px-8 lg:px-14">
      <nav className="mb-12 flex items-start justify-between md:mb-16">
        <div>
          <p className="text-2xl tracking-[-0.05em]">CTW</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/50">EDITORIAL VIDEO STUDIO</p>
        </div>
        <button className="rounded-full border border-black/20 px-6 py-2 text-xs tracking-[-0.02em] transition hover:bg-black hover:text-white">
          ARCHIVES
        </button>
      </nav>

      <section className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-black/45">FEATURED WORK</p>
          <h1 className="mb-10 text-[clamp(48px,8.2vw,112px)] leading-[0.9] tracking-[-0.06em]">
            <span className="font-[var(--font-instrument-sans)]">Clips that </span>
            <em className="font-[var(--font-instrument-serif)] not-italic italic">work.</em>
          </h1>

          <div className="relative h-[780px] w-full max-w-[450px]">
            <div className="absolute left-16 top-12 w-[360px] aspect-[9/16] rounded-[32px] bg-neutral-300/70 blur-[0.5px] shadow-[0_28px_40px_rgba(0,0,0,0.12)]" />
            <div className="absolute left-8 top-6 w-[380px] aspect-[9/16] -rotate-[3deg] rounded-[32px] bg-neutral-200/80 shadow-[0_38px_52px_rgba(0,0,0,0.14)]" />
            <article className="group absolute left-0 top-0 w-[400px] aspect-[9/16] overflow-hidden rounded-[34px] bg-[#23211f] shadow-[0_42px_80px_rgba(0,0,0,0.28)] transition duration-700 hover:-translate-y-1 hover:rotate-[1deg]">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" alt="Cinematic reel preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-[11px] tracking-[-0.02em] text-black">00:42</div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                <div>
                  <p className="text-2xl tracking-[-0.04em]">Founder Story Cut</p>
                  <p className="mt-1 text-sm text-white/70 tracking-[-0.03em]">Retention-first edit • Podcast reel</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/10 backdrop-blur">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </div>
        </div>

        <aside className="self-start rounded-[34px] border border-black/10 bg-[#f8f5f0]/95 p-6 shadow-[0_26px_60px_rgba(0,0,0,0.11)] backdrop-blur md:p-8">
          <div className="mb-8 inline-flex rounded-full bg-black/5 p-1 text-sm tracking-[-0.02em]">
            <span className="rounded-full bg-black px-4 py-1.5 text-white">Essential</span>
            <span className="px-4 py-1.5 text-black/50">ProMotion</span>
          </div>
          <p className="text-2xl tracking-[-0.04em]">CTW Essentials</p>
          <p className="mt-1 text-xs uppercase tracking-[0.17em] text-black/45">24–48hr</p>
          <div className="mt-4 flex items-end gap-2">
            <p className="text-6xl leading-none tracking-[-0.06em]">$350</p>
            <p className="pb-2 text-black/55">/month</p>
          </div>
          <div className="mt-4 inline-flex rounded-full bg-[#d8e5d2] px-4 py-1.5 text-xs text-[#31402d]">2–3 active edits / week</div>
          <p className="mt-5 text-sm leading-relaxed tracking-[-0.03em] text-black/65">For founders, creators & internet-native brands.</p>
          <ul className="mt-6 space-y-3 text-sm tracking-[-0.02em]">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-black/85">
                <Check className="mt-0.5 h-4 w-4 text-[#5f7f59]" />
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-8 w-full rounded-full bg-black px-5 py-3 text-sm tracking-[-0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition hover:opacity-90">
            Let’s make something watchable.
          </button>
          <button className="mt-3 w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm tracking-[-0.02em]">Book a Call</button>
        </aside>
      </section>

      <section className="relative mt-10 overflow-hidden rounded-[40px] border border-black/5 bg-gradient-to-b from-transparent via-[#edf3e9]/70 to-white px-6 pb-12 pt-28 sm:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-10 h-32 bg-[#dfe8d6]/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-16 left-10 h-20 w-28 rounded-full bg-[#cfddc6]/50 blur-2xl" />
        <div className="pointer-events-none absolute bottom-20 right-20 h-24 w-24 rounded-full bg-[#dbe9d2]/60 blur-2xl" />
        <div className="pointer-events-none absolute bottom-6 left-1/3 h-2 w-2 rounded-full bg-[#b8cdaa]" />
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-2 w-2 rounded-full bg-[#c8dab8]" />

        <div className="mx-auto max-w-4xl border-t border-black/10 pt-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-black/45">Trusted by teams at</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg tracking-[-0.03em] text-black/55">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-center -space-x-3">
            {["#e5d8cb", "#d5c5b8", "#cbb9aa", "#dbcdbf"].map((color) => (
              <span key={color} className="h-8 w-8 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
            ))}
          </div>
          <p className="mt-6 text-sm tracking-[-0.03em] text-black/65">1.2M+ views generated for creators, podcasts & brands</p>
        </div>
      </section>
    </main>
  );
}
