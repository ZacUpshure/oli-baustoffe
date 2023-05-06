import React, {useState} from 'react';
import styles from './NavbarTwo.module.css';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import images from '../../constants/images';


const NavbarTwo = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.navigation}>
            <a href="#!" className={`${styles.logo} ${styles.a}`}>
                <img src={images.logo.src} className={styles.logo} alt='logo'/>
            </a>
            {/* <ul className={`${styles.nav_menu}`}> */}
            <ul className={`${styles.nav_menu}`}>
                <li className={styles.nav_list}>
                    <a href="http://localhost:3000/" className={styles.nav_link}>
                        <span>Home</span>
                    </a>
                </li>
                <li className={`${styles.nav_list} ${styles.nav_list_menu}`}>
                    <a href="http://localhost:3000/uebersicht" className={styles.nav_link} >
                        <span>Entdecken</span>
                        <IoIosArrowDown />
                        <div className={styles.dropdown}>
                            <div className={styles.dropdown_inner}>
                                
                                <div className={styles.dropdown_item}>
                                    <h3 className={styles.item_heading}>Dachplatten</h3>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Bona</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Perl</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Hestia</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Hera</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                    <h3 className={styles.item_heading}>Trapezplatten</h3>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>T-8</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>T-14</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>T-18</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>T-35</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>T-50</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                    <h3 className={styles.item_heading}>Dachpaneele</h3>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Dachpaneele</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                    <h3 className={styles.item_heading}>Zubehör</h3>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Dachteile</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Schrauben</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Profilfüller</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <h4>Dachrinnen</h4>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </a>
                </li>
                <li className={styles.nav_list}>
                    <a href="http://localhost:3000/gallerie" className={styles.nav_link}>
                        <span>Gallerie</span>
                    </a>
                </li>
                <li className={styles.nav_list}>
                    <a href="#! " className={styles.nav_link}>
                        <span>Auktionen</span>
                    </a>
                </li>
                <li className={styles.nav_list}>
                    <a href="#! " className={styles.nav_link}>
                        <span>Kontakt</span>
                    </a>
                </li>
            </ul>
            <div className={styles.nav_action} >
                <div className={styles.nav_toggle}>
                    <HiMenuAlt2 />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavbarTwo