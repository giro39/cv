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
                full_stack_dev: "Full-stack Developer",
                devops_enth: "DevOps & Networking enthusiast",
            },
        },
        pl: {
            translation: {
                home: "Strona główna",
                experience: "Doświadczenie",
                tech_stack: "Technologie",
                projects: "Projekty",
                about: "O mnie",
                full_stack_dev: "Programista Full-stack",
                devops_enth: "Pasjonat DevOps i sieci komputerowych",
            },
        },
    },
});

export default i18n;
