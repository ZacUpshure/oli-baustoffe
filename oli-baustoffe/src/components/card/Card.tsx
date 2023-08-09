import React from 'react'
import Image from 'next/image';
import styles from './Card.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import Images from '../../constants/images';


const Card = (props: any) => { 
  return (
    // <div className={styles.Cards_Section} id={styles.cards}>
    //          <div className={styles.card}>
    //             <Image 
    //                 src={props.imgUrl} 
    //                 alt={props.meta} 
    //                 className={styles.card_img} 
    //                 width={props.width} 
    //                 height={props.height}
    //             />
    //             <div className={styles.card_content}>
    //              {/* <div className={styles.tags}> 160x120
    //                 <span className={styles.tag}>10% off</span>
    //             </div> */}
    //              <p className={styles.card_title}>{props.name}</p>
    //              <div className={styles.card_attributes}>
    //                 <div className={styles.card_attributes}>
    //                     <span>{props.description}</span>
    //                 </div>
    //                 <div className={`${styles.card_attributes} ${styles.padding_left}`}>
    //                     <button className={styles.add_btn}>
    //                         <a href={props.websiteUrl}>
    //                             <AiOutlinePlus className={styles.btn_sign}/>
    //                         </a>
    //                     </button>
    //                 </div>
    //              </div>
    //         </div>
    //     </div>
    // </div>   
    <div className="bg-white shadow-md rounded-lg p-4">
    <img src={props.imgUrl} alt={props.meta} className="w-full h-auto" />
    <div className="mt-4">
      <p className="text-4xl font-semibold">{props.name}</p>
      <p className="text-gray-600 mt-2">{props.description}</p>
    </div>
    <div className="flex items-center justify-center mt-4">
      <a href={props.websiteUrl} className="text-indigo-500 hover:underline">
        <button className="bg-indigo-500 text-white px-3 py-1 rounded-full">
            {/* <AiOutlinePlus /> */}
            <p className='text-lg'>bestellen</p>
        </button>
      </a>
    </div>
  </div>
  )
}

export default Card