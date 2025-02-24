import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import ExperienceItem from "./ExperienceItem/ExperienceItem";

import { experienceData } from "./experienceData";

import styles from "./Experience.module.scss";

const Experience = () => {
    const { i18n, t } = useTranslation();
    const [activeTab, setActiveTab] = useState<"studies" | "work">("studies");

    const language = i18n.language as "en" | "pl";
    const data = experienceData[activeTab][language];

    return (
        <section className={styles.experience}>
            <h1 className={styles.title}>{t("experience")}</h1>
            <div className={styles.tabs}>
                <button
                    className={activeTab === "studies" ? styles.active : ""}
                    onClick={() => setActiveTab("studies")}
                >
                    {t("tabs.studies")}
                </button>
                <button
                    className={activeTab === "work" ? styles.active : ""}
                    onClick={() => setActiveTab("work")}
                >
                    {t("tabs.work")}
                </button>
            </div>
            <div className={styles.experienceList}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.1 }}
                        className={styles.experienceContent}
                    >
                        {data.map((item, index) => (
                            <ExperienceItem key={index} {...item} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experience;
