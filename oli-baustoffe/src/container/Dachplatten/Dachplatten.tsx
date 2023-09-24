import React from 'react'
import styles from './Dachplatten.module.css';
import Images from '../../constants/images';
import Lottie from 'lottie-react';

const Dachplatten = () => {
  return (
    <section className={styles.Features_Section} id="features">
        <div className="container">
            {/* <span className="subheading">How it Works! </span>
             <h2 className="heading-secondary">Your daily dose of Black Squares in 3 simple steps.</h2> */}
        </div> 
        <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- STEP 01 --> */}
                {/* <!-- TEXT-BOX --> */}
            <div className={styles.step_text_box}>                 
                {/* <p className={styles.step_number}>01</p> */}
                <h3 className={styles.heading_tertiary}>Dachpfannen - Bestellen & Liefern lassen</h3>
                <p className={styles.step_description}>
                Hier handelt es sich um Dachpfannen von dem schwedischen Konzern SSAB. 
                Diese Dachplatten werden aus Stahlblechen hergestellt. 
                Die Lieferung erfolgt schnell. Holen Sie sich die exclusive Stahlbedachung in hochwertiger Qualität. 
                28 verschiedene Farben, stehen Ihnen zur Auswahl bereit. 
                Selbstverständlich werden die Dachpfannen auf die von Ihnen gewünschte Länge zugeschnitten. 
                Lassen Sie sich einfach und kostenfrei beraten. Olibaustoffe ist gerne für Sie da. 
                Ob Dachplatten des Typs, Bona, Pearl oder Hestia, Hera und Era. 
                Wir beraten Sie fachgerecht und kompetent. Baustoffe bzw. 
                Dachbaustoffe wie Dachpfannen sind schnell lieferbar!
                </p>
                {/* <Lottie animationData={Images.isohouse} className={styles.lottie}/> */}
                <a href="https://olibaustoffe.de/uebersicht/dachplatten_uebersicht" className="btn btn--full margin-right-sm">Zum Sortiment</a>
            </div>
                {/* <!-- IMG-BOX --> */}
            <div className={styles.step_img_box}>
                <img src={Images.haus2} alt="Haus mit braunen Dachpfannen" className={styles.step_img}/>  
            </div>
        </div>    
     </section>
  )
}

export default Dachplatten;