import React from 'react';
import homeStyles from '../../styles/Home.module.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import {
    Navbar,
    NavbarTwo,
    Footer
} from '../../components';

import { Configurator } from '@/container';

const inter = Inter({ subsets: ['latin'] })

const index = () => {
  return (
    <>    
        <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
            <NavbarTwo />
        </header>  
        <div className='container'>
            <Link href="http://localhost:3000/uebersicht/dachpaneele_uebersicht" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
        </div>
        <div className='margin-bottom-md'>
            <Configurator />
        </div>
    </>
  )
}

export default index