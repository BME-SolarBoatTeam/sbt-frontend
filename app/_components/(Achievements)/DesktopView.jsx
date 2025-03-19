'use client';

const DesktopView = ({ ctx }) => {
  return (
    <div className="relative grid h-fit grid-cols-[0.25fr_1fr]">
      <div className="dark:bg-bme-white/25 bg-bme-black/25 dark:before:bg-bme-dprimary before:bg-bme-lprimary max-w-px before:absolute before:h-1/2 before:w-5 before:-translate-x-1/2 before:content-['']" />
      <div className="bg-bme-blue dark:bg-bme-orange outline-bme-lprimary dark:outline-bme-dprimary absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full outline-8" />
      <div className="relative w-fit">
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
  );
};

export default DesktopView;
