import React from 'react';
import styles from './ProductauswahlCards.module.css';
import Image from 'next/image';
import images from '../../../constants/images';

const ProductauswahlCards = () => {
  return (
    <div>

      <label className='subheading'>Dachplatten: </label>

      <div className="grid grid--3-cols margin-bottom-md">
        {/* Dachplatten */}
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Bona</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Perl</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Hestia</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Hera</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Era</div>
          </div>
        </label>
      </div>

      <label className='subheading'>Trapezplatten: </label>
      <div className="grid grid--3-cols margin-bottom-md">
        {/* Trapezplatten */}
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">8</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">14</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">18</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">35</div>
          </div>
        </label>
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">50</div>
          </div>
        </label>
      </div>

      <label className='subheading'>Dachpaneele: </label>
      <div className="grid grid--3-cols margin-bottom-md">
        {/* Trapezplatten */}
        <label className="option_item">
          <input type="radio" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Verschlusspaneele</div>
          </div>
        </label>
      </div>

    </div>
  )
}

export default ProductauswahlCards