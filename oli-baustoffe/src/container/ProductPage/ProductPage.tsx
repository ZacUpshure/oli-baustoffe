import React from 'react';
import styles from './ProductPage.module.css';
import Image from 'next/image';
import Images from '../../constants/images';

interface srcState {
    src: string[];
}
interface productsType {
    src: string[];
}

class ProductPage extends React.Component {

    state = {
        products: [
          {
            _id: "1",
            title: "Nike Shoes",
            src: [
                Images.haus1,
                Images.haus2,
                Images.haus3,
                // Images.haus4
              ],
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            colors:["red","black","crimson","teal"],
            count: 1
          }
        ],
        index: 0
      };

  render () {
    const {products} = this.state; 
    return(
        <div>
            {products.map(item=> (
                <div key={item._id} className="details">
                    <div className="big-img">
                        <Image src={item.src[0]} alt={item.description} width={120} height={120}/>
                    </div>
                </div>
            ))}
        </div>
    )
  }
}

export default ProductPage