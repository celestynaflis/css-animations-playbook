import React from 'react';
import styles from './AnimationVsHover.module.css';

const AnimationVsHover = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.glassHover}></div>
                <p>Hover</p>
            </div>
            <div className={styles.column}>
                <div className={styles.glass}></div>
                <p>Animation</p>
            </div>
            <div className={styles.column}>
                <div className={styles.glassAnimationOnHover}></div>
                <p>Animation on hover</p>
            </div>
        </div>
    );
};

export default AnimationVsHover;
