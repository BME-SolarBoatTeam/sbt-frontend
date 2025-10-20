'use client';

import Link from 'next/link';
import { cn } from '../../../lib/utils';

const SponsorCard = ({ sponsorImage, sponsorURL, sponsorName, className, imageClassName, ...props }) => {
  return (
    <div
      className={cn(
        // világos háttér MINDKÉT témában
        'max-w-[260px] w-full rounded-2xl p-4 sm:p-5',
        'bg-white/85 ring-1 ring-black/10',
        'transition-shadow duration-300 hover:ring-black/20 hover:shadow-md',
        className
      )}
      {...props}
    >
      <Link
        href={sponsorURL || '#'}
        target={sponsorURL ? '_blank' : undefined}
        rel={sponsorURL ? 'noopener noreferrer' : undefined}
        className="block"
      >
        <div className="flex h-full items-center justify-center">
          {/* eslint-disable-next-line */}
          <img
            className={cn('h-auto w-full object-contain', imageClassName)}
            src={sponsorImage}
            alt={sponsorName}
          />
        </div>
      </Link>
    </div>
  );
};

export default SponsorCard;
