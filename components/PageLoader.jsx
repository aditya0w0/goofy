import Navbar from './nav/navbar';
import HeroSection from './hero/HeroSection';

export default function PageLoader() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}
