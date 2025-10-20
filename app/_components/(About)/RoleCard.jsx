    // RoleCard.jsx
    export default function RoleCard({
    title,
    points = [],
    images = [],
    description,          // ← ÚJ (string vagy string[])
    children,             // ← opcionális extra tartalom
    className = '',
    }) {
    const paragraphs = Array.isArray(description) ? description : (description ? [description] : []);

    return (
        <div className={className}>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        {/* Ha van description → bekezdések, különben a pontok listája */}
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

        {/* Képek (ha vannak) */}
        {images?.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {images.map(({ src, alt }, i) => (
                <img key={i} src={src} alt={alt} className="w-full h-auto rounded-xl object-cover" />
            ))}
            </div>
        )}

        {children}
        </div>
    );
    }
