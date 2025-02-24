import { useState } from "react";
import { useTranslation } from "react-i18next";

import Technology from "./Technology/Technology";

import data from "./stack.ts";

import styles from "./TechStack.module.scss";

interface TechnologyType {
    name: string;
    icon: string;
    categories: string[];
}

const TechStack = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const categoryCounts = data.reduce<Record<string, number>>((acc, tech) => {
        tech.categories.forEach((category) => {
            acc[category] = (acc[category] || 0) + 1;
        });
        return acc;
    }, {});

    const categories = Array.from(
        new Set(data.flatMap((tech) => tech.categories))
    ).sort((a, b) =>
        a === "Other"
            ? 1
            : b === "Other"
            ? -1
            : categoryCounts[b] - categoryCounts[a] || a.localeCompare(b)
    );

    const filteredData = selectedCategory
        ? data.filter((tech) => tech.categories.includes(selectedCategory))
        : data;

    return (
        <section className={styles.stack} aria-label="TechStack">
            <h1 className={styles.stackTitle}>{t("my_tech_stack")}</h1>

            <div className={styles.filters}>
                <button
                    className={!selectedCategory ? styles.active : ""}
                    onClick={() => setSelectedCategory(null)}
                >
                    {t("all")}
                </button>
                {categories.map((categorie) => (
                    <button
                        className={
                            selectedCategory === categorie ? styles.active : ""
                        }
                        onClick={() => setSelectedCategory(categorie)}
                    >
                        {t(categorie)}
                    </button>
                ))}
            </div>
            <div className={styles.technologies}>
                {filteredData.map((tech: TechnologyType) => (
                    <Technology
                        key={tech.name}
                        logo={tech.icon}
                        name={tech.name}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
