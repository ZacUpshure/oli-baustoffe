import React from 'react';
import styles from './ProductPage.module.css';
import Image from 'next/image';
import Images from '../../constants/images';

interface productsType {
    // src: string[],
    src: any,
    title: string,
    description: string,
    content: string,
    price: number,
    colors: any,
    count: number,
    _id: number
}

class ProductPage extends React.Component {

    state = {
        products: [
          {
            _id: 1,
            title: "Dachplatten",
            src: [
                Images.dachplatten,
              ],
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            colors:["red","black","crimson","teal"],
            count: 1,
          }
        ],
        index: 0
      };

  render () {
    const {products} = this.state; 
    return(
        <div className={'container margin-bottom-md' + `${styles.app}`}>
            {products.map(item=> (
                <div key={item._id} className={styles.details}>
                    <div className={styles.big_img}>
                        <Image src={item.src[0]} alt={item.description} width={1000} height={0}/>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.row}>
                        <h2 className='heading_primary'>{item.title}</h2>
                        <span>{item.price}</span>
                      </div>
                      {/* <div className={styles.colors}>
                        {
                          item.colors.map(color => (
                            <button key={color} style={{background: color}}></button>
                          ))
                        }
                      </div> */}
                      <p>{item.description}</p>
                      <p>{item.content}</p>
{/* 
                      <div className={styles.thumb}>
                        {
                          item.src.map(img => (
                            <Image key={img} src={img} alt='test' width={120} height={60} />
                          ))
                        }
                      </div> */}
                      {/* <button>Bestellung Konfigurieren</button> */}
                      <a href="#" className={'btn btn--full margin-right-sm'+`${styles.cart}`} >Bestellung Konfigurieren</a>
                    </div>
                </div>
            ))}
        </div>
    )
  }
}

export default ProductPage