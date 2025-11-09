import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
          <div className="rounded-3xl bg-slate-900 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to build something exceptional?</h3>
              <p className="mt-2 text-slate-300 max-w-2xl">Let’s turn your bold idea into a product customers love. We’ll bring strategy, design, and engineering to the table.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-100">
              Get in touch <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
