import Image from 'next/image';
import Yaris from '../../assets/catalog/toyota/yaris.webp';
import Vios from '../../assets/catalog/toyota/vios.webp';

export const toyotaCars = [
    {
        id: 1,
        title: 'Yaris',
        qualities: [{type: 'seat', value: '4'}, {type: 'engine', value:'1,500 CC.'}, {type: 'fuel', value: 'Gasohol 95'}],
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
        qualities: [{type: 'seat', value: '4'}, {type: 'engine', value:'1,500 CC.'}, {type: 'fuel', value: 'Gasohol 95'}],
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
