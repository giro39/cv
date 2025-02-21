import i18n from "i18next";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
        en: {
            translation: {
                home: "Home",
                experience: "Experience",
                tech_stack: "Tech Stack",
                projects: "Projects",
                about: "About me",
                current_profession: "3rd year computer science student",
                profession:
                    "Full-stack Developer, DevOps & Networking enthusiast",
                my_tech_stack: "My Tech Stack",
                all: "All",
            },
        },
        pl: {
            translation: {
                home: "Główna",
                experience: "Doświadczenie",
                tech_stack: "Technologie",
                projects: "Projekty",
                about: "O mnie",
                current_profession: "Student 3. roku informatyki",
                profession: "Programista full-stack uczący się DevOps i sieci",
                my_tech_stack: "Technologie, z których korzystam",
                all: "Wszystkie",
            },
        },
    },
});

export default i18n;
