import { useTranslation } from "react-i18next";

import styles from "./Home.module.scss";

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
                </div>
            </div>
            <div className={styles.links}></div>
        </main>
    );
};

export default Home;
