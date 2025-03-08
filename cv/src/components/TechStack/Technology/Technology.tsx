import { useTranslation } from "react-i18next";

import styles from "./Technology.module.scss";

interface TechnologyProps {
    logo: string;
    name: string;
}

const Technology: React.FC<TechnologyProps> = ({ logo, name }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.techContainer} aria-label="Single Technology">
            <img src={logo}></img>
            <p>{t(name)}</p>
        </div>
    );
};

export default Technology;
