import logo from "/static/logo.svg";
const Footer = () => {
  return (
    <footer className=" bg-[#f8f6f2]  border-t border-neutral-200">
     <div className="py-12  px-8">
       <div className="flex items-center justify-between">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <div className="font-bold text-2xl tracking-tight">
              <span className="text-[#A05AFF] ">Craft</span>
              <span className="text-[#1BCFB4]">Learn</span>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-1">
            Learning made practical and calm.
          </p>
          <p className="text-sm text-neutral-500 mt-1">9701 New Street Western Central London WC11 4XD</p>
          <p className="text-sm text-neutral-500 mt-1">Phone: +1 234 567 890</p>
          <p className="text-sm text-neutral-500 mt-1">Email: 0U2YV@example.com</p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-neutral-600">
          <div className="flex flex-col gap-2">
            <p className="text-xl tracking-tighter">Company</p>
            <a href="#" className="hover:text-neutral-900 transition">
              Careers
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              About us
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl tracking-tighter">Learn</p>
            <a href="#" className="hover:text-neutral-900 transition">
              Courses
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              Join as Mentor
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2  ">
          <p className="text-start text-xl tracking-tighter">
            Send us a message :
          </p>
          <input type="text" className="border border-neutral-400" />
          <button className=" items-center px-2 py-1 rounded-xl w-fit text-white cursor-pointer hover:bg-blue-600 bg-blue-500">
            Send
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-8 text-sm text-neutral-600 mt-4 py-2">
        {" "}
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>© CraftLearn 2026</span>
      </div>
     </div>
    </footer>
  );
};
<div></div>;
export default Footer;
