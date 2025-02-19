import { useTranslation } from "react-i18next";

import styles from "./Home.module.scss";

import { IoIosDocument } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className={styles.main} aria-label="Home">
            <div className={styles.profile}>
                <img className={styles.photo} src="foto_1.jpg" alt="My photo" />
                <div className={styles.introduction}>
                    <h1 className={styles.name}>Jan Wysmoliński</h1>
                    <p className={styles.whoami}>{t("full_stack_dev")}</p>
                    <p className={styles.whoami}>{t("devops_enth")}</p>
                    <div className={styles.links}>
                        <div className={styles.icon}>
                            <IoIosDocument />
                        </div>

                        <div className={styles.icon}>
                            <FaGithub />
                        </div>
                        <div className={styles.icon}>
                            <FaLinkedin />
                        </div>
                        <div className={styles.icon}>
                            <FaDiscord />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
