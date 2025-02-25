import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "./ProjectItem.module.scss";

interface ProjectProps {
    name: string;
    description: string;
    link: string;
    technologies: string[];
    images: string[];
}

const ProjectItem: React.FC<ProjectProps> = ({
    name,
    description,
    link,
    technologies,
    images,
}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

    return (
        <div className={styles.project}>
            <div className={styles.information}>
                <div className={styles.nameAndDescription}>
                    <a href={link} target="_blank" className={styles.nameLink}>
                        <h2 className={styles.name}>{name}</h2>
                        <FaExternalLinkAlt className={styles.linkIcon} />
                    </a>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.techStack}>
                    {technologies.map((tech, index) => (
                        <div key={index} className={styles.tech}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            <img
                src={images[0]}
                alt={`${name} preview`}
                className={styles.preview}
                onClick={() => setIsGalleryOpen(true)}
            />
        </div>
    );
};

export default ProjectItem;
