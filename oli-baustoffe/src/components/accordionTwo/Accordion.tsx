import React from 'react';
import Image from 'next/image';
import Images from '../../constants/images';
import styles from './Accordion.module.css';
import {AiOutlinePlus} from 'react-icons/ai'

const Accordion = (props: any) => {
  return (
    <div className='container'>
        <div className={styles.accordion}>
            <div>
                <input type="checkbox" name='example' id='section1' className={styles.accordion__input}/>
                <label htmlFor="section1" className={styles.accordion__label}>
                    <h2>Produkt Details</h2>
                </label>
                <div className={styles.accordion__content}>
                    <Image src={props.src} className={styles.img} alt='Dachplatten Produktdetails' width={680} height={234}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion