    import Link from 'next/link';
    import PageLayout from '../../_components/(Layouts)/PageLayout';
    import LightboxGallery from '../../_components/(Gallery)/LightboxGallery';

    export const metadata = {
    title: 'Galéria – Wildau',
    description: 'Wildau galéria',
    };

    export default function Page() {
    const photos = [
        '/images/gallery/wildau/1.jpg',
        '/images/gallery/wildau/2.jpg',
        '/images/gallery/wildau/3.jpg',
        '/images/gallery/wildau/4.jpg',
        '/images/gallery/wildau/5.jpg',
        '/images/gallery/wildau/6.jpg',
    ];

    return (
        <PageLayout className="mx-auto grid w-full gap-8 lg:gap-12">
        <header className="pt-8">
            <div className="mx-auto w-full max-w-6xl">
            <div className="mb-3 text-sm opacity-70">
                <Link href="/gallery" className="hover:underline">← vissza a galériához</Link>
            </div>
            <h1 className="text-2xl font-bold tracking-tight lg:text-4xl">
            <span className="inline-block bg-gradient-to-r from-[var(--color-bme-orange)] to-[var(--color-bme-purple)] bg-clip-text text-transparent">
                Wildau
            </span>
            </h1>

            </div>
        </header>

        <LightboxGallery photos={photos} altBase="Wildau fotó" />
        </PageLayout>
    );
    }
