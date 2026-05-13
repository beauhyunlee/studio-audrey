import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function IntroButterfly() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0.15, 0.35], [0, 420]);

  // background fade
  const background = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    ["rgb(0,0,0)", "rgb(45,0,0)"]
  );

  return (
    <motion.section
      style={{ backgroundColor: background }}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <motion.img
        src="./public/butt.png"
        alt="Butterfly"
        style={{ x }}
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{
          opacity: 1,
          scale: [1, 1.015, 1],
          rotate: [0, 0.6, -0.6, 0],
          y: [0, -4, 0],
        }}
        transition={{
          opacity: { duration: 2 },
          scale: {
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="w-[260px] md:w-[340px] opacity-90 drop-shadow-[0_0_30px_rgba(196,105,77,0.35)]"
      />
    </motion.section>
  );
}