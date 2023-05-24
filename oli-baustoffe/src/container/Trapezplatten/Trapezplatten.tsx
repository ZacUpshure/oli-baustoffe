import React from 'react'
import styles from './Trapezplatten.module.css';
import Images from '../../constants/images';
import Lottie from 'lottie-react';

const Trapezplatten = () => {
  return (
    <section className={styles.Features_Section} id="features">
        <div className="container">
            {/* <span className="subheading">How it Works! </span>
             <h2 className="heading-secondary">Your daily dose of Black Squares in 3 simple steps.</h2> */}
        </div> 
        <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- STEP 01 --> */}
                {/* <!-- IMG-BOX --> */}
            <div className={styles.step_img_box}>
                <img src={Images.haus3} alt="test square" className={styles.step_img}/>  
            </div>
                {/* <!-- TEXT-BOX --> */}
            <div className={styles.step_text_box}>                 
                {/* <p className={styles.step_number}>01</p> */}
                <h3 className={styles.heading_tertiary}>Trapezplatten - bundesweit lieferbar</h3>
                <p className={styles.step_description}>
                Trapezplatten aus Schweden vom schwedischen Hüttenkonzern SSAB werden ebenso aus Stahlblechen hergestellt. 
                Sie Trapezplatten werden auf die von Ihnen gewünschten Maße zugeschnitten und schnell geliefert. 
                Alle Trapezplatten von unserem Baustoffhandel können auch als Fassadenplatten verlegt werden. 
                Nutzen Sie unseren telefonischen Support für eine kompetente Beratung und einfach sowie bequeme Bestellung.
                </p>
                <Lottie animationData={Images.delivery} className={styles.lottie}/>
            </div>
        </div>    
     </section>
  )
}

export default Trapezplatten;