"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { profile, stats } from "@/lib/data";
import MagneticButton from "./MagneticButton";

const AuroraBackground = dynamic(() => import("./AuroraBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <AuroraBackground />
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to full stack opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gradient mt-3 text-xl font-medium sm:text-2xl"
        >
          {profile.title} — {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton strength={0.35}>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.35}>
            <Link
              href={profile.resumeUrl}
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Download résumé
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-gradient text-3xl font-semibold">{stat.value}</div>
              <div className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
