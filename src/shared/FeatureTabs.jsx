
import { motion } from "framer-motion"

const FeatureTabs = () => {
    return (

        <motion.div
            initial={{ opacity: 0.4, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            exit={{ opacity: 0.4, scale: 0.7 }}
        >
            Features
        </motion.div>

    );
};

export default FeatureTabs;