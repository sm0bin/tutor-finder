
import { motion } from "framer-motion"

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.4, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            exit={{ opacity: 0.4, scale: 0.7 }}
            className="">
            <h2 className="font-bold text-center text-3xl mb-12">Discover What Others Have to Say</h2>

            <div>
                accordion
            </div>

        </motion.div>

    );
};

export default Testimonials;