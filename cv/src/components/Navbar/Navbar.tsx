import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className={styles.navbar} aria-label="Navigation">
            <ul className={styles.navElements}>
                <div className={styles.links}>
                    <li>
                        <a>{t("home")}</a>
                    </li>
                    <li>
                        <a>{t("projects")}</a>
                    </li>
                    <li>
                        <a>{t("about")}</a>
                    </li>
                </div>
                <LanguageSelector />
            </ul>
        </nav>
    );
};

export default Navbar;
