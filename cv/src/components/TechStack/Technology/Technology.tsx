import { motion } from "framer-motion";
import styles from "./Technology.module.scss";

interface TechnologyProps {
    logo: string;
    name: string;
}

const Technology: React.FC<TechnologyProps> = ({ logo, name }) => {
    return (
        <motion.div
            initial={{ opacity: 0.25, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.techContainer}
            aria-label="Single Technology"
        >
            <img src={logo}></img>
            <p>{name}</p>
        </motion.div>
    );
};

export default Technology;
