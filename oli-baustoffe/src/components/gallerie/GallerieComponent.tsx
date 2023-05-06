import React from 'react'
import styles from './GallerieComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Images from '../../constants/images';
import overview from '../../data/gallery.json';
import gallery from '../../data/gallery.json';
import { Component } from 'react';

interface GallerieComponentProps {
  onClick: () => void;
}

const GallerieComponent = (props: GallerieComponentProps) => {
  return (
    <div className={styles.gallerie_item} onClick={props.onClick}>
      <Image src={Images.dachplatten} width={300} alt="test" />
    </div>
  );
};


// interface MyProps {
//   // define the type of the props here
// }

// interface MyState {
//   // define the type of the state here
// }

// class GallerieComponent extends Component {
//   constructor(props: any){
//     super(props);

//     this.state = {
//       class: 'active'
//     }
//   }

//   render(){
//     return(
//       <div className={styles.gallery}>
//         <div className={styles.gallery_image}>
//           <Image src={Images.dachbaustoffe} alt="test" width={120} className={styles.image} />
//         </div>
//       </div>
//     )
//   }
// }

export default GallerieComponent