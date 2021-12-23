import React from 'react';
import styles from './Title.module.css';

export default function Title({location}) {
  return (
    <div>      
      <div className={styles.title}>
          <div className={styles.box}>
            <img src="./gear.png" alt="Gear" className={styles.img1} />
            <img src="./gear.png" alt="Gear" className={styles.img2} />
            <img src="./gear.png" alt="Gear" className={styles.img3} />
            <div className={styles.name}>
                Σurekα!
            </div>
          </div>
      </div>
      

    </div>
  );
}
