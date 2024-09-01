"use client";
import Image from "next/image";
import Pic1 from "../../public/images/Pic1.jpg";
import Pic2 from "../../public/images/Pic2.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={container}
      className="relative h-[200vh]"
      style={{
        backgroundImage: `url(${Pic1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

type SectionProps = {
  scrollYProgress: any;
};

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-neutral-300/40 text-[3.5vw] flex flex-col items-center justify-center pb-[10vh]"
    >
      <div className="flex flex-col items-center justify-center pt-24">
        <h1 className="sm:text-[11vw] text-7xl text-[#355A3B]/90 font-font1 tracking-wide select-none	">
          mindtheglass
        </h1>
        {/* <div className="relative w-full h-[10rem]">
          <Image
            src={Pic2}
            alt="image1"
            fill
            className="object-contain md:h-96 mt-6"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen bg-[#355A3B] flex justify-center items-center"
    >
      <div className="sm:w-2/5 px-6 space-y-4">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          libero nisi. Donec vehicula mi sit amet ultricies ullamcorper. Duis
          nec urna sed nibh tempus eleifend venenatis non ipsum. Curabitur
          tincidunt erat sit amet quam ullamcorper consectetur. Nunc eget nunc
          eget sem facilisis molestie at vitae ante. Quisque vitae dui vitae
          turpis ornare sagittis feugiat quis libero. Donec bibendum feugiat
          nulla ac viverra. Pellentesque ac turpis vitae ligula efficitur
          convallis ut ut est. Donec porttitor, nisi in dignissim laoreet, arcu
          ipsum cursus tellus, vel accumsan eros ex a urna.
        </h1>
        <h1>
          Mauris commodo at ante eget ultrices. Integer sit amet pretium purus,
          congue imperdiet turpis. Aenean non lacus orci. Vestibulum nec nulla
          augue. Vivamus vitae dapibus urna. Aenean vestibulum lorem ligula, ut
          fermentum nibh condimentum in. Donec varius interdum dolor, faucibus
          fringilla augue lobortis a. Duis euismod justo at odio fermentum, at
          volutpat metus vestibulum. Sed mi dolor, interdum eu convallis ut,
          vestibulum ac sapien. Etiam velit lectus, interdum sed erat sit amet,
          sagittis vestibulum eros. Phasellus imperdiet nec nulla bibendum
          pulvinar. Quisque dui turpis, faucibus non auctor vel, maximus at ex.
        </h1>
      </div>
    </motion.div>
  );
};
