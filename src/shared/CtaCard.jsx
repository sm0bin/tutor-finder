
import { motion } from "framer-motion"

const CtaCard = () => {
    return (

        <motion.div
            initial={{ opacity: 0.4, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            exit={{ opacity: 0.4, scale: 0.7 }}
        >
            Cta
        </motion.div>

    );
};

export default CtaCard;