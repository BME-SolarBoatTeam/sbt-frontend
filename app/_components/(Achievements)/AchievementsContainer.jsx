'use client';

import { CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import { useContext } from 'react';
import Container from '../(Layouts)/Container';
import { MobileContext } from '../Providers/Screen-provider';

const AchievementsContainer = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className="mx-auto w-full px-8 lg:w-[70vw] lg:px-0">
      {/* start */}
      <div className="grid-cols mx-auto grid w-fit grid-flow-row lg:w-auto lg:grid-cols-[0.8fr_1fr]">
        {!isMobile ? (
          <div className="mr-32 flex items-center justify-end">
            <Container className={'mx-0 grid h-fit max-w-48 grid-flow-row gap-3 p-6 text-2xl lg:w-auto'}>
              <p className="flex w-full place-items-center justify-center gap-3 text-center">
                <MapPinIcon size={16} /> Monaco
              </p>
              <p className="dark:text-bme-orange text-center text-xl">
                <span className="text-4xl font-semibold">5.</span>
                <br />
                helyezés
              </p>
              <p className="flex w-full place-items-center justify-center gap-3 text-center opacity-25">
                <CalendarDaysIcon size={16} /> 2024.12.12.
              </p>
            </Container>
          </div>
        ) : null}
        {!isMobile ? (
          <div className="relative grid h-fit grid-cols-[0.25fr_1fr]">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="relative w-fit">
              {!isMobile ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="19.375 32.77383041381836 71.85116577148438 71.85116577148438"
                  className="absolute top-1/2 -left-8 -translate-y-1/2 rotate-45"
                >
                  <path
                    d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
                    className="fill-bme-blue dark:fill-bme-orange"
                  />
                </svg>
              ) : null}
              <div className="relative *:rounded-xl">
                <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-black" />
                <h3 className="text-bme-white absolute bottom-2 w-full text-center text-2xl">Heading</h3>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/carousel/1kep.webp"
                  className="my-8 max-w-52 xl:max-w-[500px] xl:min-w-[500px]"
                  alt="Missing Alt!"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative grid grid-cols-[1px_250px] gap-6">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="my-8">
              <Container className={'max-w-[250px] p-4'}>
                <h1 className="mb-3 text-center text-lg">Monaco Solar Boat Challange 2024</h1>
                <p className="dark:text-bme-orange text-center text-xl">
                  <span className="font-semibold">5.</span> helyezés
                </p>
                {/* eslint-disable-next-line */}
                <img src="/images/carousel/1kep.webp" className="my-5 max-w-full rounded-xl" alt="Missing Alt!" />
                <div className="flex flex-row gap-3">
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>Monaco</Container>
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>2024.12.12.</Container>
                </div>
              </Container>
            </div>
          </div>
        )}
      </div>
      {/* end */}
      <div className="grid-cols mx-auto grid w-fit grid-flow-row lg:w-auto lg:grid-cols-[0.8fr_1fr]">
        {!isMobile ? (
          <div className="mr-32 flex items-center justify-end">
            <Container className={'mx-0 grid h-fit max-w-48 grid-flow-row gap-3 p-6 text-2xl lg:w-auto'}>
              <p className="flex w-full place-items-center justify-center gap-3 text-center">
                <MapPinIcon size={16} /> Monaco
              </p>
              <p className="dark:text-bme-orange text-center text-xl">
                <span className="text-4xl font-semibold">5.</span>
                <br />
                helyezés
              </p>
              <p className="flex w-full place-items-center justify-center gap-3 text-center opacity-25">
                <CalendarDaysIcon size={16} /> 2024.12.12.
              </p>
            </Container>
          </div>
        ) : null}
        {!isMobile ? (
          <div className="relative grid h-fit grid-cols-[0.25fr_1fr]">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 max-w-px" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="relative w-fit">
              {!isMobile ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="19.375 32.77383041381836 71.85116577148438 71.85116577148438"
                  className="absolute top-1/2 -left-8 -translate-y-1/2 rotate-45"
                >
                  <path
                    d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
                    className="fill-bme-blue dark:fill-bme-orange"
                  />
                </svg>
              ) : null}
              <div className="relative *:rounded-xl">
                <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-black" />
                <h3 className="text-bme-white absolute bottom-2 w-full text-center text-2xl">Heading</h3>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/carousel/1kep.webp"
                  className="my-8 max-w-52 xl:max-w-[500px] xl:min-w-[500px]"
                  alt="Missing Alt!"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative grid grid-cols-[1px_250px] gap-6">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 max-w-px" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="my-8">
              <Container className={'max-w-[250px] p-4'}>
                <h1 className="mb-3 text-center text-lg">Monaco Solar Boat Challange 2024</h1>
                <p className="dark:text-bme-orange text-center text-xl">
                  <span className="font-semibold">5.</span> helyezés
                </p>
                {/* eslint-disable-next-line */}
                <img src="/images/carousel/1kep.webp" className="my-5 max-w-full rounded-xl" alt="Missing Alt!" />
                <div className="flex flex-row gap-3">
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>Monaco</Container>
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>2024.12.12.</Container>
                </div>
              </Container>
            </div>
          </div>
        )}
      </div>
      <div className="grid-cols mx-auto grid w-fit grid-flow-row lg:w-auto lg:grid-cols-[0.8fr_1fr]">
        {!isMobile ? (
          <div className="mr-32 flex items-center justify-end">
            <Container className={'mx-0 grid h-fit max-w-48 grid-flow-row gap-3 p-6 text-2xl lg:w-auto'}>
              <p className="flex w-full place-items-center justify-center gap-3 text-center">
                <MapPinIcon size={16} /> Monaco
              </p>
              <p className="dark:text-bme-orange text-center text-xl">
                <span className="text-4xl font-semibold">5.</span>
                <br />
                helyezés
              </p>
              <p className="flex w-full place-items-center justify-center gap-3 text-center opacity-25">
                <CalendarDaysIcon size={16} /> 2024.12.12.
              </p>
            </Container>
          </div>
        ) : null}
        {!isMobile ? (
          <div className="relative grid h-fit grid-cols-[0.25fr_1fr]">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:bottom-0 before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="relative w-fit">
              {!isMobile ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="19.375 32.77383041381836 71.85116577148438 71.85116577148438"
                  className="absolute top-1/2 -left-8 -translate-y-1/2 rotate-45"
                >
                  <path
                    d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
                    className="fill-bme-blue dark:fill-bme-orange"
                  />
                </svg>
              ) : null}
              <div className="relative *:rounded-xl">
                <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-black" />
                <h3 className="text-bme-white absolute bottom-2 w-full text-center text-2xl">Heading</h3>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/carousel/1kep.webp"
                  className="my-8 max-w-52 xl:max-w-[500px] xl:min-w-[500px]"
                  alt="Missing Alt!"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative grid grid-cols-[1px_250px] gap-6">
            <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:bottom-0 before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
            <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
            <div className="my-8">
              <Container className={'max-w-[250px] p-4'}>
                <h1 className="mb-3 text-center text-lg">Monaco Solar Boat Challange 2024</h1>
                <p className="dark:text-bme-orange text-center text-xl">
                  <span className="font-semibold">5.</span> helyezés
                </p>
                {/* eslint-disable-next-line */}
                <img src="/images/carousel/1kep.webp" className="my-5 max-w-full rounded-xl" alt="Missing Alt!" />
                <div className="flex flex-row gap-3">
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>Monaco</Container>
                  <Container className={'w-full rounded-md p-1 text-center text-sm'}>2024.12.12.</Container>
                </div>
              </Container>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          alert('🐒 🐒 🐒 Majom vagy!! 🐒 🐒 🐒');
        }}
        className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit cursor-pointer items-center justify-between gap-1 rounded-full px-8 py-1 text-center text-sm lg:mt-12 lg:px-12 lg:text-xl"
      >
        További Események
      </button>
    </div>
  );
};

export default AchievementsContainer;
