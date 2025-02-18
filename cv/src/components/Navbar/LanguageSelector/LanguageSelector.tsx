import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSelector.module.scss";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [chosenLang, setChosenLang] = useState("en");

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        setChosenLang(i18n.language);
    }, [i18n.language]);

    return (
        <div className={styles.selector}>
            {chosenLang !== "pl" && (
                <button
                    className={styles.btnLang}
                    onClick={() => handleLanguageChange("pl")}
                    aria-label="Polski"
                >
                    <img src="pl.svg" alt="PL"></img>
                </button>
            )}
            {chosenLang !== "en" && (
                <button
                    className={styles.btnLang}
                    onClick={() => handleLanguageChange("en")}
                    aria-label="English"
                >
                    <img src="en.svg" alt="EN"></img>
                </button>
            )}
        </div>
    );
};

export default LanguageSelector;
