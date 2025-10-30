    // RoleCard.jsx
    export default function RoleCard({
    title,
    points = [],
    images = [],
    description,          // string vagy string[]
    children,             // opcionális extra tartalom
    className = '',
    }) {
    const paragraphs = Array.isArray(description) ? description : (description ? [description] : []);

    return (
        <div className={className}>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        {/* Leírás vagy pontok */}
        {paragraphs.length > 0 ? (
            <div className="space-y-4 text-inherit leading-relaxed">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
        ) : (
            points?.length > 0 && (
            <ul className="mt-2 list-disc pl-5 space-y-1 text-inherit">
                {points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            )
        )}

        {/* Képek */}
        {images?.length > 0 && (
            <>
            {/* MOBIL: slider (alapból látszik, sm-től rejtve) */}
            <div className="block sm:hidden mt-6">
                <div
                className="
                    flex gap-4 overflow-x-auto scroll-smooth no-scrollbar
                    snap-x snap-mandatory
                "
                aria-label={`${title} képgaléria`}
                >
                {images.map(({ src, alt }, i) => (
                    <div key={i} className="min-w-full snap-start">
                    <img
                        src={src}
                        alt={alt ?? `${title} ${i + 1}`}
                        className="w-full h-56 rounded-xl object-cover"
                        draggable={false}
                    />
                    </div>
                ))}
                </div>
                <p className="mt-2 text-center text-xs opacity-80">Görgess →</p>
            </div>

            {/* DESKTOP/TABLET: rács (mobilon rejtve) */}
            <div className="hidden sm:grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {images.map(({ src, alt }, i) => (
                <img
                    key={i}
                    src={src}
                    alt={alt ?? `${title} ${i + 1}`}
                    className="w-full h-auto rounded-xl object-cover"
                    draggable={false}
                />
                ))}
            </div>
            </>
        )}

        {children}
        </div>
    );
    }
