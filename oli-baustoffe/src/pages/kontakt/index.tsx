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
              <th>Inhaber</th>
              <td>Ryszard Poinc</td>
            </tr>
            <tr>
              <th>Adresse</th>
              <td>Storkwinkel 5, 10711 Berlin</td>
            </tr>
            <tr>
              <th>Tel.</th>
              <td>030 - 89060840</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>0176-24 820 749</td>
            </tr>
            <tr>
              <th>Fax</th>
              <td>030 - 89060947</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>info@olibaustoffe.de</td>
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
