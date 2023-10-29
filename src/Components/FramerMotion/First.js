
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className=" fixed top-0 left-0 right-0 origin-left bg-sky-500 h-24" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <div>さし</div> <div>さし</div> <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div  className="sticky">さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
      <div>さし</div>
    </>
  );
}

