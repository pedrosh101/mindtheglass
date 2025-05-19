"use client";
import Pic1 from "../../public/Pic1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@radix-ui/react-dialog";

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
          ENA
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = Array.from(
    { length: 73 },
    (_, i) => `/pictures/pic (${i + 1}).jpg`
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative min-h-screen md:h-screen bg-[#355A3B] flex flex-col md:flex-row p-6 md:p-16 2xl:p-28 text-white text-sm 2xl:text-base"
    >
      {/* Coluna 1 - 2/3 */}
      <div className="w-full md:w-2/3 pr-0 md:pr-10 h-full flex flex-col justify-between space-y-4 md:space-y-6 mb-8 md:mb-0">
        <div>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            libero nisi. Donec vehicula mi sit amet ultricies ullamcorper. Duis
            nec urna sed nibh tempus eleifend venenatis non ipsum. Curabitur
            tincidunt erat sit amet quam ullamcorper consectetur. Nunc eget nunc
            eget sem facilisis molestie at vitae ante. Quisque vitae dui vitae
            turpis ornare sagittis feugiat quis libero. Donec bibendum feugiat
            nulla ac viverra. Pellentesque ac turpis vitae ligula efficitur
            convallis ut ut est. Donec porttitor, nisi in dignissim laoreet,
            arcu ipsum cursus tellus, vel accumsan eros ex a urna.
          </h1>
          <h1 className="mt-4">
            Pellentesque ac turpis vitae ligula efficitur convallis ut ut est.
            Donec porttitor, nisi in dignissim laoreet, arcu ipsum cursus
            tellus, vel accumsan eros ex a urna.
          </h1>
        </div>

        <div className="pt-4 space-y-1 border-t border-white/30">
          <p>R. Arthur Bispo do Rosário - Diamantina, MG 39100-000</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>038999183652</span>
          </div>
        </div>
      </div>

      {/* Coluna 2 - 1/3 */}
      <div className="w-full md:w-1/3 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {images.slice(0, 8).map((src, idx) => (
            <div
              key={idx}
              className="aspect-square h-24 2xl:h-40 w-full overflow-hidden cursor-pointer"
              onClick={() => {
                setCurrentSlide(idx);
                setIsOpen(true);
              }}
            >
              <img
                src={src}
                alt={`Imagem ${idx + 1}`}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-2 w-full text-black bg-green-100/50 border-none hover:bg-white/10"
          onClick={() => setIsOpen(true)}
        >
          Ver todas as fotos
        </Button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-11/12 max-w-4xl aspect-video bg-black/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Botões de navegação */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {/* Fechar modal */}
              <button
                className="absolute right-2 top-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Indicador de slide */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
