import React from 'react';
import styles from './LeftMenu.module.css';
import { useRouter } from 'next/router';

const LeftMenu = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <p className={styles.title}>CSS Animations Playbook</p>
            <p className={styles.link} onClick={() => router.push('/')}>
                Hello
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/loaderPage')}
            >
                Simple Linear Loader
            </p>
        </div>
    );
};

export default LeftMenu;
