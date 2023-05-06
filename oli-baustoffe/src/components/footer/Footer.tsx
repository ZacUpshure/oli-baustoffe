import React from 'react';
import styles from './Footer.module.css';
import Images from '../../constants/images';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
        {/* <div className='grid grid__footer container'> */}
        <div className={`${styles.grid} ${styles.grid__footer} ${styles.container}`}>
          <div className={styles.logo_col}>
            <a href="#" className={styles.footer_logo}>
              <img className={styles.logo} alt="Omnifood logo" src={Images.logo.src} />
            </a>
  
            <ul className={styles.social_links}>
              <li>
                <a className={styles.footer_link} href="#"
                //   ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
                ><AiFillTwitterCircle /></a>
              </li>
              <li>
                <a className={styles.footer_link} href="#"
                //   ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                ><AiFillFacebook /></a>
              </li>
              <li>
                <a className={styles.footer_link} href="#"
                //   ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                ><AiFillLinkedin /></a>
              </li>
            </ul>
  
            <p className={styles.copyright}>
              {/* Copyright &copy; <span className={styles.year}>2027</span> by Engelmann Development. All rights reserved. */}
            </p>
          </div>
          <div className={styles.address_col}>
            <p className={styles.footer_heading}>Kontakt</p>
            <address className={styles.contacts}>
              <p className={styles.adress}>
              Storkwinkel 5, 10711 Berlin
              </p>
              <p>
                <a className={styles.footer_link} href="tel:030-89060840">030-89060840</a
                ><br />
                <a className={styles.footer_link} href="info@olibaustoffe.de"
                  >info@olibaustoffe.de</a>
              </p>
            </address>
          </div>
          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Home</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_link} href="#">Entdecken</a></li>
              <li><a className={styles.footer_link} href="#">Gallerie</a></li>
              <li><a className={styles.footer_link} href="#">Kontakt</a></li>
              <li><a className={styles.footer_link} href="#">Auktionen</a></li>
            </ul>
          </nav>
  
          <nav className={`${styles.nav_col}`+" margin_left_helper"}>
            <p className={styles.footer_heading}>Firma</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_link} href="#">AGB</a></li>
              <li><a className={styles.footer_link} href="#">Impressum</a></li>
              <li><a className={styles.footer_link} href="#">Datenschutz</a></li>
              {/* <li><a className={styles.footer_links} href="#"></a></li> */}
            </ul>
          </nav>
  
          {/* <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Resources</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_links} href="#">Recipe directory</a></li>
              <li><a className={styles.footer_links} href="#">Help center</a></li>
              <li><a className={styles.footer_links} href="#">Privacy & terms</a></li>
            </ul>
          </nav> */}
        </div>
    </>
  )
}