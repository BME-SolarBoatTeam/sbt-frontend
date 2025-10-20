    import Link from 'next/link';
    import PageLayout from '../../_components/(Layouts)/PageLayout';
    import LightboxGallery from '../../_components/(Gallery)/LightboxGallery';

    export const metadata = {
    title: 'Galéria – Balaton',
    description: 'Balaton galéria',
    };

    export default function Page() {
    const photos = [
        '/images/gallery/balaton/1.jpg',
        '/images/gallery/balaton/2.jpg',
        '/images/gallery/balaton/3.jpg',
        '/images/gallery/balaton/4.jpg',
        '/images/gallery/balaton/5.jpg',
        '/images/gallery/balaton/6.jpg',
    ];

    return (
        <PageLayout className="mx-auto grid w-full gap-8 lg:gap-12">
        <header className="pt-8">
            {/* ugyanaz a konténer, mint a rácsé: max-w-6xl, nincs extra padding */}
            <div className="mx-auto w-full max-w-6xl">
            <div className="mb-3 text-sm opacity-70">
                <Link href="/gallery" className="hover:underline">← vissza a galériához</Link>
            </div>
            <h1 className="text-2xl font-bold tracking-tight lg:text-4xl">
                <span className="inline-block bg-gradient-to-r from-[#F9AC1B] to-[#93549F] bg-clip-text text-transparent">
                Balaton
                </span>
            </h1>
            </div>
        </header>

        <LightboxGallery photos={photos} altBase="Balaton fotó" />
        </PageLayout>
    );
    }
