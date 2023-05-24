import React from 'react';
import Images from '../../constants/images';
import { Inter } from 'next/font/google';
import homeStyles from '../../styles/Home.module.css';

import {
    NavbarTwo,
    Footer
  } from '../../components';

const inter = Inter({ subsets: ['latin'] })

const index = () => {
  return (
    <>
    <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
        <NavbarTwo />
    </header>      
    <div className='container margin-bottom-md'>
        <h1 className='heading_primary padding_top center-text'> Impressum</h1>
        <h3>Impressum nach dem §5 des TMG</h3>
        <table className='contact-table'>
          <tbody>
            <tr>
              <th>Steuer-Nr.</th>
              <td>247236701497</td>
            </tr>
            <tr>
              <th>Ust-Id</th>
              <td>DE321057207</td>
            </tr>
            <tr>
              <th>Inhaltlich Verantwortlicher</th>
              <td>gemäß § 55 Abs. 2 RStV: Leon Bork</td>
            </tr>
          </tbody>
        </table>
        <p>
            Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
            den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber verantwortlich.
        </p>

    </div>
    <footer className={homeStyles.footer}>
        <Footer />
    </footer>
  </>
  )
}

export default index