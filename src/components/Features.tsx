const features = [
  {
    title: "Mentor-Led Learning",
    description:
      "Learn from experienced instructors who guide you with clarity, patience, and real-world context.",
    featurestyle: "bg-blue-100 ",
    shape: "bg-[#A05AFF]",
    icon:'./public/static/tutor.svg'
  
  },
  {
    title: "Project-Based Courses",
    description:
      "Every concept is reinforced by hands-on projects so you learn by building, not just watching.",
    featurestyle: "bg-purple-100 ",
    shape: "bg-violet-600",
    icon:'./public/static/project.svg'
  },

  {
    title: "Structured Learning Paths",
    description:
      "Carefully designed roadmaps help you progress step by step without confusion or overwhelm.",
    featurestyle: "bg-pink-100 ",
    shape: "bg-[#A05AFF]",
    icon:'./public/static/roadmap.svg'
  },
  {
    title: "Calm Learning Environment",
    description:
      "A distraction-free interface designed to help you focus deeply and learn effectively.",
    featurestyle: "bg-green-100 ",
    shape: "bg-[#1BCFB4]",
    icon:'./public/static/calm.svg'
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            A better way to learn technology
          </h2>
          <p className="text-neutral-600 text-xl">
            CraftLearn is designed around how people actually learn — slowly,
            clearly, and with real practice.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`relative p-8 shadow-2xl rounded-xl border border-neutral-200 ${feature.featurestyle}`}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-6 text-xl">
                <img src={feature.icon} alt="no" />
              </div>

              <h3 className="text-2xl tracking-tighter font-semibold mb-3">{feature.title}</h3>

              <p className="text-neutral-600 tracking-tight leading-relaxed">
                {feature.description}
              </p>
                 <div
              className={`absolute w-24 h-24 ${feature.shape} top-0 right-0 rounded-bl-full opacity-10`}
            ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

