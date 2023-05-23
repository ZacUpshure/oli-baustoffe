import React, {useState} from 'react';
import styles from './ProductPage.module.css';
import Image from 'next/image';
import Images from '../../constants/images';
import Lottie from 'lottie-react';
import {BiPhoneCall} from 'react-icons/Bi'

// class ProductPage extends React.Component {
  function ProductPage(props: any) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    return(
        <div className={'container margin-bottom-md' + `${styles.app}`}>
            {/* {products.map(item=> ( */}
                <div
                //  key={props.id}
                 className={styles.details}>
                    <div className={styles.big_img}>
                        <Image src={props.src} alt={props.description} width={1000} height={0}/>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.row}>
                        <h2 className='heading_primary'>{props.title}</h2>
                        <span>{props.price}</span>
                      </div>
                      {/* <div className={styles.colors}>
                        {
                          item.colors.map(color => (
                            <button key={color} style={{background: color}}></button>
                          ))
                        }
                      </div> */}
                      <p>{props.description}</p>
                      <p>{props.content}</p>
{/* 
                      <div className={styles.thumb}>
                        {
                          item.src.map(img => (
                            <Image key={img} src={img} alt='test' width={120} height={60} />
                          ))
                        }
                      </div> */}
                      <a href="#" onClick={() => setShowModal(true)} className={'btn btn--full margin-right-sm'+`${styles.cart}`} >Bestellung Konfigurieren</a>
                    </div>
                </div>
                {showModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>
                        &times;
                      </span>
                      <h3 className='heading_tertiary'>Wir Beraten Sie und stellen Ihre Bestellung Zusammen!</h3>
                      <p className='subheading'>
                        Tel: 030-89060840 <BiPhoneCall />
                      </p>
                      <Lottie animationData={Images.support} />
                    </div>
                  </div>
                )}
        </div>
    )
}

export default ProductPage