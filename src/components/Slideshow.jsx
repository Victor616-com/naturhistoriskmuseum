import { useState, useRef } from 'react';
import styles from "../styles/Slideshow.module.css";
import BtnLArrow from './buttons/BtnLArrow';
import BtnRArrow from './buttons/BtnRArrow';

const Slideshow = ({ items, renderItem, title }) => {
    const [currentOffset, setCurrentOffset] = useState(0);
    const slideRef = useRef(null);
    const cardRef = useRef(null);

    const gap = 38; // Same as CSS gap
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const scrollBy = () => {
        if (cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth;
            return cardWidth + gap;
        }
        return 0;
    };

    const nextSlide = () => {
        const moveBy = scrollBy();
        const maxOffset = (items.length * moveBy) - (slideRef.current?.offsetWidth || 0);
        setCurrentOffset(prev => Math.min(prev + moveBy, maxOffset));
    };

    const prevSlide = () => {
        const moveBy = scrollBy();
        setCurrentOffset(prev => Math.max(prev - moveBy, 0));
    };

const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide(); 
        }
    }
};

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <div className={styles.arrows}>
                    <div className={styles.btnL} onClick={prevSlide}>
                        <BtnLArrow />
                    </div>
                    <div className={styles.btnR} onClick={nextSlide}>
                        <BtnRArrow />
                    </div>
                </div>
            </div>

            <div
                className={styles.slidesWrapper}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={styles.slides}
                    ref={slideRef}
                    style={{ transform: `translateX(-${currentOffset}px)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            ref={index === 0 ? cardRef : null}
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
