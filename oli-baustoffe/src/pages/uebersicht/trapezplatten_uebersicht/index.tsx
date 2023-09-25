import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from '../../../constants/images';
import overview from '../../../data/trapezplatten_overview.json';
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

const TrapezplattenUebersicht = (props: any) => {
  console.log("props", props)
const router = useRouter();
console.log("router: ", router);
return (
  <>
      <Head>
        <title>Oli Baustoffe | Abteilung für Trapezbleche</title>
        <meta name="description" content="Trapezbleche mit den modellen T8 T14 T18 T35 T55" />

        <meta property="og:title" content="Oli Baustoffe | Abteilung für Trapezbleche" />
        <meta property="og:description" content="Trapezbleche mit den modellen T8 T14 T18 T35 T55" />
        <meta property="og:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta property="og:url" content="https://atengelmann.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Oli Baustoffe | Abteilung für Trapezbleche" />
        <meta name="twitter:description" content="Trapezbleche mit den modellen T8 T14 T18 T35 T55" />
        <meta name="twitter:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="linkedin:title" content="Oli Baustoffe | Abteilung für Trapezbleche" /> 
        <meta name="linkedin:description" content="Trapezbleche mit den modellen T8 T14 T18 T35 T55" />
        <meta name="linkedin:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="linkedin:card" content="summary_large_image" />

        <meta name="google-site-verification" content="ZgeDhZ4bod7MsteiBzmYPBug8zGVujp6jHgm8cBPixM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header className={`${mainStyles.main} ${inter.className}` + ' header container'}>
      <NavbarTwo />
      <Link href="https://olibaustoffe.de/" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
    </header>

    <main>
      <article className={'container center-text'} itemScope itemType='https://schema.org/Article'>
          <h1 className='heading_primary padding_top'> Trapezbleche Übersicht</h1>
          <div className="container grid grid--3-cols margin-bottom-md">
              {props.overview.map((overview: { id: any, name: any, imgUrl: string, websiteUrl: string, meta: string, description: string, width: number, height: number }) => {
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
      </article>
    </main>

    <footer className={mainStyles.footer}>
            <Footer />
    </footer>
  </> 
  )
}

export default TrapezplattenUebersicht