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
                onClick={() => router.push('/loader-page')}
            >
                Simple Linear Loader
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/bouncing-dots-page')}
            >
                Bouncing Dots
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/square-circle')}
            >
                Circle in Square
            </p>
            <p className={styles.title}>
                Playing around with animations properties
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/animation-timing-function')}
            >
                animation-timing-function
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/animation-direction')}
            >
                animation-direction
            </p>
            <p
                className={styles.link}
                onClick={() => router.push('/animation-fill-mode')}
            >
                animation-fill-mode
            </p>
        </div>
    );
};

export default LeftMenu;
