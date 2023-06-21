import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Images from '../../../constants/images';
import Image from 'next/image'
import overview from '../../../data/dachpaneele_overview.json';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Inter } from 'next/font/google'
import mainStyles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import {
    Navbar,
    NavbarTwo,
    Footer,
    Card
  } from '../../../components';

export async function getStaticProps(context: any) {
    return {
      props: {overview}, // will be passed to the page component as props
    }
}

const DachpaneeleUebersicht = (props: any) => {
  console.log("props", props)
const router = useRouter();
console.log("router: ", router);
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

    <header className={`${mainStyles.main} ${inter.className}` + ' header container'}>
      <NavbarTwo />
      <Link href="https://atengelmann.com/" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
    </header>

    <main>
      <article className={'container center-text'} itemScope itemType='https://schema.org/Article'>
          <h1 className='heading_primary padding_top'> Dachpaneele Übersicht</h1>
          <div className="container grid grid--3-cols margin-bottom-md">
              {props.overview.map((overview: { id: any, name: any, imgUrl: any, websiteUrl: any, meta: any, description: any, width: any, height: any}) => {
                  return (
                      <Card key={overview.id}
                       width={overview.width}
                       height={overview.height}
                       name={overview.name} 
                       imgUrl={overview.imgUrl} 
                       meta={overview.meta}
                       websiteUrl={overview.websiteUrl} 
                       description={overview.description} />
                  );
              })}
          </div>
        <h2 className='heading_secondary'>Zubehör</h2>
        <div className='container grid grid--3-cols margin-bottom-md'>
            <Image src='https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/dachpaneele_extra1.png' width={640} height={440} alt='Schrauben für Dachpaneele' />
            <Image src='https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/dachpaneele_extra2.png' width={640} height={440} alt='Schrauben für Dachpaneele' />
        </div>
          <div className='container'>
            <h2 className='heading_secondary'>Schrauben</h2>
            <Image src={Images.schrauben_für_dachpaneele} width={640} height={440} alt='Schrauben für Dachpaneele' />
        </div>
      </article>
    </main>

    <footer className={mainStyles.footer}>
        <Footer />
    </footer>
  </> 
  )
}

export default DachpaneeleUebersicht