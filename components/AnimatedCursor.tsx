"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frameId = 0;

    const render = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(var(--cursor-scale))`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(var(--cursor-scale))`;
      frameId = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest("a, button, input, textarea, select, [role='button']");
      dot.classList.toggle("is-hovering", Boolean(interactive));
      ring.classList.toggle("is-hovering", Boolean(interactive));
    };

    const handlePointerDown = () => {
      dot.classList.add("is-pressed");
      ring.classList.add("is-pressed");
    };

    const handlePointerUp = () => {
      dot.classList.remove("is-pressed");
      ring.classList.remove("is-pressed");
    };

    const handlePointerLeave = () => {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="animated-cursor-ring" aria-hidden="true">
        <span />
      </div>
      <div ref={dotRef} className="animated-cursor-dot" aria-hidden="true" />
    </>
  );
}
