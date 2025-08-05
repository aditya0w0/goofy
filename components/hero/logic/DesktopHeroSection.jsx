export default function DesktopHeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Build Something <span className="text-blue-600">Great</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Simple, powerful tools for modern development. Create amazing
        experiences with our comprehensive suite of developer tools.
      </p>
      <div className="flex gap-6">
        <button className="bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg">
          Get Started
        </button>
        <button className="border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-8 max-w-4xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
          <div className="text-gray-600">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
          <div className="text-gray-600">Developers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Support</div>
        </div>
      </div>
    </section>
  );
}
