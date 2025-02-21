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

    const categories = Array.from(
        new Set(data.flatMap((tech) => tech.categories))
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
                        {categorie}
                    </button>
                ))}
            </div>

            {filteredData.map((tech: TechnologyType) => (
                <Technology key={tech.name} logo={tech.icon} name={tech.name} />
            ))}
        </section>
    );
};

export default TechStack;
