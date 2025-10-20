'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { groupData } from '../../../lib/mockupData';
import GroupCard from './GroupCard';
import GroupSwiper from './GroupSwiper';
import { MobileContext } from '../Providers/Screen-provider';
import Container from '../(Layouts)/Container';

const GroupDisplay = () => {
  const isMobile = useContext(MobileContext);

  return (
    <>
      {isMobile ? (
        <Container
          className="
            w-[85vw] justify-center gap-8 px-4 py-8
            rounded-3xl ring-1 ring-black/10 dark:ring-white/15
            bg-gradient-to-r
            from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
            dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
            dark:text-white
          "
        >
          <h1 className="text-center text-xl lg:text-3xl text-white">
            Csapatunk felépítése
          </h1>

          {/* minden más szöveg marad alapból fekete világos módban */}
          <GroupSwiper customArray={groupData} />
        </Container>
      ) : (
        <Container
          className="
            w-[70vw] justify-center gap-8 p-8 lg:grid lg:w-fit
            rounded-3xl ring-1 ring-black/10 dark:ring-white/15
            bg-gradient-to-r
            from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
            dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
            dark:text-white
          "
        >
          <h1 className="text-center text-xl lg:text-3xl text-white">
            Csapatunk felépítése
          </h1>

          <div className="grid w-fit grid-cols-3 gap-4">
            {groupData.map((group, idx) => (
              <GroupCard
                key={idx}
                descriptionOfTheGroup={group.descriptionOfTheGroup}
                imageSource={group.imageSource}
                nameOfTheGroup={group.nameOfTheGroup}
              />
            ))}
          </div>

          <Link
            href={'/aboutus#csapatunk-felepitese'}
            className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
          >
            Tudj meg többet rólunk
            <ChevronRight size={16} className="block lg:hidden" />
            <ChevronRight className="hidden lg:block" />
          </Link>
        </Container>
      )}

    </>
  );
};

export default GroupDisplay;
