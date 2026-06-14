"use client"

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";

import type { TargetAndTransition, Transition } from "motion/react";

interface ROUTE_ANIMATION extends LAYOUT_CHILD {
    animationKey? : string,
    initial? : TargetAndTransition, 
    animate? : TargetAndTransition,
    exit? : TargetAndTransition,
    transition? : Transition,
}

export const RouteAnimation = ({ children, animationKey, initial, animate, exit, transition = { duration : 0.25 } } : ROUTE_ANIMATION) => {
    
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div 
                key={animationKey ?? pathname}
                initial={{opacity : 0, ...initial}}
                animate={{opacity : 1, ...animate}}
                exit={{opacity : 0, ...exit}}
                transition={transition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
