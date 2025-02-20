import { useTranslation } from "react-i18next";

import styles from "./Home.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className={styles.main} aria-label="Home">
            <div className={styles.profile}>
                <img className={styles.photo} src="foto_1.jpg" alt="My photo" />
                <div className={styles.introduction}>
                    <h1 className={styles.name}>Jan Wysmoliński</h1>
                    <p className={styles.whoami}>{t("current_profession")}</p>
                    <p className={styles.whoami2}>{t("profession")}</p>
                    <div className={styles.links}>
                        <div className={styles.icon}>
                            <a href="" target="_blank">
                                <b>CV</b>
                            </a>
                        </div>

                        <a href="https://github.com/giro39" target="_blank">
                            <div className={styles.icon}>
                                <FaGithub />
                            </div>
                        </a>
                        <a href="https://github.com/giro39" target="_blank">
                            <div className={styles.icon}>
                                <FaLinkedin />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
