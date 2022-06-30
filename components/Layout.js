import React from 'react';
import styles from './Layout.module.css';
import LeftMenu from './LeftMenu';

const Layout = (props) => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.text}>{props.title}</p>
            </div>
            <LeftMenu />
        </>
    );
};

export default Layout;
