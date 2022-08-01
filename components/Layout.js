import React, { useState } from 'react';
import styles from './Layout.module.css';
import Hello from './Hello';
import Loader from './Loader';
import BouncingDots from './BouncingDots';
import SquareCircle from './SquareCircle';
import AnimationVsHover from './AnimationVsHover';
import AnimationTimingFunctionComponent from './AnimationTimingFunctionComponent';
import AnimationDirectionComponent from './AnimationDirectionComponent';
import AnimationFillModeComponent from './AnimationFillModeComponent';

const Layout = (props) => {
    const [displayedAnimation, setDisplayedAnimation] = useState(0);

    const displayAnimations = () => {
        switch (displayedAnimation) {
            case 0:
                return <Hello />;
            case 1:
                return <Loader />;
            case 2:
                return <BouncingDots />;
            case 3:
                return <SquareCircle />;
            case 4:
                return <AnimationVsHover />;
            case 5:
                return <AnimationTimingFunctionComponent />;
            case 6:
                return <AnimationDirectionComponent />;
            case 7:
                return <AnimationFillModeComponent />;
            default:
                return <Hello />;
        }
    };

    return (
        <>
            <div className={styles.container}>
                <p className={styles.text}>{props.title}</p>
            </div>
            <div className={` ${styles.menuContainer}`}>
                <p className={styles.title}>CSS Animations Playbook</p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(0)}
                >
                    Hello
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(1)}
                >
                    Simple Linear Loader
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(2)}
                >
                    Bouncing Dots
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(3)}
                >
                    Circle in Square
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(4)}
                >
                    Animation vs hover
                </p>
                <p className={styles.title}>
                    Playing around with animations properties
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(5)}
                >
                    animation-timing-function
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(6)}
                >
                    animation-direction
                </p>
                <p
                    className={styles.link}
                    onClick={() => setDisplayedAnimation(7)}
                >
                    animation-fill-mode
                </p>
            </div>
            {displayAnimations()}
        </>
    );
};

export default Layout;
