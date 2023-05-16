import React from 'react';
import styles from './DachzubehörCards.module.css';
import Image from 'next/image';
import images from '../../../constants/images';

const DachzubehörCards = () => {
  return (
    <div>

      <label className='subheading'>Dachteile: </label>

      <div className="grid grid--3-cols margin-bottom-md">
        {/* Dachplatten */}
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Bona</div>
          </div>
        </label>
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Perl</div>
          </div>
        </label>
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Hestia</div>
          </div>
        </label>
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Hera</div>
          </div>
        </label>
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Era</div>
          </div>
        </label>
      </div>

      <label className='subheading'>Schrauben: </label>
      <div className="grid grid--3-cols margin-bottom-md">
        {/* Trapezplatten */}
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">8</div>
          </div>
        </label>
      </div>

      <label className='subheading'>Profilfüller: </label>
      <div className="grid grid--3-cols margin-bottom-md">
        {/* Trapezplatten */}
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
          <div className={styles.option_inner}>
            <div className="tickmark"></div>
            <div className="icon">
              <Image src={images.dachplatten} alt='test' width={260} height={120}/>
            </div>
            <div className="name">Verschlusspaneele</div>
          </div>
        </label>
      </div>

      <label className='subheading'>Dachrinnen: </label>
      <div className="grid grid--3-cols margin-bottom-md">
        {/* Trapezplatten */}
        <label className="option_item">
          <input type="checkbox" className={styles.checkbox} name='groupeOne'/>
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

export default DachzubehörCards