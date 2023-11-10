import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>News Indonesia</h2>
                <p className={styles.footer__author}>
                    &copy;{new Date().getFullYear()} All Reserved by PeTIK Jombang
                </p>
            </footer>
        </div>
    );
}

export default Footer;
