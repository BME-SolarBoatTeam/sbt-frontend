'use client';

import Container from '../(Layouts)/Container';

const MobileView = ({ ctx, currentIndex, maxLength }) => {
  return (
    <div className="relative grid grid-cols-[1px_250px] gap-6">
      {currentIndex === 0 ? (
        <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
      ) : null}
      {currentIndex !== maxLength - 1 && currentIndex !== 0 ? (
        <div className="dark:bg-bme-white/25 bg-bme-black/25 max-w-px" />
      ) : null}
      {currentIndex === maxLength - 1 ? (
        <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:bottom-0 before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
      ) : null}
      <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
      <div className="my-8">
        <Container className={'max-w-[250px] p-4'}>
          <h1 className="mb-3 text-center text-lg">{ctx.event}</h1>
          <p className="dark:text-bme-orange text-center text-xl">
            <span className="font-semibold">{ctx.position}.</span> helyezés
          </p>
          {/* eslint-disable-next-line */}
          <img
            src={ctx.eventImage}
            className="my-5 aspect-16/9 max-w-full rounded-xl object-cover"
            alt="Missing Alt!"
          />
          <div className="flex flex-row gap-3">
            <Container className={'w-full rounded-md p-1 text-center text-sm'}>{ctx.location}</Container>
            <Container className={'w-full rounded-md p-1 text-center text-sm'}>
              {new Date(ctx.date).toLocaleDateString('hu-HU')}
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MobileView;
