import styles from "./Technology.module.scss";

interface TechnologyProps {
    logo: string;
    name: string;
}

const Technology: React.FC<TechnologyProps> = ({ logo, name }) => {
    return (
        <div className={styles.techContainer} aria-label="Single Technology">
            <img src={logo}></img>
            <p>{name}</p>
        </div>
    );
};

export default Technology;
