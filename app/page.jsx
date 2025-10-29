import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import { InfiniteSlider } from '../components/ui/infinite-slider';
import { Separator } from '../components/ui/separator';
import ExploreFlagLink from './_components/(Landing)/ExploreFlagLink';
import FilmStripContainer from './_components/(Landing)/FilmStripContainer';
import FilmStripElement from './_components/(Landing)/FilmStripElement';
import GroupDisplay from './_components/(Landing)/GroupDisplay';
import HeroScreen from './_components/(Landing)/HeroPage';
import NewsDisplay from './_components/(Landing)/NewsDisplay';
import ProjectContainer from './_components/(Landing)/ProjectContainer';
import Container from './_components/(Layouts)/Container';
import PageLayout from './_components/(Layouts)/PageLayout';

export default function Home() {
  return (
    <PageLayout className="mx-auto overflow-x-hidden">
      <HeroScreen />

      <div
        id="page-container"
        className="dark:bg-bme-dprimary bg-bme-lprimary relative grid grid-flow-row gap-12 lg:gap-32"
      >
        <Container
          className="
            mt-12 flex h-fit w-[85vw] flex-col gap-8 overflow-clip p-8 px-8 lg:w-[60vw] 2xl:flex-row
            rounded-3xl ring-1 ring-black/10 dark:ring-white/15
            bg-gradient-to-r
            from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
            dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
            text-white
          "
        >
          <div className="relative mt-0 h-full w-full px-1.5 lg:my-auto lg:py-8 lg:pt-8">
            <Image
              src="/images/this_is_us.webp"
              alt="CSAPAT (front)"
              className="absolute top-1/2 left-1/2 z-1 aspect-16/11 -translate-x-1/2 -translate-y-1/2 self-center rounded-2xl lg:w-96 lg:max-w-96"
              width={384}
              height={264}
              priority={false}
              loading="lazy"
            />
            <Image
              src="/images/this_is_us.webp"
              alt="CSAPAT (back)"
              className="mx-auto aspect-16/11 rounded-2xl blur-lg lg:h-fit lg:w-96 lg:max-w-96"
              width={384}
              height={264}
              priority={false}
              loading="lazy"
            />
          </div>

          <div className="my-auto flex h-full flex-col items-center justify-center gap-3 pt-0 lg:p-0">
            <h3 className="text-center text-xl lg:text-3xl">Kik vagyunk mi?</h3>
            <p className="text-justify text-xs font-extralight md:mx-auto md:text-base">
            A BME Solar Boat Team egy 2014-ben alapított versenycsapat, ami eredetileg gépészmérnök hallgatókból állt, de mára már a BME számos más karáról is vannak tagjaink. Egyetemistákból álló csapatunk célja napenergiával hajtott versenyhajók fejlesztése. Fontos számunkra a fejlődés  mind technikai szinten, mind csapatmunka szempontjából. Második generációs hajónkkal több nemzetközi versenyen is értünk el kimagasló eredményeket, többek között Monacoban, Németországban és a Balatonon is. Hiszünk abban, hogy a jövő a fenntartható technológiáké, és minden nap azon dolgozunk, hogy ezt a jövőt mi is alakítsuk.            </p>
            <Link
              href={'/aboutus#kik-vagyunk-mi'}
              className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
            >
              Tudj meg többet rólunk
              <ChevronRight size={16} className="block lg:hidden" />
              <ChevronRight className="hidden lg:block" />
            </Link>
          </div>
        </Container>

        <FilmStripContainer className={'w-screen'}>
          <InfiniteSlider gap={0} duration={60}>
            <div className="flex w-fit shrink-0">
              {Array.from({ length: 12 }, (_, i) => i).map((i) => (
                <FilmStripElement key={i} imageURL={`/images/carousel/${i + 1}kep.webp`} />
              ))}
            </div>
          </InfiniteSlider>
        </FilmStripContainer>

        <GroupDisplay />
        <ProjectContainer />

        <Container className={'lg:p8 mb-12 h-fit w-[85vw] gap-4 px-4 py-8 lg:w-[60vw] lg:p-8'}>
          <h1 className="mb-4 text-center text-xl lg:text-3xl">Fedezd fel</h1>
          <div className="mx-auto flex w-full flex-wrap justify-center gap-4 lg:gap-6">
            <ExploreFlagLink 
              href="/aboutus#versenyeink"
              text={'Bővebben versenyeinkről >'} 
              imgAlt={'Versenyeink'} 
              imgSrc={'/more/button1.webp'} 
            />
            <ExploreFlagLink
              href="/members"
              text={'Bővebben tagjainkról >'}
              imgAlt={'Tagjaink'}
              imgSrc={'/more/button2.webp'}
            />
            <ExploreFlagLink
              href="/gallery"
              text={'Bővebben galériánkról >'}
              imgAlt={'Versenyeink'}
              imgSrc={'/more/button3.webp'}
            />
            <ExploreFlagLink
              href="/sponsors"
              text={'Bővebben szponzorainkról >'}
              imgAlt={'Szponzorok'}
              imgSrc={'/more/button4.webp'}
            />
            <ExploreFlagLink
              href="/aboutus#achievements"
              text={'Bővebben eredményekeinkről >'}
              imgAlt={'Eredményeink'}
              imgSrc={'/more/button5.webp'}
            />
          </div>

          <div className="mx-auto my-8 max-w-[800px]">
            <Separator className="bg-bme-black/50 dark:bg-bme-white/50" />
          </div>

          <div className="flex flex-col lg:gap-8">
            <h1 className="text-center text-xl lg:text-left lg:text-3xl">Legfrissebb hírek</h1>
            <NewsDisplay />
            <Link
              href={'/news'}
              className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
            >
              Tovább az összes hírhez
              <ChevronRight size={16} className="block lg:hidden" />
              <ChevronRight className="hidden lg:block" />
            </Link>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
