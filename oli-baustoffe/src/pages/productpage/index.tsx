import ProductPage from '@/container/ProductPage/ProductPage';
import React from 'react';
import Images from '../../constants/images';
import { Inter } from 'next/font/google';
import homeStyles from '../../styles/Home.module.css';

import {
  Navbar,
  NavbarTwo,
  Footer,
  Accordion
} from '../../components';

const inter = Inter({ subsets: ['latin'] })

const productpage = () => {
  return (
    <>
      <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
          <NavbarTwo />
      </header>      
      <div className='margin-bottom-md'>
          <ProductPage />
          <Accordion />
      </div>
      <footer className={homeStyles.footer}>
          <Footer />
      </footer>
    </>
  )
}

export default productpage;