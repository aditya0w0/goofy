import { Skeleton } from '../ui/skeleton';

export default function NavbarSkeleton() {
  return (
    <nav className="sticky top-0 bg-white/10 backdrop-blur-md w-full md:mt-2 max-w-4xl mx-auto md:rounded-md shadow-sm z-50">
      <div className="flex px-6 py-2 items-center">
        {/* Logo skeleton */}
        <div className="flex-1">
          <Skeleton className="h-5 w-10" />
        </div>

        {/* Desktop nav skeleton */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex md:flex-row items-center gap-x-4">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>

        {/* Right side skeleton */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-x-4">
            <Skeleton className="hidden md:block h-9 w-24 rounded-md" />
            <Skeleton className="md:hidden h-6 w-6 rounded" />
          </div>
        </div>
      </div>
    </nav>
  );
}
