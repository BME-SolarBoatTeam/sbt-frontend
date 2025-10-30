    // Lightbox galéria komponens v1
    
    'use client';

    import Image from 'next/image';
    import { useCallback, useEffect, useState } from 'react';

    export default function LightboxGallery({ photos = [], altBase = 'Fotó' }) {
    const [index, setIndex] = useState(null); // null = zárva, szám = megnyitott kép indexe

        const isOpen = index !== null;

        const open = useCallback((i) => setIndex(i), []);
        const close = useCallback(() => setIndex(null), []);
        const next = useCallback(() => setIndex((i) => (i === null ? 0 : (i + 1) % photos.length)), [photos.length]);
        const prev = useCallback(() => setIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length)), [photos.length]);

    // ESC/nyilak + body scroll lock
        useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.documentElement.style.overflow = prevOverflow;
        };
        }, [isOpen, close, next, prev]);

        return (
        <>
        {/* Rács – bélyegképek */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {photos.map((src, i) => (
            <button
                key={src}
                type="button"
                onClick={() => open(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label={`${altBase} ${i + 1} nagyítása`}
            >
                <Image
                src={src}
                alt={`${altBase} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                priority={i < 2}
                />
            </button>
            ))}
        </div>

        {/* Lightbox – csak akkor rendereljük, ha nyitva */}
        {isOpen && (
            <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
            onClick={close}
            >
            <div
                className="relative mx-auto w-[92vw] max-w-[1200px] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* kép konténer: object-contain, hogy ne vágja le */}
                <div className="relative h-[70vh] w-full">
                <Image
                    src={photos[index]}
                    alt={`${altBase} ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                />
                </div>

                {/* Vezérlők */}
                <button
                type="button"
                onClick={close}
                aria-label="Bezárás"
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
                >
                {/* X ikon */}
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                </button>

                <button
                type="button"
                onClick={prev}
                aria-label="Előző kép"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-3 text-black shadow hover:bg-white"
                >
                {/* balra nyíl */}
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                </button>

                <button
                type="button"
                onClick={next}
                aria-label="Következő kép"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-3 text-black shadow hover:bg-white"
                >
                {/* jobbra nyíl */}
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                </button>

                {/* Számláló */}
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
                {index + 1} / {photos.length}
                </div>
            </div>
            </div>
        )}
        </>
    );
    }
