import React, { useState } from 'react';
import Image from 'next/image';
import Images from '../../constants/images';
import styles from './ImageFrame.module.css';

const ImageFrame = ({GalleryImages}: any) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

  return (
     <div>
        <div className={styles.galleryWrap}>
                {GalleryImages.map((slide: any, index: any) => {
                    return(
                        <div className={styles.single} key={index}>
                            <Image src={slide.img} alt='' width={120}/>
                        </div>
                    )
                })}
        </div>
     </div>
  )
}

export default ImageFrame