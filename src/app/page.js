import Hero from '@/components/hero/Hero';
import Feature from '@/components/feature/Feature';
import Catalog from '@/components/catalog/Catalog';
import Step from '@/components/step/Step';
import Faq from '@/components/faq/Faq';

export default function Home() {
    return (
        <main>
            <Hero />
            <Feature />
            <Catalog />
            <Step />
            <Faq />
        </main>
    );
}
