"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPSection<T extends HTMLElement>(
  options: {
    y?: number;
    x?: number;
    scale?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      x = 0,
      scale = 1,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      ease = "power3.out",
      start = "top 85%",
      childSelector,
    } = options;

    const targets = childSelector
      ? el.querySelectorAll(childSelector)
      : el;

    gsap.set(targets, { y, x, scale, opacity });

    const tween = gsap.to(targets, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger: childSelector ? stagger : 0,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

export function useGSAPFadeUp<T extends HTMLElement>(delay = 0) {
  return useGSAPSection<T>({ y: 80, duration: 1.2, delay, ease: "power3.out" });
}

export function useGSAPFadeIn<T extends HTMLElement>(delay = 0) {
  return useGSAPSection<T>({ y: 0, opacity: 0, duration: 1, delay, ease: "power2.out" });
}

export function useGSAPStaggerChildren<T extends HTMLElement>(
  childSelector: string,
  stagger = 0.12
) {
  return useGSAPSection<T>({
    y: 50,
    duration: 0.9,
    stagger,
    ease: "power3.out",
    childSelector,
  });
}

export function useGSAPScaleIn<T extends HTMLElement>(delay = 0) {
  return useGSAPSection<T>({
    scale: 0.92,
    y: 40,
    opacity: 0,
    duration: 1.2,
    delay,
    ease: "power3.out",
  });
}

export function useGSAPParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return ref;
}
