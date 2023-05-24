import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Images from '../../constants/images';
import gallery from '../../data/gallery.json';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import { useState } from 'react';
import ImageFrame from '../../components/imageFrame/ImageFrame';
import styles from '../../components/imageFrame/ImageFrame.module.css';

import {
    NavbarTwo,
    Footer
} from '../../components';

export async function getStaticProps(context: any) {
    return {
      props: {gallery}, // will be passed to the page component as props
    }
}

const Gallerie = () => {
    const GalleryImages = [
        {
            // img: Images.dachbaustoffe
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0005.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0006.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0007.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0008.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0013.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0015.JPG",
            width: 180,
            height: 100,
        },
    ]

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index: any) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(GalleryImages.length - 1 ) 
        : setSlideNumber( slideNumber - 1 )
    }  

    const nextSlide  = () => {
        slideNumber + 1 === GalleryImages.length 
        ? setSlideNumber(0)
        : setSlideNumber( slideNumber + 1 )
    }

  return (
    <>
        <header>
            <NavbarTwo />
        </header>
        <div className='container'>
            <Link href="http://localhost:3000/" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
        </div>
        <div className={'container center-text margin-bottom-md'}>
            <h1 className='heading_primary'> Galerie</h1>
            {openModal && 
                <div className={styles.sliderWrap}>
                    <GrClose className={styles.btnClose} onClick={handleCloseModal} />
                    <AiOutlineArrowLeft className={styles.btnPrev} onClick={prevSlide}/>
                    <AiOutlineArrowRight className={styles.btnNext} onClick={nextSlide}/>
                    <div className={styles.fullScreenImage}>
                           <Image src={GalleryImages[slideNumber].img} alt='test'width={520} height={320} />
                    </div>
                </div>
            }
            <div className={"container grid grid--3-cols margin-bottom-md"+`${styles.galleryWrap}`}>
                {GalleryImages.map((slide: any, index: any) => {
                    return(
                        <div 
                            className={styles.single} 
                            key={index}
                            onClick={()=>handleOpenModal(index)}>
                            <Image src={slide.img} alt='test' width={slide.width} height={slide.height} />
                        </div>
                    )
                })}
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Gallerie;