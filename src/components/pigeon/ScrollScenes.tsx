"use client";

// Scroll-driven pigeon scenes (Alec's-cow style): each is a GSAP timeline
// scrubbed by ScrollTrigger, so the pigeon moves with the page and rewinds
// when you scroll back up. Positions are computed from the real layout
// (function values + invalidateOnRefresh) so they track resizes.
//
// Each scene renders a pointer-events-none stage that fills its section.
// Under prefers-reduced-motion nothing is built and the actors stay hidden.

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bagel, Burst, Clothespin, PizzaSlice, Shorts, Star, TaxiBack, TaxiFront } from "./props";

gsap.registerPlugin(ScrollTrigger);

type Build = (stage: HTMLDivElement) => void;

function useScrollScene(build: Build) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => build(stage));
    // Fonts/images can shift layout after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [build]);
  return ref;
}

// Rect of `el` relative to `stage`.
function box(el: Element, stage: Element) {
  const a = el.getBoundingClientRect();
  const s = stage.getBoundingClientRect();
  return { x: a.left - s.left, y: a.top - s.top, w: a.width, h: a.height, r: a.right - s.left, b: a.bottom - s.top };
}

// Rect of the text inside `el` (headings are full-width blocks, so the
// element box would put the "wall" past the end of the words).
function textBox(el: Element, stage: Element) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const a = range.getBoundingClientRect();
  const s = stage.getBoundingClientRect();
  return { x: a.left - s.left, y: a.top - s.top, w: a.width, h: a.height, r: a.right - s.left, b: a.bottom - s.top };
}

// The pigeon, layered so position, rotation, squash and facing can animate
// independently. `carry` sits at the beak and flips with the bird.
function Actor({ flip = false, carry, extra }: { flip?: boolean; carry?: ReactNode; extra?: ReactNode }) {
  return (
    <div className="pgs-actor">
      <div className="pgs-pose">
        <div className="pgs-squash">
          <div className={`pgs-facing ${flip ? "is-flipped" : ""}`}>
            <img src="/pigeon.png" alt="" className="pgs-bird" draggable={false} />
            {carry}
          </div>
        </div>
      </div>
      {extra}
    </div>
  );
}

const q = (stage: Element, sel: string) => stage.querySelector(sel) as HTMLElement;

/* 1. Homepage trust section: flies in with a pizza slice, smacks into the
      headline, drops the pizza and slides down seeing stars. */
const buildBonk: Build = (stage) => {
  const section = stage.parentElement!;
  const title = section.querySelector(".section-title")!;
  const actor = q(stage, ".pgs-actor");
  const pose = q(stage, ".pgs-pose");
  const squash = q(stage, ".pgs-squash");
  const carried = q(stage, ".pgs-carried");
  const loose = q(stage, ".pgs-loose");
  const burst = q(stage, ".pg-burst");
  const stars = q(stage, ".pgs-stars");

  const g = () => {
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    const P = actor.offsetWidth;
    const T = textBox(title, stage);
    // Facing left, the beak is ~3% in from the left edge of the bird.
    const ix = Math.min(T.r - P * 0.02, W - P * 0.9);
    const iy = T.y + T.h * 0.2 - P * 0.29;
    return { W, H, P, T, ix, iy, floor: H - P - 14 };
  };

  gsap.set(actor, { autoAlpha: 1 });
  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 45%",
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => (stage.dataset.state = self.progress < 0.55 ? "fly" : "dazed"),
      },
    })
    // approach: swoop in from the right, rising then diving at the headline
    .fromTo(actor, { x: () => g().W + 40, y: () => g().T.y - 150 }, { x: () => g().W * 0.82, y: () => g().T.y - 190, duration: 0.25, ease: "sine.out" }, 0)
    .to(actor, { x: () => g().ix, duration: 0.3 }, 0.25)
    .to(actor, { y: () => g().iy, duration: 0.3, ease: "sine.in" }, 0.25)
    // BONK: squash flat against the letters
    .to(squash, { scaleX: 0.55, scaleY: 1.18, transformOrigin: "0% 50%", duration: 0.03 }, 0.55)
    .to(squash, { scaleX: 1, scaleY: 1, duration: 0.05 }, 0.58)
    .set(carried, { autoAlpha: 0 }, 0.55)
    .fromTo(burst, { autoAlpha: 0, scale: 0.2, rotation: -16, x: () => g().ix - 80, y: () => g().iy - 70 }, { autoAlpha: 1, scale: 1, rotation: -4, duration: 0.04, ease: "back.out(3)" }, 0.55)
    .to(burst, { autoAlpha: 0, duration: 0.06 }, 0.8)
    // the pizza goes flying
    .fromTo(loose, { autoAlpha: 0, x: () => g().ix - 6, y: () => g().iy + g().P * 0.15, rotation: 0 }, { autoAlpha: 1, duration: 0.001 }, 0.55)
    // bounces right, or left when there's no room (narrow screens)
    .to(loose, { x: () => { const { ix, P, W } = g(); return ix + P * 1.4 + 40 < W ? ix + P * 1.4 : ix - P * 1.1; }, rotation: 720, duration: 0.3 }, 0.55)
    .to(loose, { y: () => g().iy - 80, duration: 0.09, ease: "power2.out" }, 0.55)
    .to(loose, { y: () => g().H - 46, duration: 0.21, ease: "power2.in" }, 0.64)
    // falls, tumbling, and lands in a heap
    .to(actor, { x: () => g().ix + 10, y: () => g().floor, duration: 0.24, ease: "power2.in" }, 0.6)
    .to(pose, { rotation: -372, duration: 0.24 }, 0.6)
    .to(squash, { scaleX: 1.18, scaleY: 0.8, transformOrigin: "50% 100%", duration: 0.03 }, 0.84)
    .to(squash, { scaleX: 1, scaleY: 1, duration: 0.05 }, 0.87)
    .fromTo(stars, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.04 }, 0.62)
    .to({}, { duration: 0.08 }, 0.92);
};

