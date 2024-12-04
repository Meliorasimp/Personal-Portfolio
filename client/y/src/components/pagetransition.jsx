
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        x: -200,
        y: 0,
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        x: 200,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    }
};

const PageTransition = ({ children }) => (
    <motion.div
     initial="initial"
     animate="enter"
     exit="exit"
     variants={variants}
    >
        {children}
    </motion.div>
);

export default PageTransition;