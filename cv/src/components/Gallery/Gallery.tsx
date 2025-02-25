import { useState } from "react";
import styles from "./Gallery.module.scss";

interface GalleryProps {
    images: string[];
    onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () =>
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose}>
                    ×
                </button>
                <button className={styles.prev} onClick={prevImage}>
                    {"<"}
                </button>
                <img
                    src={images[currentIndex]}
                    alt="Gallery"
                    className={styles.image}
                />
                <button className={styles.next} onClick={nextImage}>
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Gallery;
