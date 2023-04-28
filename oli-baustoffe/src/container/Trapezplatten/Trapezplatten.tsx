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
                <img src={Images.trapezplatten.src} alt="test square" className={styles.step_img}/>  
            </div>
                {/* <!-- TEXT-BOX --> */}
            <div className={styles.step_text_box}>                 
                {/* <p className={styles.step_number}>01</p> */}
                <h3 className={styles.heading_tertiary}>Trapezplatten - bundesweit lieferbar</h3>
                <p className={styles.step_description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                {/* <Lottie animationData={Images.house1} className={styles.lottie}/> */}
            </div>
        </div>    
     </section>
  )
}

export default Trapezplatten;