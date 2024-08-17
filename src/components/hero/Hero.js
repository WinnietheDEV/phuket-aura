import styles from './hero.module.css';

export default function Hero() {
    return (
        <div id="hero" className={`${styles['hero']}`}>
            <h1 className={styles['tagline']}>
                Trust Our <span style={{ color: 'red' }}>10+</span> Years in{' '}
                <br />
                Car Rental Expertise!
            </h1>
        </div>
    );
}
