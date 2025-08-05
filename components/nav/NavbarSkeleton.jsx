export default function NavbarSkeleton() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto animate-pulse">
      {/* Logo skeleton */}
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
      
      {/* Navigation skeleton */}
      <div className="flex items-center gap-8">
        <div className="h-5 w-12 bg-gray-200 rounded"></div>
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
        <div className="h-5 w-12 bg-gray-200 rounded"></div>
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>
    </nav>
  );
}
