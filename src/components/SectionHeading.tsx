"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      gsap.set([eyebrowRef.current, titleRef.current, descRef.current], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      return;
    }

    const words = titleRef.current?.querySelectorAll(".word") ?? [];

    gsap.set([eyebrowRef.current, descRef.current], {
      opacity: 0,
      y: 12,
      filter: "blur(6px)",
    });
    gsap.set(words, { opacity: 0, y: 24, filter: "blur(10px)" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.to(eyebrowRef.current, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
          })
            .to(
              words,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.7,
                stagger: 0.06,
              },
              "-=0.2",
            )
            .to(
              descRef.current,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.5,
              },
              "-=0.4",
            );
          observer.disconnect();
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const words = title.split(" ");

  return (
    <div ref={containerRef} className="mb-14 max-w-2xl">
      <span
        ref={eyebrowRef}
        className="inline-block font-mono text-xs font-medium uppercase tracking-widest text-cyan-400/80"
      >
        {eyebrow}
      </span>
      <h2
        ref={titleRef}
        className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {words.map((w, i) => (
          <span key={i} className="word inline-block">
            {w}
            {i < words.length - 1 && " "}
          </span>
        ))}
      </h2>
      {description && (
        <p ref={descRef} className="mt-4 text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}
