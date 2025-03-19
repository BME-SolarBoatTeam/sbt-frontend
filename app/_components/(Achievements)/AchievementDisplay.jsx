'use client';

import { useContext } from 'react';
import { MobileContext } from '../Providers/Screen-provider';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const AchievementDisplay = ({ ctx, currentIndex, maxLength }) => {
  const isMobile = useContext(MobileContext);

  return !isMobile ? (
    <DesktopView ctx={ctx} currentIndex={currentIndex} maxLength={maxLength} />
  ) : (
    <MobileView ctx={ctx} currentIndex={currentIndex} maxLength={maxLength} />
  );
};

export default AchievementDisplay;