export function BonkScene() {
  const ref = useScrollScene(buildBonk);
  return (
    <div ref={ref} className="pgs-stage pgs-bonk" aria-hidden="true">
      <Actor
        flip
        carry={<PizzaSlice className="pgs-carried" />}
        extra={
          <div className="pgs-stars">
            <Star />
            <Star />
            <Star />
          </div>
        }
      />
      <PizzaSlice className="pgs-loose" />
      <Burst text="BONK!" />
    </div>
  );
}

/* 2. Homepage testimonials: a bagel is sitting on the headline. Not for long. */
const buildBagel: Build = (stage) => {
  const section = stage.parentElement!;
  const title = section.querySelector(".section-title")!;
  const actor = q(stage, ".pgs-actor");
  const pose = q(stage, ".pgs-pose");
  const resting = q(stage, ".pgs-resting");
  const carried = q(stage, ".pgs-carried");
  const bubble = q(stage, ".pgs-bubble");

  const g = () => {
    const W = stage.clientWidth;
    const P = actor.offsetWidth;
    const T = textBox(title, stage);
    const B = resting.getBoundingClientRect().width; // SVG: no offsetWidth
    const bx = Math.min(T.r - B * 0.9, W - B - 12);
    const by = T.y - B * 0.55 + 6;
    // beak (97%, 29% of the bird) meets the bagel
    return { W, P, T, bx, by, gx: bx + B * 0.25 - P * 0.97, gy: by + B * 0.12 - P * 0.29 };
  };

  gsap.set(resting, { x: () => g().bx, y: () => g().by });
  gsap.set(actor, { autoAlpha: 1 });
  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "center 30%",
        scrub: 0.8,
        invalidateOnRefresh: true,
        onRefresh: () => gsap.set(resting, { x: g().bx, y: g().by }),
        onUpdate: (self) => (stage.dataset.state = self.progress > 0.47 && self.progress < 0.62 ? "nom" : "fly"),
      },
    })
    .fromTo(actor, { x: () => -g().P - 60 }, { x: () => g().gx, duration: 0.45 }, 0)
    .fromTo(actor, { y: () => g().T.y - 260 }, { y: () => g().gy, duration: 0.45, ease: "sine.in" }, 0)
    .to(pose, { rotation: 16, duration: 0.03 }, 0.45)
    .to(pose, { rotation: -6, duration: 0.04 }, 0.48)
    .set(resting, { autoAlpha: 0 }, 0.48)
    .set(carried, { autoAlpha: 1 }, 0.48)
    .fromTo(bubble, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.04, ease: "back.out(2.5)" }, 0.49)
    .to(bubble, { autoAlpha: 0, duration: 0.05 }, 0.7)
    .to(actor, { x: () => g().W + 80, duration: 0.5, ease: "power1.in" }, 0.5)
    .to(actor, { y: () => g().T.y - 320, duration: 0.5, ease: "sine.out" }, 0.5);
};

