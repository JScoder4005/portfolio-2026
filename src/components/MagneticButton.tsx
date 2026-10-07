"use client";

import gsap from "gsap";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
};

export default function MagneticButton({
  children,
  className,
  strength = 0.4,
  as = "div",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    function onMove(e: PointerEvent) {
      if (!wrap || !inner) return;
      const rect = wrap.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(inner, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    function onLeave() {
      if (!inner) return;
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    }

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  const Tag = as;

  return (
    <Tag
      ref={wrapRef as never}
      className={`inline-block ${className ?? ""}`}
      style={{ willChange: "transform" }}
    >
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </Tag>
  );
}
