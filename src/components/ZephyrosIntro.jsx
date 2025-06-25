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
        }, 2000);

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
                                        transition={{ delay: 1 + idx * 0.1, duration: 1 }}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            }
                            const angle = (Math.random() - 0.5) * (Math.PI / 2); // -π/4 to π/4
                            const distance = 800 + Math.random() * 100; // base wind + gust

                            const x = Math.cos(angle) * distance;
                            const y = Math.sin(angle) * distance;

                            return (
                                <motion.span
                                    key={char + idx}
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{ x, y, opacity: 0 }}
                                    transition={{
                                        delay: .2 + idx * 0.1,
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
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
