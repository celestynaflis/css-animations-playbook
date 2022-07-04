import React from 'react';
import styles from './SquareCircle.module.css';

const AnimationDirectionComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.square}>
                <div className={styles.circle}></div>
            </div>
        </div>
    );
};

export default AnimationDirectionComponent;
