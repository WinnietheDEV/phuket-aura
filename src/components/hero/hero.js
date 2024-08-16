import { Container } from '@mui/material';
import styles from './hero.module.css';

export default function Hero() {
  return (
      <div id="hero" className={`${styles['hero']}`}>
        <Container>
        <div className={styles['hero-text-container']}>
          <h1 className={styles['title']}>Phuket Aura</h1>
          <h2 className={styles['tagline']}>Over a Decade of Excellence: Trust Our 10+ Years in Car Rental Expertise!</h2>
        </div>
        </Container>
      </div>
  );
}
