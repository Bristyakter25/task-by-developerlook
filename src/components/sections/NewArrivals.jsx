import { MoveUpRight } from 'lucide-react'

import img from "../../assets/images/newArrival.jpg"
import { BlogCards } from './BlogCards'
export default function NewArrivals() {
  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black flex items-center flex-wrap">
          What's
          <span className="inline-block mx-4">
            <img
              src={img}
              alt="Team working"
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover shadow-sm"
            />
          </span>
          New
        </h1>
       <button className="group relative flex mt-7 items-center gap-2 overflow-hidden bg-white text-black px-5 py-3 rounded-full font-bold hover:rounded-xl transition-[border-radius] duration-300">

  <span className="relative overflow-hidden h-[1.2em] flex items-center">
    {/* Flies out upward on hover */}
    <span className="block font-sans-primary font-medium whitespace-nowrap translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
    Explore More Thoughts
    </span>
    {/* Enters from below and stays on hover */}
    <span className="absolute font-sans-primary font-medium inset-0 flex items-center whitespace-nowrap translate-y-[110%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
     Explore More Thoughts
    </span>
  </span>

  <span className="inline-flex transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
    <MoveUpRight size={18} />
  </span>

</button>
      </div>
       <div className="w-full h-[1px] bg-gray-400 mb-10" />

<BlogCards></BlogCards>
       
    </div>
  )
}
