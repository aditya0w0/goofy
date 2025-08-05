import { Skeleton } from '../ui/skeleton';

export default function HeroSkeleton() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-slate-950 -mt-16 pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Content Skeleton */}
      <div className="relative z-10 text-center space-y-4">
        <Skeleton className="h-12 w-80 mx-auto bg-white/20" />
        <Skeleton className="h-6 w-60 mx-auto bg-white/10" />
      </div>
    </section>
  );
}
