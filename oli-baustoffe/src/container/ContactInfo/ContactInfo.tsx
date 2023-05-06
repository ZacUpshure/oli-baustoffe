import React from 'react'
import styles from './ContactInfo.module.css';
import Images from '../../constants/images';
import Lottie from 'lottie-react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const ContactInfo = () => {
  return (
    <section className={styles.CTA_Section} id="cta">
        <div className="container">
            <div className={styles.cta}>
            <div className={styles.cta_text_box}> 
                <h2 className="heading_secondary">
                    Kontaktiere uns!
                </h2>
                <p className={styles.cta_text}>                   
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam 
                </p>
                {/* <div>                
                    <table className={styles.table}>
                        <tr>
                            <td><AiOutlineHome /></td>
                            <td>Storkwinkel 5, 10711 Berlin</td>
                        </tr>
                        <tr>
                            <td><AiOutlinePhone /></td>
                            <td>030-89060840</td>
                        </tr>
                        <tr>
                            <td><AiOutlineMail /></td>
                            <td>info@olibaustoffe.de</td>
                        </tr>
                    </table>
                </div>  */}
                <ul className={styles.table}>
                    <li>
                        <span>
                            <AiOutlineHome />
                        </span>
                        <span>
                            <a href="#">Storkwinkel 5, 10711 Berlin</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <AiOutlinePhone />
                        </span>
                        <span>
                            <a href="#">030-89060840</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <AiOutlineMail />
                        </span>
                        <span>
                            <a href="#">info@olibaustoffe.de</a>
                        </span>
                    </li>
                </ul>
                <a href="#features" className="btn btn--outline">Anfragen </a> 
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