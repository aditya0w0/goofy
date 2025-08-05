'use client';
import { useState, useEffect } from 'react';
import NavbarSkeleton from './nav/NavbarSkeleton';
import HeroSkeleton from './hero/HeroSkeleton';
import Navbar from './nav/navbar';
import HeroSection from './hero/HeroSection';

export default function PageLoader() {
  const [loading, setLoading] = useState(false); // Start with false
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    // Detect slow connection using Network Information API
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const isSlowConnection =
      connection &&
      (connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.saveData === true ||
        connection.downlink < 1.5);

    if (isSlowConnection) {
      setShowSkeleton(true);
      setLoading(true);

      // For slow connections, show skeleton for a bit longer
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }

    // For fast connections, load immediately without skeleton
    setLoading(false);
  }, []);

  if (loading && showSkeleton) {
    return (
      <div className="min-h-screen">
        <NavbarSkeleton />
        <HeroSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
