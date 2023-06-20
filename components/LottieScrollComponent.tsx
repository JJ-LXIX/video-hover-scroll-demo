"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/body.json";
import { useMotionValueEvent, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  scrollYProgress: any;
};

function LottieComponent({ scrollYProgress }: Props) {
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  }, []);

  const frames: any = useTransform(scrollYProgress, [0, 1], [0, 110], {
    clamp: false,
  });

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    console.log("Page Frames", frames.current);

    if (frames.current > 103) {
      lottieRef.current?.stop;
    } else if (lottieRef.current) {
      lottieRef.current.goToAndStop(frames.current, true);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ margin: "200px 0px 0px 0px" }}
      className="sticky top-0 h-screen bg-black"
    >
      <Lottie
        animationData={animationData}
        lottieRef={lottieRef}
        className="h-screen"
      />
    </motion.div>
  );
}

export default LottieComponent;
