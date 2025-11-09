import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Fintech Superapp',
    sector: 'Finance',
    result: '3M+ users, PCI compliant, 99.99% uptime',
    gradient: 'from-sky-500 to-indigo-500'
  },
  {
    name: 'Healthcare Portal',
    sector: 'Health',
    result: 'HIPAA compliant, 40% faster onboarding',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'AI Content Engine',
    sector: 'Media',
    result: '10x content throughput, 70% cost reduction',
    gradient: 'from-fuchsia-500 to-rose-500'
  }
]

export default function Showcase() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Outcomes we delivered with partners across industries.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl opacity-30`} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.sector}</p>
                <p className="mt-4 text-slate-700">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
