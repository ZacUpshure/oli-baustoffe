import React from 'react';
import styles from './IconGrid.module.css';
import Images from '../../constants/images';

const IconGrid = () => {
  return (
    <div className="container grid grid--4-cols">
            <div className={styles.feature}>
                {/* <ion-icon className="feature-icon" name="checkmark-outline"></ion-icon> */}
                <img src={Images.icon1.src} alt="icon1" className={styles.feature_icon} />
                <p className={styles.feature_title}>Dachplatten</p>
                <p className={styles.feature_text}>
                </p>
            </div>
            <div className="feature">
                {/* <ion-icon className="feature-icon" name="checkmark-outline"></ion-icon> */}
                <img src={Images.icon2.src} alt="icon1" className={styles.feature_icon} />
                <p className={styles.feature_title}>Dachpaneele</p>
                <p className={styles.feature_text}>
                </p>
            </div>
            <div className="feature">
                {/* <ion-icon className="feature-icon" name="checkmark-outline"></ion-icon> */}
                <img src={Images.icon3.src} alt="icon2" className={styles.feature_icon} />
                <p className={styles.feature_title}>Trapezplatten</p>
                <p className={styles.feature_text}>
                </p>
            </div>
            <div className="feature">
                {/* <ion-icon className="feature-icon" name="checkmark-outline"></ion-icon> */}
                <img src={Images.icon4.src} alt="icon3" className={styles.feature_icon} />
                <p className={styles.feature_title}>Beratung</p>
                <p className={styles.feature_text}> 
                </p>
            </div> 
        </div>
  )
}

export default IconGrid