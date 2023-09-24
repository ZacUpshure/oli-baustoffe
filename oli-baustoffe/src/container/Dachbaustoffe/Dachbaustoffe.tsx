import React from 'react'
import styles from './Dachbaustoffe.module.css';
import Images from '../../constants/images';
import Lottie from 'lottie-react';

const Dachbaustoffe = () => {
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
                <img src={Images.dachbaustoffe} alt="Trapezblech Dach mit grauer Umgebung" className={styles.step_img}/>  
                {/* <img src={Images.bild} alt="test square" className={styles.step_img}/>   */}
            </div>
                {/* <!-- TEXT-BOX --> */}
            <div className={styles.step_text_box}>                 
                {/* <p className={styles.step_number}>01</p> */}
                <h3 className={styles.heading_tertiary}>Baustoffe für das Dach - Dachbaustoffe</h3>
                <p className={styles.step_description}>
                Baustoffe für das Dach werden schnell geliefert. 
                Hier führt Olibaustoffe ein gezieltes Angebot an Trapezbleche, Dachpfannen und Dachpappe sowie Dachpaneelen im Sortiment. 
                Baustoffe für das Dach, oder anders ausgedrückt, Dachbaustoffe erhalten Sie hier bei uns. 
                Sollten Sie für Ihre Dacharbeiten Baustoffe brauchen, Oli-Baustoffe aus Berlin liefert bundesweit.
                </p>
                <Lottie animationData={Images.house1} className={styles.lottie} alt='Sich bewegendes Haus mit Dachpfannen'/>
            </div>
        </div>    
     </section>
  )
}

export default Dachbaustoffe