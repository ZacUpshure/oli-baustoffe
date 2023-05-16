import React from 'react';
import Image from 'next/image';
import Images from '../../constants/images'
import Lottie from 'lottie-react';

const Abschluss = () => {
  return (
    <div className='container'>
      <Lottie animationData={Images.calender} />
      <a href="#cta" className="btn btn--full margin-right-sm">Bestellung Aufgeben</a>
    </div>
  )
}

export default Abschluss