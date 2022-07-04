import React from 'react';
import styles from './Hello.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <p className={styles.letter}>H</p>
                <p className={`${styles.letter} ${styles.e}`}>E</p>
                <p className={`${styles.letter} ${styles.l}`}>L</p>
                <p className={`${styles.letter} ${styles.l2}`}>L</p>
                <p className={`${styles.letter} ${styles.o}`}>O</p>
            </div>
        </div>
    );
};

export default Loader;
