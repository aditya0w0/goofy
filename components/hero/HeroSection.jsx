'use client';
import { useMobileLayout } from '../logic/mobileLayout';
import MobileHeroSection from './logic/MobileHeroSection';
import DesktopHeroSection from './logic/DesktopHeroSection';

export default function HeroSection() {
  const { isMobile } = useMobileLayout();
  return isMobile ? <MobileHeroSection /> : <DesktopHeroSection />;
}
