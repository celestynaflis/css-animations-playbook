import React from 'react';
import styles from './AnimationTimingFunctionComponent.module.css';

const AnimationTimingFunctionComponent = () => {
    return (
        <div className={styles.container}>
            <p className={styles.choosePropertyButton}>
                animation-timing-function: <strong>linear</strong>
            </p>
            <div className={`${styles.square} ${styles.linear}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-timing-function: <strong>ease</strong>
            </p>
            <div className={`${styles.square} ${styles.ease}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-timing-function:{' '}
                <strong>cubic-bezier(0.1, 1.0, 1.0, 0.3)</strong>
            </p>
            <div className={`${styles.square} ${styles.cubic}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-timing-function: <strong>steps(6, end)</strong>
            </p>
            <div className={`${styles.square} ${styles.steps}`}></div>
            <p className={styles.choosePropertyButton}>
                animation-timing-function: <strong>revert</strong>
            </p>
            <div className={`${styles.square} ${styles.revert}`}></div>
        </div>
    );
};

export default AnimationTimingFunctionComponent;
