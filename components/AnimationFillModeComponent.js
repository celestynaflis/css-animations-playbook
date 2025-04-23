import React from 'react';
import styles from './AnimationFillModeComponent.module.css';

const AnimationFillModeComponent = () => {
    return (
        <div className={styles.container}>
            <p className={`${styles.text} ${styles.forwards}`}>FORWARDS</p>
            <p className={`${styles.text} ${styles.backwards}`}>BACKWARDS</p>
        </div>
    );
};

export default AnimationFillModeComponent;
