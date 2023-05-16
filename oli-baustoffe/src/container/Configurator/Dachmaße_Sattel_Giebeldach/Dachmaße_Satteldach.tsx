import React from 'react'
import { useState } from 'react';
import styles from '../Configurator.module.css';
import Image from 'next/image';
import images from '../../../constants/images';

const Dachmaße_Satteldach = () => {
  return (
    <>
        <label htmlFor="select-option" className='subheading'>Dachmaße Sattel- / Giebeldach: </label>
        <div className="container grid grid--3-cols margin-bottom-md">
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    {/* <input type='checkbox' id='sattel_giebeldach'/> */}
                    <input type='text' id='sattel_giebeldach'/>
                    <label htmlFor="sattel_giebeldach">
                        <Image src={images.icon7} alt='test' width={182} height={182} className='image' />
                    </label>
                    {/* <label htmlFor="sattel_giebeldach">Sattel- / Giebeldach</label> */}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    <input type='text' id='pult_flachdach'/>
                    <label htmlFor="pult_flachdach">
                        <Image src={images.icon8} alt='test' width={182} height={182} className='image' />
                    </label>
                    {/* <label htmlFor="sattel_giebeldach">Sattel- / Giebeldach</label> */}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    <input type='text' id='pult_flachdach'/>
                    <label htmlFor="pult_flachdach">
                        <Image src={images.icon9} alt='test' width={182} height={182} className='image' />
                    </label>
                    {/* <label htmlFor="sattel_giebeldach">Sattel- / Giebeldach</label> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Dachmaße_Satteldach