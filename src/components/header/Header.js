"use client"

import { useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const backgroundHeight = document.querySelector('#hero').clientHeight;
      const navbar = document.querySelector('#navbar');
      const viewportHeight = window.innerHeight;
      const threeVhHeight = viewportHeight * 0.03;
      console.log(threeVhHeight)
      // if (window.scrollY > backgroundHeight + threeVhHeight) {
      //   console.log('yes')
      //   navbar.classList.add('sticky');        
      // } 
      //   else {
      //     navbar.classList.remove('sticky');        
      //   }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="navbar" className={styles.header}>
    <nav  className={styles.nav}>
        <ul>
          <li>
            <p>Tel-089-344-3939 k.praew</p>
          </li>
          <li>
          <p>Facebook</p>
          </li>
          <li>
          <p>instagram</p>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

