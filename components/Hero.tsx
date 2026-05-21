import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import LightRays from "./ui/LightRays";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">

      {/* Grid background — z-0, NO solid background color here */}
      <div
        className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center z-0"
      >
        {/* This mask fades the grid edges but must NOT have a bg color */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* LightRays — above the grid, below the content */}
      <div className="absolute top-0 left-0 w-full h-screen z-[2] pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#6366F1"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Omar, a Mern Stack Developer based in Egypt.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;