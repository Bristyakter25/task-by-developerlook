import { MoveUpRight, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Top strip */}
      {/* <header>
        <div className="bg-teal-200 my-2 p-2 rounded-3xl mx-3 overflow-hidden">
          <p className="text-center font-bold text-md whitespace-nowrap transition-transform duration-300 hover:-translate-y-4">
            Where your customers actually searching? Download the report
          </p>
        </div>
      </header> */}

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-bold tracking-tighter">
          Rise at Seven®
        </div>

        <ul className="hidden md:flex items-center  text-[15px] font-medium">
  <li className="flex items-center gap-1 cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">
    Services <Plus size={13} strokeWidth={3.2} />
  </li>
  <li className="flex items-center gap-1 cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">
    International <Plus size={13} strokeWidth={3.2} />
  </li>
  <li className="flex items-center gap-1 cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">
    About <Plus size={13} strokeWidth={3.2} />
  </li>
  <li className="relative cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">
    Work
    <span className="absolute -top-1 -right-1 bg-[#b4ff39] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight">
      25
    </span>
  </li>
  <li className="cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">Careers</li>
  <li className="cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">Blog</li>
  <li className="cursor-pointer px-3 py-[7px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-250">Webinar</li>
</ul>

        <button className="flex items-center gap-4 hover:rounded-xl bg-white text-black px-6 py-3 rounded-full font-bold  transition">
          Get In Touch
          <MoveUpRight size={20} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;