const CTA = () => {
  return (
    <section className="py-32 bg-linear-to-br from-[#A05AFF] to-[#1BCFB4] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold tracking-tighter mb-6">
          Learn skills that actually matter
        </h2>

        <p className="text-neutral-300 tracking-tight text-lg max-w-2xl mx-auto mb-10">
          CraftLearn helps you build strong fundamentals through guided lessons,
          hands-on projects, and mentorship from experienced professionals.
        </p>

        <button className="px-6 py-3 rounded-2xl bg-[#A05AFF] text-white text-base font-medium hover:bg-accent transition">
          Start learning today
        </button>
      </div>
    </section>
  )
}

export default CTA
