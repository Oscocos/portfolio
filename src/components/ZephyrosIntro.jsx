"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ZephyrosIntro({ onFinish, targetRef }) {
  const [show, setShow] = useState(true);
  const introZRef = useRef(null);
  const [targetPos, setTargetPos] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 3800);

    requestAnimationFrame(() => {
      if (targetRef?.current && introZRef?.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const originRect = introZRef.current.getBoundingClientRect();

        setTargetPos({
          x: targetRect.left - originRect.left,
          y: targetRect.top - originRect.top,
        });
      }
    });

    return () => clearTimeout(timer);
  }, [targetRef, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#71f2f5"
            className="w-12 h-12"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 400 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.path
              d="M16.7639 6.5C17.3132 5.88625 18.1115 5.5 19 5.5C20.6569 5.5 22 6.84315 22 8.5C22 10.1569 20.6569 11.5 19 11.5H13M6.7639 4C7.31322 3.38625 8.1115 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H2M10.7639 20C11.3132 20.6137 12.1115 21 13 21C14.6569 21 16 19.6569 16 18C16 16.3431 14.6569 15 13 15H2"
              stroke="#6fedf4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 400 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.svg>

          <div className="text-7xl font-bold text-[#0AFFED] font-masiva flex space-x-2">
            {"Zephyros".split("").map((char, idx) => {
              if (char === "Z") {
                return (
                  <motion.span
                    key={char + idx}
                    ref={introZRef}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={
                      targetPos
                        ? { x: targetPos.x, y: targetPos.y, scale: 0.6 }
                        : {}
                    }
                    transition={{ delay: 2.4, duration: 1.5 }}
                  >
                    {char}
                  </motion.span>
                );
              }

              const letterDuration = 0.15;
              const delay = 0.5 + 0.5 + idx * letterDuration;

              return (
                <motion.span
                  key={char + idx}
                  initial={{ x: 0, y: 0, opacity: 1, rotate: 0, skewX: 0 }}
                  animate={{
                    x: 150,
                    y: [0, -10, 10, -5, 5],       
                    opacity: [1, 0.8, 0.4, 0],    
                    rotate: [0, 5, -5, 10, 0],     
                    skewX: [0, 10, -10, 10, 0],    
                  }}
                  transition={{
                    delay,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
