"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ZephyrosIntro({ onFinish, targetRef, initialDelay = 0.5 }) {
  const [show, setShow] = useState(true);
  const introZRef = useRef(null);
  const containerRef = useRef(null);
  const [targetPos, setTargetPos] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 2100 + initialDelay * 1000); // total show time

    requestAnimationFrame(() => {
      if (targetRef?.current && introZRef?.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const originRect = introZRef.current.getBoundingClientRect();
        setTargetPos({
          x: targetRect.left - originRect.left,
          y: 0,
        });
      }
    });

    return () => clearTimeout(timer);
  }, [targetRef, onFinish, initialDelay]);

  useGSAP(() => {
    const letters = gsap.utils.toArray(".intro-letter");
    const centerIndex = letters.length / 2 - 0.5;

    letters.forEach((el, i) => {
      const isZ = el.dataset.char === "Z";
      const offset = (i - centerIndex) * -20;

      
      gsap.to(el, {
        x: offset,
        duration: 0.3,
        delay: initialDelay + 1.5,
        ease: "power3.inOut",
      });

      gsap.to(el, {
        opacity: isZ ? 1 : 0,
        duration: 0.7,
        delay: initialDelay + 1.5,
        ease: "expo.out",
      });
    });

    if (introZRef.current && targetPos) {
      gsap.to(introZRef.current, {
        x: targetPos.x,
        y: 0,
        duration: 0.5,
        delay: initialDelay + 1.5,
        ease: "power2.inOut",
      });
    }
  }, { scope: containerRef, dependencies: [targetPos, initialDelay] });

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
            transition={{ duration: 2, ease: "easeInOut" }}
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
              transition={{ duration: 1.5, ease: "circOut" }}
            />
          </motion.svg>
          <div
            ref={containerRef}
            className="text-7xl font-bold text-[#0AFFED] font-masiva flex space-x-2"
          >
            {"Zephyros".split("").map((char, idx) => {
              const isZ = char === "Z";
              return (
                <span
                  key={char + idx}
                  ref={isZ ? introZRef : null}
                  data-char={char}
                  className="intro-letter inline-block"
                >
                  {char}
                </span>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
