import Hero from '@/components/hero/Hero';
import Feature from '@/components/feature/Feature';
import Catalog from '@/components/catalog/Catalog';
import Step from '@/components/step/Step';
import Info from '@/components/info/Info';

export default function Home() {
    return (
        <main>
            <Hero />
            <Feature />
            <Catalog />
            <Step />
            <Info />
        </main>
    );
}
