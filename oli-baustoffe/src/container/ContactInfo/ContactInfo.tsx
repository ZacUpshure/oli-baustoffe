import React from 'react'
import styles from './ContactInfo.module.css';
import Images from '../../constants/images';
import Lottie from 'lottie-react';

const ContactInfo = () => {
  return (
    <section className={styles.CTA_Section} id="cta">
        <div className="container">
            <div className={styles.cta}>
            <div className={styles.cta_text_box}> 
                <h2 className="heading-secondary">
                    Get your first Square for Free!
                </h2>
                <p className={styles.cta_text}>                   
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam 
                </p>  
            </div>
                <div 
                className={styles.cta_img_box}
                role="img"
                aria-label="test"
                ></div>  
            </div>
        </div> 
     </section>
  )
}

export default ContactInfo