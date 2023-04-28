import React from 'react';
import styles from './Footer.module.css';
import Images from '../../constants/images';

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
                <a className={styles.footer_links} href="#"
                //   ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
                ></a>
              </li>
              <li>
                <a className={styles.footer_links} href="#"
                //   ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                ></a>
              </li>
              <li>
                <a className={styles.footer_links} href="#"
                //   ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
            </ul>
  
            <p className={styles.copyright}>
              {/* Copyright &copy; <span className={styles.year}>2027</span> by Engelmann Development. All rights reserved. */}
            </p>
          </div>
          <div className={styles.address_col}>
            <p className={styles.footer_heading}>Contact us</p>
            <address className={styles.contacts}>
              <p className={styles.adress}>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className={styles.footer_links} href="tel:415-201-6370">415-201-6370</a
                ><br />
                <a className={styles.footer_links} href="mailto:engelmann-development@Edev.com"
                  >engelmann-development@Edev.com</a>
              </p>
            </address>
          </div>
          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Account</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_links} href="#">Create account</a></li>
              <li><a className={styles.footer_links} href="#">Sign in</a></li>
              <li><a className={styles.footer_links} href="#">iOS app</a></li>
              <li><a className={styles.footer_links} href="#">Android app</a></li>
            </ul>
          </nav>
  
          <nav className={`${styles.nav_col}`+" margin_left_helper"}>
            <p className={styles.footer_heading}>Company</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_links} href="#">About Engelmann Development</a></li>
              <li><a className={styles.footer_links} href="#">For Business</a></li>
              <li><a className={styles.footer_links} href="#">Partners</a></li>
              <li><a className={styles.footer_links} href="#">Careers</a></li>
            </ul>
          </nav>
  
          <nav className={styles.nav_col}>
            <p className={styles.footer_heading}>Resources</p>
            <ul className={styles.footer_nav}>
              <li><a className={styles.footer_links} href="#">Recipe directory</a></li>
              <li><a className={styles.footer_links} href="#">Help center</a></li>
              <li><a className={styles.footer_links} href="#">Privacy & terms</a></li>
            </ul>
          </nav>
        </div>
    </>
  )
}