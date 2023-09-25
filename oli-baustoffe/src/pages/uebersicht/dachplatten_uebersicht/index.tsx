import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Images from '../../../constants/images';
import Image from 'next/image';
import overview from '../../../data/dachplatten_overview.json';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Inter } from 'next/font/google';
import mainStyles from '@/styles/Home.module.css';
import Head from 'next/head';

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

const DachplattenUebersicht = (props: any) => {
  console.log("props", props)
const router = useRouter();
console.log("router: ", router);
return (
  <>
      <Head>
        <title>Oli Baustoffe | Abteilung für Dachpfannen</title>
        <meta name="description" content="Dachpfannen mit den modellen Bona Perl Beskid Amalfi Lima" />

        <meta property="og:title" content="Oli Baustoffe | Abteilung für Dachpfannen" />
        <meta property="og:description" content="Dachpfannen mit den modellen Bona Perl Beskid Amalfi Lima" />
        <meta property="og:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta property="og:url" content="https://atengelmann.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Oli Baustoffe | Abteilung für Dachpfannen" />
        <meta name="twitter:description" content="Dachpfannen mit den modellen Bona Perl Beskid Amalfi Lima" />
        <meta name="twitter:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="linkedin:title" content="Oli Baustoffe | Abteilung für Dachpfannen" /> 
        <meta name="linkedin:description" content="Dachpfannen mit den modellen Bona Perl Beskid Amalfi Lima" />
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

    <main className={`${mainStyles.main} ${inter.className}`}>
      <article itemScope itemType='https://schema.org/Article'>
        <div className={'container center-text'}>
            <h1 className='heading_primary'> Dachpfannen Übersicht</h1>
            <div className="container grid grid--3-cols margin-bottom-md">
                {props.overview.map((overview: { id: any, name: any, imgUrl: any, websiteUrl: any, meta: any, description: any, width: any, height: any }) => {
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
        </div>
      </article>
    </main>

    <footer className={mainStyles.footer}>
        <Footer />
    </footer>
  </> 
  )
}

export default DachplattenUebersicht