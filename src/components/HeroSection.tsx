const Hero = () => {
  return (
    <section className=" bg-linear-to-br  from-[#A05AFF] to-[#1BCFB4] text-white">
      <div className="max-w-6xl mx-auto  px-8 py-20 grid grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="">
          <h1 className="font-semibold text-5xl leading-tight tracking-tight mb-6">
           <span className="text-[#1bcfb4]"> Learn</span> <span className="text-purple-300">Technology.</span><br />
            Build With Confidence.
          </h1>

          <p className="text-lg text-neutral-100 max-w-xl mb-10">
            CraftLearn is a calm, mentor-led platform for learning software
            and technology through structured lessons and real-world projects.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-primary text-white tracking-tight text-2xl font-medium hover:bg-blue-600/10 transition">
              Start Learning!
            </button>

            <button className="px-6 py-3 rounded-lg bg-transparent text-white tracking-tight text-2xl font-medium border border-neutral-300 cursor-pointer hover:bg-neutral-300/10 transition">
              View Courses
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative ">
          <div className="absolute inset-0 w-full rounded-2xl bg-linear-to-tr from-primary/20 to-secondary/20" />
           <img src="./src/assets/image.png" className="float w-fit rounded-xl" alt="" />
          {/* Floating Card */}
          <div className="absolute bottom-0 left-40 bg-transparent backdrop-blur rounded-xl shadow-lg px-6 py-2">
            <p className="text-sm font-medium text-neutral-white">
              Mentor-led learning
            </p>
            <p className="text-xs text-neutral-100 mt-1">
              Structured • Calm • Practical
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
