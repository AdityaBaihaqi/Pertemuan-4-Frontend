import React from 'react';
import styles from "./Hello.module.css"

const Hello = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hello}>
                <div className={styles.hello__start}>
                    <img
                    className={styles.hello__image}
                    src="https://assets-studiohub.kompas.com/video2019/73f614858444241bddf143/1aa938675498324a475a64c8e05e7dd2/1aa938675498324a475a64c8e05e7dd2.jpg"
                    alt=""
                    />
                </div>
            </section>
        </div>
    );
}

export default Hello;
