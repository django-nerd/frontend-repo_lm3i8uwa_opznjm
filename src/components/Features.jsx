import { Code2, ShieldCheck, Zap, Globe2 } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Full-stack web and mobile development with modern frameworks and cloud-native architectures.'
  },
  {
    icon: Zap,
    title: 'AI + Automation',
    desc: 'Applied AI, ML, and workflow automation to unlock efficiency and new customer experiences.'
  },
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    desc: 'Privacy, compliance, and robust DevSecOps baked into every layer of the stack.'
  },
  {
    icon: Globe2,
    title: 'Scalable Infrastructure',
    desc: 'Global-ready deployments, observability, and performance tuning from day one.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">End-to-end capabilities to take you from concept to scale.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
