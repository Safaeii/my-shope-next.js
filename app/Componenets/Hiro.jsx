


export default function Hero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-slate-950 px-6 flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Build something amazing
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
          Build Your
          <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Future With Us
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg leading-7 text-gray-400 mb-8">
          Discover amazing products, build better experiences,
          and turn your ideas into something people love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur">
            Explore Products
          </button>

        </div>

      </div>
    </section>
  );
}

