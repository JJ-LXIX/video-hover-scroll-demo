"use client";
import LottieCursorComponent from "@/components/LottieCursorComponent";
import LottieScrollComponent from "@/components/LottieScrollComponent";
import {
  useScroll,
  AnimatePresence,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll();
  let y = useTransform(scrollYProgress2, [0, 0.13], ["0%", "200%"]);
  let y2 = useTransform(scrollYProgress2, [0, 0.13], ["0%", "-1000%"]);

  let opacityH1 = useTransform(scrollYProgress2, [0.07, 0.11], [1, 0]);

  useMotionValueEvent(scrollYProgress2, "change", (latest) => {
    console.log("scrollYProgress", latest);
  });

  return (
    <main className="bg-black">
      <div className="h-[100vh] mb-1 flex justify-center items-center relative">
        <div className="flex justify-center items-center h-screen w-full">
          <motion.h1
            className="text-9xl text-white text-center tracking-tighter"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            style={{ y, opacity: opacityH1 }}
          >
            Video Scroll and Hover Demo
          </motion.h1>
        </div>

        <h2 className="text-white font-extralight text-4xl flex flex-col absolute right-10 bottom-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
            style={{ y: y2 }}
            viewport={{ once: true }}
          >
            L
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, delay: 0.8 },
            }}
            style={{ y: y2 }}
            viewport={{ once: true }}
          >
            X
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, delay: 1 },
            }}
            style={{ y: y2 }}
            viewport={{ once: true }}
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, delay: 1.2 },
            }}
            style={{ y: y2 }}
            viewport={{ once: true }}
          >
            X
          </motion.span>
        </h2>
      </div>

      {/* Lottie Scroll based */}
      <div className="h-[500vh]" ref={containerRef}>
        <AnimatePresence>
          <LottieScrollComponent scrollYProgress={scrollYProgress} />
        </AnimatePresence>
      </div>

      <div className="h-[20vh] flex justify-center items-center w-full">
        <h2 className="text-white text-4xl decoration-white underline underline-offset-4">
          Hover Over the Image Below!
        </h2>
      </div>
      {/* Lottie cursor based  */}
      <LottieCursorComponent />

      <div className="h-[10vh]"></div>
    </main>
  );
}
