import { motion } from 'framer-motion'
import { Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-300/40 to-blue-300/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-300/40 to-pink-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
              <Sparkles className="h-4 w-4" /> Next-gen Digital Innovation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Build the future with Nexrizen
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              We design and develop world-class digital products — from idea to launch. Strategy, design, and engineering combined to accelerate your vision.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition-colors"
              >
                <Rocket className="h-5 w-5" /> Start a project
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-white/60 backdrop-blur transition-colors"
              >
                See what we build
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-3xl font-extrabold text-slate-900">50+</div>
              <div className="text-slate-600">Products launched across startups and enterprises</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-xl backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 pointer-events-none" />
              <div className="grid grid-cols-3 gap-3">
                {["Strategy", "Design", "Engineering", "AI", "Cloud", "Mobile", "Web", "Data", "R&D"].map((tag) => (
                  <div key={tag} className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-700 shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
