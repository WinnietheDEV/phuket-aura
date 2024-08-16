"use client"

import { useEffect } from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
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

