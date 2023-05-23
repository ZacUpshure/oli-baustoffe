import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import styles from './Modal.module.css';

// export default function Modal ({show, onClose, children}: any) {
//   const [isBrowser, setIsBrowser] = useState(false);

//   useEffect(() => {
//     setIsBrowser(true);
//   }, []);

//   const modalContent = show ? (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <div className={styles.header}>
//           <a href="#" onClick={handleClose}></a>
//         </div>
//         <div className={styles.body}>{children}</div>

//       </div>

//     </div>
//   ) : null;

//   if (isBrowser) {
//     return ReactDOM.createPortal(
//       modalContent,
//       document.getElementById()
//     )
//   }
// }

