export default function HeroSkeleton() {
  return (
    <section className="text-center py-20 animate-pulse">
      {/* Title skeleton */}
      <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-4"></div>
      
      {/* Subtitle skeleton */}
      <div className="h-6 w-80 bg-gray-200 rounded mx-auto"></div>
    </section>
  );
}
