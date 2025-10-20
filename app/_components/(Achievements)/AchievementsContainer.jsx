'use client';

import { mockUpAchievements } from '../../../lib/mockupData';
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
    </div>
  );
};

export default AchievementsContainer;
