import React from 'react'
import Image from 'next/image';
import styles from './Card.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import Images from '../../constants/images';


const Card = (props: any) => { 
  return (
    <div className={styles.Cards_Section} id={styles.cards}>
             <div className={styles.card}>
                <Image src={Images.dachplatten} alt="card-img" className={styles.card_img} width={160} height={120}/>
                <div className={styles.card_content}>
                 {/* <div className={styles.tags}>
                    <span className={styles.tag}>10% off</span>
                </div> */}
                 <p className={styles.card_title}>{props.name}</p>
                 <div className={styles.card_attributes}>
                    <div className={styles.card_attributes}>
                        <span>{props.description}</span>
                    </div>
                    <div className={`${styles.card_attributes} ${styles.padding_left}`}>
                        <button className={styles.add_btn}>
                            <a href={props.websiteUrl}>
                                <AiOutlinePlus className={styles.btn_sign}/>
                            </a>
                        </button>
                    </div>
                 </div>
            </div>
        </div>
    </div>   
  )
}

export default Card