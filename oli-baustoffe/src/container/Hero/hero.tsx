/* eslint-disable @next/next/no-img-element */
import images from '../../constants/images';
import Image from 'next/image';
import styles from './Hero.module.css';
import Banner from '@/components/banner/Banner';

const Hero = () => {
    return (
        <>
            <section className={styles.Hero_Section} id="hero">
                <div className={styles.hero}>
                    <div >
                        <h1 className="heading_primary">Die besten Baustoffe für Ihr Haus.</h1>
                        <p className={styles.hero_description}>
                        Jetzt bei Blechdachprofi oder Direkt bei Oli Baustoffe.
                        </p>
                        <a href="https://atengelmann.com/uebersicht" className="btn btn--full margin-right-sm">Zum Sortiment</a>
                        <a href="http://blechdachprofi.de/contact-us/" className="btn btn--outline">Angebot anfragen &darr; </a>
                    </div>
                <div className="hero-img-box"> 
                    <img 
                        src={images.haus1}
                        className={styles.hero_img}
                        alt="Haus mit Dachpfannen mit einer Grünen Umgebung."
                        loading="lazy"
                    />
                </div>
            </div>
            <Banner />
            </section>
        </>
    )
};

export default Hero;