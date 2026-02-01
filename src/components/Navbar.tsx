function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-blur text-black">
      <div className="max-w-8xl  mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-bold">
           <img src='./src/assets/logo.svg' className="pt-1" alt=''></img>
          </div>
          <span className="font-bold text-3xl tracking-tight">
           <span className="text-[#A05AFF] ">Craft</span><span className="text-[#1BCFB4]">Learn</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-600 border border-neutral-200 rounded-full px-4 py-2">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-green-200 transition">
            Courses
          </a>
          <a href="#" className="hover:text-neutral-900  dark:hover:text-green-200 transition">
            Mentors
          </a>
          <a href="#" className="hover:text-neutral-900  dark:hover:text-green-200 transition">
            About
          </a>
        </nav>

        {/* CTA or Sign In */}
        <button className="px-2 py-1 rounded-md bg-[#1bcfb4] tracking-tighter text-white cursor-pointer text-xl  hover:bg-accent transition">
          Start Learning
        </button>
      </div>
    </header>
  );
};
export default Navbar;
