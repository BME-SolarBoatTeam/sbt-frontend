    import Link from 'next/link';
    import PageLayout from '../../_components/(Layouts)/PageLayout';
    import LightboxGallery from '../../_components/(Gallery)/LightboxGallery';

    export const metadata = {
    title: 'Galéria – Monaco',
    description: 'Monaco galéria',
    };

    export default function Page() {
    const photos = [
        '/images/gallery/monaco/sbt_web_mon1.jpg',
        '/images/gallery/monaco/sbt_web_mon2.jpg',
        '/images/gallery/monaco/sbt_web_mon3.jpg',
        '/images/gallery/monaco/sbt_web_mon4.jpg',
        '/images/gallery/monaco/sbt_web_mon5.jpg',
        '/images/gallery/monaco/sbt_web_mon6.jpg',
        '/images/gallery/monaco/sbt_web_mon7.jpg',
        '/images/gallery/monaco/sbt_web_mon8.jpg',
        '/images/gallery/monaco/sbt_web_mon9.jpg',
        '/images/gallery/monaco/sbt_web_mon10.jpg',
        '/images/gallery/monaco/sbt_web_mon11.jpg',
        '/images/gallery/monaco/sbt_web_mon12.jpg',
        '/images/gallery/monaco/sbt_web_mon13.jpg',
        '/images/gallery/monaco/sbt_web_mon14.jpg',
        '/images/gallery/monaco/sbt_web_mon15.jpg',
        '/images/gallery/monaco/sbt_web_mon16.jpg',
        '/images/gallery/monaco/sbt_web_mon17.jpg',
        '/images/gallery/monaco/sbt_web_mon18.jpg',
        '/images/gallery/monaco/sbt_web_mon19.jpg',
        '/images/gallery/monaco/sbt_web_mon20.jpg',
        '/images/gallery/monaco/sbt_web_mon21.jpg',
        '/images/gallery/monaco/sbt_web_mon22.jpg',
        '/images/gallery/monaco/sbt_web_mon23.jpg',
        '/images/gallery/monaco/sbt_web_mon24.jpg',
        '/images/gallery/monaco/sbt_web_mon25.jpg',
        '/images/gallery/monaco/sbt_web_mon26.jpg',
        '/images/gallery/monaco/sbt_web_mon27.jpg',
        '/images/gallery/monaco/sbt_web_mon28.jpg',
        '/images/gallery/monaco/sbt_web_mon29.jpg',
        '/images/gallery/monaco/sbt_web_mon30.jpg',
        '/images/gallery/monaco/sbt_web_mon31.jpg',
        '/images/gallery/monaco/sbt_web_mon32.jpg',
        '/images/gallery/monaco/sbt_web_mon33.jpg',
        '/images/gallery/monaco/sbt_web_mon34.jpg',
        '/images/gallery/monaco/sbt_web_mon35.jpg',
        '/images/gallery/monaco/sbt_web_mon36.jpg',
        '/images/gallery/monaco/sbt_web_mon37.jpg',
        '/images/gallery/monaco/sbt_web_mon38.jpg',
        '/images/gallery/monaco/sbt_web_mon39.jpg',
        '/images/gallery/monaco/sbt_web_mon40.jpg',
        '/images/gallery/monaco/sbt_web_mon41.jpg',
        '/images/gallery/monaco/sbt_web_mon42.jpg',
        '/images/gallery/monaco/sbt_web_mon43.jpg',
        '/images/gallery/monaco/sbt_web_mon44.jpg',
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
                Monaco
            </span>
</h1>

            </div>
        </header>

        <LightboxGallery photos={photos} altBase="Monaco fotó" />
        </PageLayout>
    );
    }
