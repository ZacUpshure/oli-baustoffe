import React, {useState} from 'react';
import classNames from 'classnames';
import styles from './NavbarTwo.module.css';
import secondStyles from './inactive.module.css';

import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import images from '../../constants/images';
import Link from 'next/link';


const NavbarTwo = () => {
    const [isActive, setIsActive] = useState(true);
    
    const handleButtonClick = () => {
        setIsActive(!isActive);
    };
    
    const combinedClasses = classNames(styles.nav_menu, {[secondStyles.inactive]: isActive,});


  return (
    <div className={styles.container}>
        <nav className={styles.navigation}>
            <a href="#!" className={`${styles.logo} ${styles.a}`}>
                <img src={images.logo.src} className={styles.logo} alt='logo'/>
            </a>
            {/* <ul className={`${styles.nav_menu}`}> */}
            <ul className={`${combinedClasses}`}>
                <li className={styles.nav_list}>
                    <a href="https://atengelmann.com/" className={styles.nav_link}>
                        <span>Home</span>
                    </a>
                </li>
                <li className={`${styles.nav_list} ${styles.nav_list_menu}`}>
                    <Link href="https://atengelmann.com/uebersicht" className={styles.nav_link} >
                        <span>Entdecken</span>
                    </Link>
                        <IoIosArrowDown />
                        <div className={styles.dropdown}>
                            <div className={styles.dropdown_inner}>
                                
                                <div className={styles.dropdown_item}>
                                    <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht" className={styles.nav_link} >
                                        <h3 className={styles.item_heading}>Dachplatten</h3>
                                    </Link>

                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht/product/0" className={styles.nav_link} >
                                                <h4>Bona</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht/product/1" className={styles.nav_link} >
                                                <h4>Perl</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht/product/2" className={styles.nav_link} >
                                                <h4>Beskid</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht/product/3" className={styles.nav_link} >
                                                <h4>Amalfi</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachplatten_uebersicht/product/4" className={styles.nav_link} >
                                                <h4>lima</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht" className={styles.nav_link} >
                                    <h3 className={styles.item_heading}>Trapezplatten</h3>
                                </Link>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht/product/0" className={styles.nav_link} >
                                                <h4>T-8</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht/product/1" className={styles.nav_link} >
                                                <h4>T-14</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht/product/2" className={styles.nav_link} >
                                                <h4>T-18</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht/product/3" className={styles.nav_link} >
                                                <h4>T-35</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/trapezplatten_uebersicht/product/4" className={styles.nav_link} >
                                                <h4>T-55</h4>
                                            </Link>
                                            {/* <p>lorem ipsum</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                    <Link href="https://atengelmann.com/uebersicht/dachpaneele_uebersicht" className={styles.nav_link} >
                                        <h3 className={styles.item_heading}>Dachpaneele</h3>
                                    </Link>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachpaneele_uebersicht/product/0" className={styles.nav_link} >
                                                <h4>pd25</h4>
                                            </Link>
                                            {/* http://localhost:3000/uebersicht/zubehoer_uebersicht */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachpaneele_uebersicht/product/1" className={styles.nav_link} >
                                                <h4>pd28</h4>
                                            </Link>
                                            {/* http://localhost:3000/uebersicht/zubehoer_uebersicht */}
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/dachpaneele_uebersicht/product/2" className={styles.nav_link} >
                                                <h4>pdt19</h4>
                                            </Link>
                                            {/* http://localhost:3000/uebersicht/zubehoer_uebersicht */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropdown_item}>
                                    <Link href="https://atengelmann.com/uebersicht/zubehoer_uebersicht" className={styles.nav_link} >
                                        <h3 className={styles.item_heading}>Zubehör</h3>
                                    </Link>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/zubehoer_uebersicht/dachteile" className={styles.nav_link} >
                                                <h4>Dachteile</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/zubehoer_uebersicht/product/0" className={styles.nav_link} >
                                                <h4>Schrauben</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/zubehoer_uebersicht/product/1" className={styles.nav_link} >
                                                <h4>Profilfüller</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.item_list}>
                                        <div className={styles.item_img}></div>
                                        <div className={styles.item_list_info}>
                                            <Link href="https://atengelmann.com/uebersicht/zubehoer_uebersicht/product/2" className={styles.nav_link} >
                                                <h4>Dachrinnen</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </li>
                <li className={styles.nav_list}>
                    <a href="https://atengelmann.com/gallerie" className={styles.nav_link}>
                        <span>Galerie</span>
                    </a>
                </li>
                <li className={styles.nav_list}>
                    <a href="https://atengelmann.com/#" className={styles.nav_link}>
                        <span>Auktionen</span>
                    </a>
                </li>
                <li className={styles.nav_list}>
                    <a href="https://atengelmann.com/kontakt" className={styles.nav_link}>
                        <span>Kontakt</span>
                    </a>
                </li>
            </ul>
            <div className={styles.nav_action} onClick={handleButtonClick}>
                <div className={styles.nav_toggle}>
                    <HiMenuAlt2 />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavbarTwo