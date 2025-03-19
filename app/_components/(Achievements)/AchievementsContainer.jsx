'use client';

import { mockUpAchievements } from '~/lib/mockupData';
import Achievement from './AchievementDisplay';
import { toast } from 'sonner';

const AchievementsContainer = () => {
  const maxLength = mockUpAchievements.length;

  return (
    <div className="mx-auto w-full px-8 lg:w-[70vw] lg:px-0">
      <div className="grid-cols mx-auto grid w-fit grid-flow-row lg:w-auto lg:grid-cols-[0.8fr_1fr]">
        {mockUpAchievements.map((achievement, index) => {
          return <Achievement key={index} ctx={achievement} currentIndex={index} maxLength={maxLength} />;
        })}
      </div>
      <button
        onClick={() => {
          toast('❗ Ez a funkció még nem lett implementálva ❗');
        }}
        className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit cursor-pointer items-center justify-between gap-1 rounded-full px-8 py-1 text-center text-sm lg:mt-12 lg:px-12 lg:text-xl"
      >
        További Események
      </button>
    </div>
  );
};

export default AchievementsContainer;
