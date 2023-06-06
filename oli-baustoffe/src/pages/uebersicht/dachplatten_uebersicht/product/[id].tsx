import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Dachplatten } from '@/container';
import dachplatten_product_information from '../../../../data/dachplatten_product_informationen.json';
import homeStyles from '../../../../styles/Home.module.css';
import ProductPage from '@/container/ProductPage/ProductPage';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import {
  NavbarTwo,
  Footer,
  Accordion
} from '../../../../components';

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
      product: dachplatten_product_information.find(product => {
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
    ],
    fallback: false,
  }
}

const Product = (props: any) => {
    const router = useRouter();
    console.log('props: ', props);
  return (
      <>
      <Head>
        <title>Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien</title>
        <meta name="description" content="Entdecken Sie hochwertige Dachplatten, Trapezplatten und Dachpaneele für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />

        <meta property="og:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" />
        <meta property="og:description" content="Entdecken Sie hochwertige Dachplatten, Trapezplatten und Dachpaneele für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta property="og:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta property="og:url" content="https://atengelmann.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" />
        <meta name="twitter:description" content="Entdecken Sie hochwertige Dachplatten, Trapezplatten und Dachpaneele für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta name="twitter:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="linkedin:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" /> 
        <meta name="linkedin:description" content="Entdecken Sie hochwertige Dachplatten, Trapezplatten und Dachpaneele für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta name="linkedin:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="linkedin:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
            <NavbarTwo />
        </header>  

        <main>
          <article itemScope itemType='https://schema.org/Article'>
            <div className='container'>
                <Link href="http://localhost:3000/uebersicht/dachplatten_uebersicht" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
            </div>
            <div className='margin-bottom-md'>
                <ProductPage src={props.product.imgUrl} description={props.product.description} title={props.product.name} />
                <Accordion src={props.product.productDateImage}/>
            </div>
          </article>
        </main>

        <footer className={homeStyles.footer}>
            <Footer />
        </footer>
      </>
  )
}

export default Product