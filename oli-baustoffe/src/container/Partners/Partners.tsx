import React from 'react'
import styles  from './Partners.module.css';
import Images from '../../constants/images';

const Partners = () => {
  return (
    <section className={styles.Partners_Section} id="partners">
        <div className="container">
                <h2 className={styles.heading_partners}>Our Partnership</h2> 
                <div className={styles.logos}>
                    <img src={Images.partnerOne.src} alt="test-square-logo"/> 
                    <img src={Images.partnerTwo.src} alt="test-square-logo"/> 
                    <img src={Images.partnerThree.src} alt="test-square-logo"/> 
                    <img src={Images.partnerFour.src} alt="test-square-logo"/> 
                    <img src={Images.partnerFive.src} alt="test-square-logo"/>  
                </div>
        </div>
    </section>
  )
}

export default Partners