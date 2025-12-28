"use client";

import { motion, useScroll } from "motion/react";

export function ProgressBarScroll() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                originX: 0,
                zIndex: 100,
            }}
            className="bg-foreground"
        />
    );
}