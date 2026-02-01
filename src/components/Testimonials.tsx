type Testimonial = {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Computer Science Student",
    quote:
      "CraftLearn helped me finally understand concepts I was stuck on for months. The explanations are calm and practical.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Frontend Developer",
    quote:
      "The project-based approach made learning feel natural. I stopped memorizing and started building.",
  },
  {
    name: "Rohan Desai",
    role: "Engineering Graduate",
    quote:
      "The platform feels thoughtfully designed. It doesn’t rush you, and that makes a huge difference.",
  },
]

const Testimonials = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Loved by learners
          </h2>
          <p className="text-neutral-600 text-lg">
            Students and professionals trust CraftLearn to build skills that
            actually stick.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-blue-100 p-8 rounded-2xl border border-neutral-200 shadow-2xl"
            >
              <p className="text-neutral-700 tracking-tight leading-relaxed mb-6">
                “{t.quote}”
              </p>

              <div>
                <p className="font-semibold tracking-tighter">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
