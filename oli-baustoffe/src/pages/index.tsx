import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// Links für die Berichte:

// Neue Webseite: https://pagespeed.web.dev/analysis/https-atengelmann-com/qpfqe7eplu?hl=DE&form_factor=desktop

// Alte Webseite: https://pagespeed.web.dev/analysis/https-www-olibaustoffe-de/z38yaq5n49?hl=DE&form_factor=mobile

const inter = Inter({ subsets: ['latin'] })

import { 
  Hero,
  Dachbaustoffe,
  Dachplatten,
  Trapezplatten,
  IconGrid,
  ContactInfo
} from '../container';

import {
  Navbar,
  NavbarTwo,
  Footer
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oli Baustoffe | Ihr Experte für Trapezbleche, Dachpfannen und Dachpappe</title>
        <meta name="description" content="Entdecken Sie hochwertige Trapezbleche Dachpfannen und Dachpappen für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />

        <meta property="og:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" />
        <meta property="og:description" content="Entdecken Sie hochwertige Trapezbleche Dachpfannen und Dachpappen für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta property="og:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta property="og:url" content="https://olibaustoffe.de/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" />
        <meta name="twitter:description" content="Entdecken Sie hochwertige Trapezbleche Dachpfannen und Dachpappen für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta name="twitter:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="linkedin:title" content="Oli Baustoffe - Hochwertige Dachplatten für Ihr Dach | Ihr Experte für Dachmaterialien" /> 
        <meta name="linkedin:description" content="Entdecken Sie hochwertige Trapezbleche Dachpfannen und Dachpappen für Ihr Dach bei uns. Unsere breite Auswahl an erstklassigen Dachmaterialien bietet Langlebigkeit, Ästhetik und erstklassigen Schutz für Ihr Zuhause. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!" />
        <meta name="linkedin:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
        <meta name="linkedin:card" content="summary_large_image" />

        <meta name="google-site-verification" content="ZgeDhZ4bod7MsteiBzmYPBug8zGVujp6jHgm8cBPixM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`${styles.main} ${inter.className}` + ' header'}>
        {
          //<NavbarTwo />
        }
      </header>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>

          <h1>Wir sind momentan offline wegen Wartungsarbeiten.</h1>
          {
          //<Hero />
          //<Dachbaustoffe />
          //<IconGrid />
          //<Dachplatten />
          //<Trapezplatten />
          //<ContactInfo />
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
