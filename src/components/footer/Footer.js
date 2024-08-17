'use client';

import { useEffect } from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import logo from '../../assets/phuket-aura-logo.png';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={`${styles['footer']}`} id="footer">
            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                height={'200px'}
            >
                <Grid item xs={4} minHeight={'100%'}>
                    <Stack
                        style={{ width: '100%' }}
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Image src={logo} height={50} width={150} alt="logo" />

                        <Typography variant="body1">
                            Street: 1/7 Sunthornkosa Khlong Toei Khlong Toei
                            City: Bangkok State/province/area: Bangkok Phone
                            number: 22492855 Zip code: 10110 Country calling
                            code: +66 Country: Thailand
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={4} minHeight={'100%'}>
                    <Typography
                        marginBottom={4}
                        textAlign={'center'}
                        variant="h6"
                        color={'yellow'}
                    >
                        MENU
                    </Typography>
                    <Stack
                        style={{ width: '100%' }}
                        display={'flex'}
                        direction={'row'}
                        justifyContent={'center'}
                    >
                        <Stack spacing={4} width={'50%'} paddingLeft={'20%'}>
                            <Link href="#feature" className={styles.link}>
                                <li>Service</li>
                            </Link>

                            <Link href="#catalog" className={styles.link}>
                                <li>Model</li>
                            </Link>
                        </Stack>
                        <Stack spacing={4} width={'50%'} paddingLeft={'10%'}>
                            <Link href="#info" className={styles.link}>
                                <li>FAQ & How to</li>
                            </Link>

                            <Link href="#footer" className={styles.link}>
                                <li> Contact</li>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={4} minHeight={'100%'}>
                    <Typography
                        marginBottom={4}
                        textAlign={'center'}
                        variant="h6"
                        color={'yellow'}
                    >
                        CONTACT
                    </Typography>
                    <Stack
                        style={{ width: '100%' }}
                        display={'flex'}
                        alignItems={'center'}
                    >
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
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}
