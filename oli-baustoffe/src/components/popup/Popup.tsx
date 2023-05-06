import React from 'react'
import Images from '../../constants/images';
import Image from 'next/image';
import styles from './Popup.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Component } from 'react';

// const Popup = () => {
//   return (
//     <div className={`${styles.popup} ${styles.active}`}>
//         <div className={styles.top_bar}>
//             <p className={styles.image_name}></p>
//             <i className={styles.close_btn}><IoMdClose /></i>
//         </div>
//         <button className={`${styles.arrow_btn} ${styles.left_arrow}`}><AiOutlineArrowLeft /></button>
//         <button className={`${styles.arrow_btn} ${styles.right_arrow}`}><AiOutlineArrowRight /></button>
//         <Image src={Images.dachplatten} className={styles.large_image} width={520} alt='test'/>
//         <h1 className="index">01</h1>
//     </div>
//   )
// }

// const ACTIVE_CLASS = styles.active;

  interface PopupProps {
    classes: string;
  }
  
//   class Popup extends Component<PopupProps, {}> {

//         constructor(props: any){
//             super(props);

//             this.state = {
//             deactivate: ''
//             }
//         }
  
//       render() {
//           return(
//               <div className={`${styles.popup} ${this.props.classes}`}>
//                   <div className={styles.top_bar}>
//                       <p className={styles.image_name}></p>
//                       <i className={styles.close_btn} ><IoMdClose /></i>
//                   </div>
//                   <button className={`${styles.arrow_btn} ${styles.left_arrow}`}><AiOutlineArrowLeft /></button>
//                   <button className={`${styles.arrow_btn} ${styles.right_arrow}`}><AiOutlineArrowRight /></button>
//                   <Image src={Images.dachplatten} className={styles.large_image} width={520} alt='test'/>
//                   <h1 className="index">01</h1>
//               </div> 
//           );
//       }
//   }

interface PopupProps {
    classes: string;
    onClose: () => void;
  }
  
  interface PopupState {
    classes: string;
  }
  
  class Popup extends Component<PopupProps, PopupState> {
  
      constructor(props: PopupProps){
          super(props);
  
          this.state = {
              classes: props.classes,
          };
      }
  
      handleClose = () => {
        this.setState({ classes: '' });
        this.props.onClose();
      }
  
      render() {
          return(
              <div className={`${styles.popup} ${this.state.classes}`}>
                  <div className={styles.top_bar}>
                      <p className={styles.image_name}></p>
                      <i className={styles.close_btn} onClick={this.handleClose}><IoMdClose /></i>
                  </div>
                  <button className={`${styles.arrow_btn} ${styles.left_arrow}`}><AiOutlineArrowLeft /></button>
                  <button className={`${styles.arrow_btn} ${styles.right_arrow}`}><AiOutlineArrowRight /></button>
                  <Image src={Images.dachplatten} className={styles.large_image} width={520} alt='test'/>
                  <h1 className="index">01</h1>
              </div> 
          );
      }
  }
  



export default Popup