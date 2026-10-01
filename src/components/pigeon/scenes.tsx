"use client";

// Comic-strip pigeon moments sprinkled into the existing layout. Each plays
// once when scrolled into view (click the stage to replay). Choreography is
// in globals.css under "Pigeon character"; animations sit paused on their
// first frame until the scene gets .is-playing.

import { Pigeon, useScene } from "./Pigeon";
import { Bagel, Burst, Car, Hydrant, PizzaSlice, PoopDrop, PoopSplat } from "./props";

// Stats card: the pigeon flies over and scores a direct hit on "$100M+".
export function DirectHit() {
  const { ref, playing, run, replay } = useScene(0.6);
  return (
    <div
      ref={ref}
      className={`pg-scene pg-hit ${playing ? "is-playing" : ""}`}
      onClick={replay}
      aria-hidden="true"
    >
      <div key={run} className="pg-hit-stage">
        <div className="pg-hit-flyer">
          <img src="/pigeon.png" alt="" className="pg-hit-bird" draggable={false} />
        </div>
        <PoopDrop className="pg-hit-drop" />
        <PoopSplat className="pg-hit-splat" />
        <Burst text="DIRECT HIT!" className="pg-hit-burst" />
      </div>
    </div>
  );
}

// Final CTA: a pizza slice sits by the button. The pigeon waddles in, pecks,
// yoinks it and bolts.
export function PizzaHeist() {
  const { ref, playing, run, replay } = useScene(0.6);
  return (
    <div
      ref={ref}
      className={`pg-scene pg-heist ${playing ? "is-playing" : ""}`}
      onClick={replay}
      aria-hidden="true"
    >
      <div key={run} className="pg-heist-stage">
        <PizzaSlice className="pg-heist-pizza" />
        <div className="pg-heist-walker">
          <div className="pg-heist-turn">
            <div className="pg-heist-body">
              <img src="/pigeon.png" alt="" draggable={false} />
              <PizzaSlice className="pg-heist-carried" />
            </div>
          </div>
        </div>
        <Burst text="YOINK!" className="pg-heist-burst" />
      </div>
    </div>
  );
}

// Footer: a car swerves to miss the pigeon and plows into a hydrant.
// The pigeon is unbothered.
export function FenderBender() {
  const { ref, playing, run, replay } = useScene(0.6);
  return (
    <div
      ref={ref}
      className={`pg-scene pg-crash ${playing ? "is-playing" : ""}`}
      onClick={replay}
      aria-hidden="true"
    >
      <div key={run} className="pg-crash-stage">
        <div className="pg-crash-road" />
        <div className="pg-crash-skid" />
        <div className="pg-crash-hydrant">
          <div className="pg-crash-water">
            <span />
            <span />
            <span />
            <span />
          </div>
          <Hydrant />
        </div>
        <div className="pg-crash-car">
          <Car />
          <span className="pg-crash-smoke" />
        </div>
        <Burst text="CRUNCH!" className="pg-crash-burst" />
        <div className="pg-crash-pigeon">
          <img src="/pigeon.png" alt="" draggable={false} />
          <span className="pg-bubble pg-crash-coo">coo.</span>
        </div>
      </div>
    </div>
  );
}

// 404: the pigeon is busy with a bagel.
export function BagelBreak() {
  return (
    <div className="pg-bagel">
      <Pigeon className="pg-bagel-pigeon" flip coo="Mine." />
      <Bagel className="pg-bagel-bagel" />
      <span className="pg-bagel-crumb" />
      <span className="pg-bagel-crumb" />
      <span className="pg-bagel-crumb" />
    </div>
  );
}
