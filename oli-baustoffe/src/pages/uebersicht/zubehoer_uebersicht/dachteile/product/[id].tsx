import React from 'react';
import { useRouter } from 'next/router';
import { Dachplatten } from '@/container';
import dachteile_product_information from '../../../../../data/zubehoer_dachteile_product.json';
import homeStyles from '../../../../../styles/Home.module.css';
import ProductPage from '@/container/ProductPage/ProductPage';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import {
  Navbar,
  NavbarTwo,
  Footer,
  Accordion
} from '../../../../../components';

interface types {
  id: any,
  params: any,
  props: any
}

const inter = Inter({ subsets: ['latin'] })

export function getStaticProps(staticProps: any) {
  const params = staticProps.params;
  return {
    props: {
      product: dachteile_product_information.find(product => {
        return product.id.toString() === params.id;
      }),
    },
  };
}
  
export function getStaticPaths() {
  return {
    paths: [
      {params: {id: "0"}},
      {params: {id: "1"}},
      {params: {id: "2"}},
      {params: {id: "3"}},
      {params: {id: "4"}},
      {params: {id: "5"}},
      {params: {id: "6"}},
      {params: {id: "7"}},
      {params: {id: "8"}},
    ],
    fallback: false,
  }
}

const Product = (props: any) => {
    const router = useRouter();
    console.log('props: ', props);
  return (
      <>
        <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
            <NavbarTwo />
        </header>      
        <div className='container'>
            <Link href="http://localhost:3000/uebersicht/zubehoer_uebersicht" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
        </div>
        <div className='margin-bottom-md'>
            <ProductPage src={props.product.imgUrl} description={props.product.description} title={props.product.name} />
            <Accordion src={props.product.productDateImage}/>
        </div>
        <footer className={homeStyles.footer}>
            <Footer />
        </footer>
      </>
  )
}

export default Product