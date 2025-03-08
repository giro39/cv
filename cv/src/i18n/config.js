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
                Other: "Other",
                Graphics: "Graphics",
                Databases: "Databases",
                Mobile: "Mobile",
                Networking: "Network technologies and protocols",
                tabs: {
                    studies: "Education",
                    work: "Work",
                },
                about_comp: {
                    title: "Feel free to reach out for any questions or opportunities.",
                    contact: "My e-mail address",
                },
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
                profession:
                    "Programista full-stack zainteresowany DevOps i sieciami",
                my_tech_stack: "Technologie, z których korzystam",
                all: "Wszystkie",
                Other: "Inne",
                Graphics: "Grafika komputerowa",
                Databases: "Bazy danych",
                Mobile: "Aplikacje mobilne",
                Networking: "Technologie sieciowe i protokoły",
                tabs: {
                    studies: "Edukacja",
                    work: "Praca",
                },
                about_comp: {
                    title: "Zapraszam do kontaktu w sprawie współpracy lub dowolnej innej.",
                    contact: "Mój adres e-mail",
                },
            },
        },
    },
});

export default i18n;
