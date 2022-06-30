import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.element}></div>
            <div className={styles.loader}>
                <div className={styles.loaderBar} />
            </div>
        </div>
    );
};

export default Loader;
