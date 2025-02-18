import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector/LanguageSelector";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li>{t("home")}</li>
                <li>{t("experience")}</li>
                <li>{t("tech_stack")}</li>
                <li>{t("projects")}</li>
                <li>{t("about")}</li>
            </ul>
            <LanguageSelector />
        </nav>
    );
};

export default Navbar;
