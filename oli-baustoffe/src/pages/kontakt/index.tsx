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

const index = () => {
  return (
    <>
    <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
        <NavbarTwo />
    </header>      
    <div className='container margin-bottom-md'>
        <h1 className='heading_primary padding_top center-text'> Kontakt</h1>
        <table className='contact-table'>
          <tbody>
            <tr>
              <th>Name</th>
              <td>Your Name</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>yourname@example.com</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>123-456-7890</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>123 Street, City, Country</td>
            </tr>
          </tbody>
        </table>

    </div>
    <footer className={homeStyles.footer}>
        <Footer />
    </footer>
  </>
  )
}

export default index