import { AnimatePresence, motion } from "framer-motion"

export interface SlideTransitionProps {
    children: React.ReactNode,
    divKey: string
    type?: "slide" | "fade" | false
}

export function SlideTransition({ children, divKey, type = "fade" }: SlideTransitionProps) {
    if (type === false) {
        return <>{children}</>
    }

    if (type === "fade") {
        return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div key={divKey}
                initial={{ opacity: 0 }} transition={{
    
                    duration: 0.2,
                }} animate={{ opacity: 1 }} exit={{ opacity: 0}}>
                {children}
            </motion.div>
        </AnimatePresence>
    )}

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div key={divKey}
                initial={{ x: "-100%" }} transition={{
                    bounce: 0.15,
                    duration: 0.75,
                }} animate={{ x: 0 }} exit={{ x: "100%" }}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}