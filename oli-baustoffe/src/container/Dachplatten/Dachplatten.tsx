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
                <h3 className={styles.heading_tertiary}>Dachplatten - Bestellen & Liefern lassen</h3>
                <p className={styles.step_description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                {/* <Lottie animationData={Images.isohouse} className={styles.lottie}/> */}
                <a href="#cta" className="btn btn--full margin-right-sm">Zum Sortiment</a>
            </div>
                {/* <!-- IMG-BOX --> */}
            <div className={styles.step_img_box}>
                <img src={Images.haus2} alt="test square" className={styles.step_img}/>  
            </div>
        </div>    
     </section>
  )
}

export default Dachplatten;