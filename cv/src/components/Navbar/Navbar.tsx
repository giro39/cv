import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const { t } = useTranslation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 150;
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className={styles.navbar} aria-label="Navigation">
            <ul className={styles.navElements}>
                <div className={styles.links}>
                    <li>
                        <a onClick={() => scrollToSection("home")}>
                            {t("home")}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("experience")}>
                            {t("experience")}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("projects")}>
                            {t("projects")}
                        </a>
                    </li>
                </div>
                <LanguageSelector />
            </ul>
        </nav>
    );
};

export default Navbar;
