import { useTranslation } from "react-i18next";

import ProjectItem from "./ProjectItem/ProjectItem";

import { projectsData } from "./projectsData";

import styles from "./Projects.module.scss";

const Projects = () => {
    const { i18n, t } = useTranslation();

    const language = i18n.language as "en" | "pl";
    const data = projectsData[language];

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>{t("projects")}</h2>
            <div className={styles.list}>
                {data.map((project) => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
