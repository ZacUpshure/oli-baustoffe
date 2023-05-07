import React from 'react';
import Image from 'next/image';
import Images from '../../constants/images';
import styles from './Accordion.module.css';
import {AiOutlinePlus} from 'react-icons/ai'

const Accordion = () => {
  return (
    <div className='container'>
        <div className={styles.accordion}>
            <div>
                <input type="checkbox" name='example' id='section1' className={styles.accordion__input}/>
                <label htmlFor="section1" className={styles.accordion__label}>
                    <h2>Produkt Details</h2>
                </label>
                <div className={styles.accordion__content}>
                    <Image src={Images.test} alt='test' width={420} height={420}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion