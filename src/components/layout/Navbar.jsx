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
      <nav className="flex items-center justify-between px-6 py-6">
        <div className="text-3xl font-semibold tracking-tighter">
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

       <button className="group relative flex items-center gap-2 overflow-hidden bg-white text-black px-4 py-3 rounded-full font-bold hover:rounded-xl transition-[border-radius] duration-300">

  <span className="relative overflow-hidden h-[1.2em] flex items-center">
    {/* Flies out upward on hover */}
    <span className="block whitespace-nowrap translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
      Get In Touch
    </span>
    {/* Enters from below and stays on hover */}
    <span className="absolute inset-0 flex items-center whitespace-nowrap translate-y-[110%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
      Get In Touch
    </span>
  </span>

  <span className="inline-flex transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
    <MoveUpRight size={18} />
  </span>

</button>
      </nav>
    </>
  );
};

export default Navbar;

