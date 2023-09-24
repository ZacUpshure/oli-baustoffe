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
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0017.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0020.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0022.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0026.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0027.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0028.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0040.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0048.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0050.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0051.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0053.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0058.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0063.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0065.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0067.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0072.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0073.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0075.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0077.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0077.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0079.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0081.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0083.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0084.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0085.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0086.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0093.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0096.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0098.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0099.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0102.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0103.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0104.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0105.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0106.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0108.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0110.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0111.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0114.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0116.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0123.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0125.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0126.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0133.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0134.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0136.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0137.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0139.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0142.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0145.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0147.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0152.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0153.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0156.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0159.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0163.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0164.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0167.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0173.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0174.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0175.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0176.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0177.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0178.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0179.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0180.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0184.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0185.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0186.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0187.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0188.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0189.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0190.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0191.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0193.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0195.JPG",
            width: 180,
            height: 100,
        },
        {
            img: "https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.JPG",
            width: 180,
            height: 100,
        }
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
            {/* {openModal && 
                <div className={styles.sliderWrap}>
                    <GrClose className={styles.btnClose} onClick={handleCloseModal} />
                    <AiOutlineArrowLeft className={styles.btnPrev} onClick={prevSlide}/>
                    <AiOutlineArrowRight className={styles.btnNext} onClick={nextSlide}/>
                    <div className={styles.fullScreenImage}>
                           <Image src={GalleryImages[slideNumber].img} alt='test'width={520} height={320} />
                    </div>
                </div>
            } */}
            {/* <div className={"container grid grid--3-cols margin-bottom-md"+`${styles.galleryWrap}`}>
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
            </div> */}
        </div>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Gallerie;