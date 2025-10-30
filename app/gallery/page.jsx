import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../_components/(Layouts)/PageLayout';

export const metadata = {
    title: 'Galéria',
    description: 'Csekkold a képeinket!',
};

export default function Page() {
    return (
    <PageLayout className="mx-auto grid w-full gap-10 lg:gap-16">
      {/* Fejléc */}
        <header className="pt-0 text-center">
        <h1 className="pt-12 text-center text-xl lg:text-3xl">
        Csekkold a
        <span className="bg-linear-to-r from-[var(--color-bme-orange)] to-[var(--color-bme-purple)] bg-clip-text font-semibold text-transparent">
            {' '}
            képeinket
        </span>
        !
        </h1>
        <p className="mt-2 opacity-70">Válogatás három helyszínről</p>
        </header>

      {/* 3 szekció – kattintható csempék */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        <GalleryTile
            href="/gallery/monaco"
            title="Monaco"
            src="/images/gallery/monaco/monaco_borito.png"
            alt="Monaco galéria borítóképe"
        />
        <GalleryTile
            href="/gallery/wildau"
            title="Wildau"
            src="/images/gallery/wildau/cover.jpg"
            alt="Wildau galéria borítóképe"
        />
        <GalleryTile
            href="/gallery/balaton"
            title="Balaton"
            src="/images/gallery/balaton/cover.jpg"
            alt="Balaton galéria borítóképe"
        />
        </div>
    </PageLayout>
    );
}

/** Egy csempe a galériarácsban */
function GalleryTile({ href, title, src, alt }) {
    return (
    <Link
        href={href}
        className="group block overflow-hidden rounded-2xl ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
        <div className="relative aspect-[4/3]">
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            priority
        />
        {/* Alsó sötét átmenet a felirat olvashatóságáért */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
        <div className="absolute inset-x-0 bottom-0 p-3">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur group-hover:bg-white">
            {title}
            </span>
        </div>
        </div>
    </Link>
    );
}
