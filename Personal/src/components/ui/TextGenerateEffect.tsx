import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  children
}: {
  words: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const controls = useAnimation(); 
  const ref = useRef(null)
  const inView = useInView(ref); 

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2, duration: 2 },
      }));
    }
  }, [controls, inView]);

  const renderWords = () => {
    return (
      <motion.div ref={ref} className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 inline"
              custom={idx} 
              animate={controls}
            >
              {word}{" "}
            </motion.span>
          );
        })}
        {children}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
