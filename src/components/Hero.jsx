import React from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div>
                    <h2 className={styles.hero__title}>ISRAEL Ketar-Ketir 2 Musuh Bersatu, Hamas dan Hizbullah Lakukan Serangan Mematikan!</h2>
                    <p className={styles.hero__description}>
                    Serangan besar-besaran yang dilakukan Hamas ke Israel mendorong kelompok lain untuk memberikan dukungan ke Palestina. Salah satunya ialah pasukan pasukan Hizbullah yang berasal dari Lebanon. Keduanya merupakan musuh besar Israel. Sama-sama menjadi musuh besar Israel, lantas apa perbedaan Hamas dan Hizbullah? Hamas adalah kelompok terbesar di antara kelompok Muslim Palestina lainnya. Kelompok itu berdiri pada 1987 pada permulaan intifadha Palestina pertama melawan pendudukan Israel di Tepi Barat dan Jalur Gaza. Mereka membuat piagam piagam pendirian yang berkomitmen menghancurkan Israel.
                    </p>
                    <p className={styles.hero__description}>
                    Sementara Hizbullah adalah partai politik dan kelompok militan Muslim Syiah yang berbasis di Lebanon yang terbentuk pada 1982. Organisasi ini memiliki tujuan untuk melawan Israel dan mencari dukungan dari Republik Islam Iran. Sejauh ini, Hizbullah telah berkali-kali terlibat perang terbuka dengan Israel di antaranya perang 33 hari. Perang tersebut dipicu oleh keinginan Israel untuk mengambil alih senjata dan membebaskan dua milisinya yang ditangkap Hizbullah.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Hero;
