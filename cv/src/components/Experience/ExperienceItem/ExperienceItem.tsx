import styles from "./ExperienceItem.module.scss";

interface ExperienceProps {
    date: string;
    title: string;
    position: string;
    description: string;
    logo: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({
    date,
    title,
    position,
    description,
    logo,
}) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.timeline}></div>
            <img src={logo} alt={`${title} logo`} className={styles.logo}></img>
            <div className={styles.details}>
                <span className={styles.date}>{date}</span>
                <h3>{title}</h3>
                <p className={styles.position}>{position}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;
