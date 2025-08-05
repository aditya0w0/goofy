export default function MobileHeroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 p-4 pb-20">
      <div className="w-full max-w-sm text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Build Something Great</h1>
        <p className="text-lg text-gray-400 mb-8">
          This will now be perfectly centered.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}
