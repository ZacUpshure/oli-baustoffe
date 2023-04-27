import React from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
        <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.a}`}>
                <a href='#' className={styles.a}>Oli-Baustoffe</a>
            </div>
            <ul className={`${styles.nav__list} ${styles.li}`}>
                <div className={styles.close__menu}>
                    <IoMdClose />
                </div>
                <li className={`${styles.nav__item} ${styles.li}`}>
                    <a href="#" className={`${styles.nav__link} ${styles.a}`}>Home</a>
                </li>
                <li className={`${styles.nav__item} ${styles.dropdown} ${styles.li}`}>
                    <a href="#" className={`${styles.nav__link} ${styles.a}`}>Entdecken <i className={styles.dropdown__icon}><IoIosArrowDown /></i>
                        <div className={`${styles.megamenu} ${styles.hide}`}>
                            <ul className={styles.content}>
                                <li className={`${styles.megamenu__item} ${styles.header__megamenu} ${styles.li}`}>Heading</li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Bona</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Perl</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hestia</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hera</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.content}>
                                <li className={`${styles.megamenu__item} ${styles.header__megamenu} ${styles.li}`}>Heading</li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Bona</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Perl</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hestia</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hera</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.content}>
                                <li className={`${styles.megamenu__item} ${styles.header__megamenu} ${styles.li}`}>Heading</li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Bona</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Perl</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hestia</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hera</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.content}>
                                <li className={`${styles.megamenu__item} ${styles.header__megamenu} ${styles.li}`}>Heading</li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Bona</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Perl</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hestia</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hera</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.content}>
                                <li className={`${styles.megamenu__item} ${styles.header__megamenu} ${styles.li}`}>Heading</li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Bona</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Perl</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hestia</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                                <li className={`${styles.megamenu__item} ${styles.li}`}>
                                    <div className={styles.menu__icon}>
                                        <i></i>
                                    </div>
                                    <div className={styles.megamenu__link}>
                                        <a href="#" className={styles.a}>Hera</a>
                                        <p className={styles.p} ></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li className={`${styles.nav__item} ${styles.li}`}>
                    <a href="#" className={`${styles.nav__link} ${styles.a}`}>Gallerie</a>
                </li>
                <li className={`${styles.nav__item} ${styles.li}`}>
                    <a href="#" className={`${styles.nav__link} ${styles.a}`}>Kontakt</a>
                </li>
                <li className={`${styles.nav__item} ${styles.li}`}>
                    <a href="#" className={`${styles.nav__link} ${styles.a}`}>Auktionen</a>
                </li>
            </ul>
            <div className={styles.toggle__menu}>
                <HiMenuAlt2 />
            </div>
        </nav>
    </>
  )
}

export default Navbar;