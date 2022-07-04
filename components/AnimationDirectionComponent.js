import React from 'react';
import styles from './AnimationDirectionComponent.module.css';

const AnimationDirectionComponent = () => {
    return (
        <div className={styles.container}>
            <p className={styles.choosePropertyButton}>
                animation-direction: <strong>normal</strong>
            </p>
            <div className={`${styles.dot} ${styles.normal}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-direction: <strong>reverse</strong>
            </p>
            <div className={`${styles.dot} ${styles.reverse}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-direction: <strong>alternate</strong>
            </p>
            <div className={`${styles.dot} ${styles.alternate}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-direction: <strong>alternate-reverse</strong>
            </p>
            <div className={`${styles.dot} ${styles.alternateReverse}`}></div>
        </div>
    );
};

export default AnimationDirectionComponent;
