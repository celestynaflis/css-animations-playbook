import React from 'react';
import styles from './BouncingDots.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={`${styles.dot} ${styles.dot1}`}></div>
                <div className={`${styles.dot} ${styles.dot2}`}></div>
                <div className={`${styles.dot} ${styles.dot3}`}></div>
                <div className={`${styles.dot} ${styles.dot4}`}></div>
            </div>
        </div>
    );
};

export default Loader;
