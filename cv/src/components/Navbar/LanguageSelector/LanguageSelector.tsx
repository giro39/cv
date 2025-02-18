import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button
                onClick={() => handleLanguageChange("pl")}
                aria-label="Polski"
            >
                <img src="pl.svg" alt="PL"></img>
            </button>
            <button
                onClick={() => handleLanguageChange("en")}
                aria-label="English"
            >
                <img src="en.svg" alt="EN"></img>
            </button>
        </div>
    );
};

export default LanguageSelector;
