/* eslint-disable @next/next/no-img-element */
import images from '../../constants/images';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <>
            <section className={styles.Hero_Section} id="hero">
                <div className={styles.hero}>
                    <div >
                        <h1 className="heading_primary">Die besten Baustoffe für Ihr Haus.</h1>
                        <p className={styles.hero_description}>
                        Hoch qualitative Dachplatten , Zubehör und vieles mehr.
                        </p>
                        <a href="#cta" className="btn btn--full margin-right-sm">Zum Sortiment</a>
                        <a href="#features" className="btn btn--outline">Weiterlesen &darr; </a>
                        {/* <div className={styles.customer_quick_peek}>
                            <div className={styles.customer_faces}>
                                <img src={images.test.src} alt="test-square"/>
                                <img src={images.test.src} alt="test-square"/>
                                <img src={images.test.src} alt="test-square"/>
                                <img src={images.test.src} alt="test-square"/>
                                <img src={images.test.src} alt="test-square"/>
                                <img src={images.test.src} alt="test-square"/>
                            </div>
                            <p className="customer-text"><span>100+</span> Happy Customers!</p> 
                        </div> */}
                    </div>
                <div className="hero-img-box"> 
                    <img 
                        src={images.hero_img.src}
                        className={styles.hero_img}
                        alt="test square"
                    />
                </div>
            </div>
            </section>
        </>
    )
};

export default Hero;