export function BagelScene() {
  const ref = useScrollScene(buildBagel);
  return (
    <div ref={ref} className="pgs-stage pgs-bagelscene" aria-hidden="true">
      <Bagel className="pgs-resting" />
      <Actor
        carry={<Bagel className="pgs-carried" />}
        extra={<span className="pgs-bubble">mine.</span>}
      />
    </div>
  );
}

/* 3. Footer (every page): the pigeon drives a cab in and pulls up. */
const buildTaxi: Build = (stage) => {
  const footer = stage.closest("footer")!;
  const taxi = q(stage, ".pgs-taxi");
  const wheels = stage.querySelectorAll(".pgs-wheel");

  const g = () => {
    const W = stage.clientWidth;
    const Tw = taxi.offsetWidth;
    const from = -Tw - 30;
    const to = Math.min(W * 0.62 - Tw / 2, W - Tw - 10);
    const wheelD = Tw * 0.13;
    return { from, to, spin: ((to - from) / (Math.PI * wheelD)) * 360 };
  };

  gsap.set(taxi, { autoAlpha: 1 });
  gsap
    .timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) =>
          (stage.dataset.state = self.progress > 0.96 ? "parked" : self.progress > 0.02 ? "driving" : "idle"),
      },
    })
    .fromTo(taxi, { x: () => g().from }, { x: () => g().to, duration: 1 }, 0)
    .fromTo(wheels, { rotation: 0 }, { rotation: () => g().spin, transformOrigin: "50% 50%", duration: 1 }, 0);
};

export function TaxiScene() {
  const ref = useScrollScene(buildTaxi);
  return (
    <div ref={ref} className="pgs-stage pgs-taxiscene" aria-hidden="true">
      <div className="pgs-road" />
      <div className="pgs-taxi">
        <span className="pgs-exhaust" />
        <span className="pgs-exhaust" />
        <div className="pgs-taxi-body">
          <TaxiBack className="pgs-taxi-layer" />
          <img src="/pigeon.png" alt="" className="pgs-driver" draggable={false} />
          <TaxiFront className="pgs-taxi-layer" />
        </div>
        <span className="pgs-bubble pgs-taxi-bubble">Where to?</span>
      </div>
    </div>
  );
}

/* 4. Portfolio, birddogs section: swipes a pair of shorts off the line. */
const buildShorts: Build = (stage) => {
  const actor = q(stage, ".pgs-actor");
  const pose = q(stage, ".pgs-pose");
  const hanging = q(stage, ".pgs-hanging");
  const carried = q(stage, ".pgs-carried");
  const line = q(stage, ".pgs-line");

  const g = () => {
    const W = stage.clientWidth;
    const P = actor.offsetWidth;
    const S = box(hanging, stage);
    // beak grabs the waistband
    return { W, P, gx: S.x + S.w * 0.5 - P * 0.97, gy: S.y + 4 - P * 0.29 };
  };

  gsap.set(actor, { autoAlpha: 1 });
  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: stage.parentElement!,
        start: "top 70%",
        end: "top 5%",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    })
    .fromTo(actor, { x: () => -g().P - 60 }, { x: () => g().gx, duration: 0.45 }, 0)
    .fromTo(actor, { y: () => g().gy - 90 }, { y: () => g().gy, duration: 0.45, ease: "sine.in" }, 0)
    .to(pose, { rotation: 12, duration: 0.04 }, 0.45)
    .to(pose, { rotation: -8, duration: 0.05 }, 0.49)
    .set(hanging, { autoAlpha: 0 }, 0.47)
    .set(carried, { autoAlpha: 1 }, 0.47)
    // the line twangs
    .to(line, { scaleY: 1.6, duration: 0.03, transformOrigin: "50% 0%" }, 0.47)
    .to(line, { scaleY: 1, duration: 0.12, ease: "elastic.out(1, 0.3)" }, 0.5)
    .to(actor, { x: () => g().W + 100, duration: 0.53, ease: "power1.in" }, 0.47)
    .to(actor, { y: () => g().gy - 140, duration: 0.53, ease: "sine.out" }, 0.47);
};

export function ShortsScene() {
  const ref = useScrollScene(buildShorts);
  return (
    <div ref={ref} className="pgs-stage pgs-shortsscene" aria-hidden="true">
      <svg className="pgs-line" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 1 Q50 9 100 1" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="pgs-hanging">
        <Clothespin className="pgs-pin pgs-pin--l" />
        <Clothespin className="pgs-pin pgs-pin--r" />
        <Shorts />
      </div>
      <Actor carry={<Shorts className="pgs-carried" />} />
    </div>
  );
}
