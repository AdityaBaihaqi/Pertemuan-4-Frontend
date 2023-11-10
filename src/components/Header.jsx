import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>News ID</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>About</li>
                        <li className={styles.navbar__item}>Service</li>
                        <li className={styles.navbar__item}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
