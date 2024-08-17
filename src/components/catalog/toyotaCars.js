import Image from 'next/image';
import Yaris from '../../assets/catalog/toyota/yaris.webp';
import Vios from '../../assets/catalog/toyota/vios.webp';

export const toyotaCars = [
    {
        id: 1,
        title: 'Yaris',
        qualities: ['durable', 'easy to drive', 'agile'],
        price: '1000/day',
        image: (
            <Image
                src={Yaris}
                width={500}
                height={300}
                alt="Toyota Yaris image"
            ></Image>
        ),
    },
    {
        id: 2,
        title: 'Vios',
        qualities: ['durable', 'easy to drive', 'agile'],
        price: '1000/day',
        image: (
            <Image
                src={Vios}
                width={500}
                height={300}
                alt="Toyota Vios image"
            ></Image>
        ),
    },
];
