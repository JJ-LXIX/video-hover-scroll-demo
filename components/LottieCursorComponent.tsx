"use client";
import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "@/public/body.json";
import { motion } from "framer-motion";

type Props = {};

const options = {
  animationData: animationData,
};

function LottieComponent({}: Props) {
  const lottieObj = useLottie(options);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "seek",
        frames: [0, 105],
      },
    ],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      {Animation}
    </motion.div>
  );
}

export default LottieComponent;
