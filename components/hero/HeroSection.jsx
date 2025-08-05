import React from 'react';
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-slate-950 -mt-16 pt-16 will-change-transform">
      {/* Background Gradient - optimized with transform3d for GPU acceleration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] transform-gpu"></div>

      {/* Content - LCP optimized */}
      <div className="relative z-10 text-center text-white">
        <h1
          className="text-4xl font-bold transform-gpu"
          style={{ fontDisplay: 'swap' }}
        >
          Welcome to Our Website
        </h1>
        <p className="mt-2 text-lg">We are glad to have you here.</p>
      </div>
    </section>
  );
}
