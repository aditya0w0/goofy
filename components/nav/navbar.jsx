'use client';
import { useMobileLayout } from '../logic/mobileLayout';
import MobileNavbar from './logic/MobileNavbar';
import DesktopNav from './logic/DesktopNav';

export default function Navbar() {
  const { isMobile } = useMobileLayout();
  return isMobile ? <MobileNavbar /> : <DesktopNav />;
}
