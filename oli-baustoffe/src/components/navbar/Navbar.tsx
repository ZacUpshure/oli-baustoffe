import React from 'react';
// import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
        <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.a}`}>
                <a href='#' className='a'>Oli-Baustoffe</a>
            </div>
            <div className={styles.toggle__menu}>
                {/* <HiMenuAlt2 /> */}
            </div>
            <ul className={`${styles.nav__list} ${styles.li}`}>
                <div className={styles.close__menu}>
                    <IoMdClose />
                </div>
                <li className="nav__item li">
                    <a href="#" className="nav__link a">Home</a>
                </li>
                <li className="nav__item dropdown li">
                    <a href="#" className="nav__link a">Entdecken <i className='dropdown__icon'><IoIosArrowDown /></i></a>
                </li>
                <li className="nav__item li">
                    <a href="#" className="nav__link a">Gallerie</a>
                </li>
                <li className="nav__item li">
                    <a href="#" className="nav__link a">Kontakt</a>
                </li>
                <li className="nav__item li">
                    <a href="#" className="nav__link a">Auktionen</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;