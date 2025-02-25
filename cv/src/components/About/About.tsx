import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.about} id="about">
            <div className={styles.content}>
                <h2>{t("about_comp.title")}</h2>
                <div className={styles.emailContact}>
                    <a href="mailto:jan.wysmolinski@gmail.com" target="_blank">
                        <p>{t("about_comp.contact")}</p>
                        <MdOutlineMailOutline />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
