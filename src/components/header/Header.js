// import { useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/phuket-aura-logo.png';

export default function Header() {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const backgroundHeight =
    //             document.querySelector('#hero').clientHeight;
    //         const navbar = document.querySelector('#navbar');
    //         const viewportHeight = window.innerHeight;
    //         const threeVhHeight = viewportHeight * 0.03;

    //         // if (window.scrollY > backgroundHeight + threeVhHeight) {
    //         //   console.log('yes')
    //         //   navbar.classList.add('sticky');
    //         // }
    //         //   else {
    //         //     navbar.classList.remove('sticky');
    //         //   }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <header id="navbar" className={styles.header}>
            <Image src={logo} height={50} width={150} alt="logo" />
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="#feature">Service</Link>
                    </li>
                    <li>
                        <Link href="#catalog">Model</Link>
                    </li>
                    <li>
                        <Link href="#info">FAQ & How to</Link>
                    </li>
                    <li>
                        <Link href="#footer">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
