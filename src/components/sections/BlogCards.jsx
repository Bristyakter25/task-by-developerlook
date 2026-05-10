import { useRef, useState } from 'react'
import { MoveUpRight } from 'lucide-react'
import { CiStopwatch } from 'react-icons/ci'

import img1 from "../../assets/images/blogImg1.jpg"
import img2 from "../../assets/images/blogImg2.jpg"
import img3 from "../../assets/images/blogImg3.jpg"

const cards = [
  {
    image: img1,
    author: 'Ray Saddiq',
    readTime: '3 mins',
    title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead',
    tag: null,
  },
  {
    image: img3,
    author: 'Ray Saddiq',
    readTime: '2 mins',
    title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion',
    tag: null,
  },
  {
    image: img2,
    author: 'Carrie Rose',
    readTime: '2 mins',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    tag: 'News',
  },
]

function BlogCard({ image, author, readTime, title, tag }) {
  const wrapperRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    
    <div
      ref={wrapperRef}
      className="group relative cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cursor-following arrow — now child of the full card */}
      <div
        className="pointer-events-none absolute z-20 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <div
          className="bg-[#B2F6E3] rounded-full p-9 lg:p-12"
          style={{
            transform: hovered ? 'scale(1)' : 'scale(0.6)',
            transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <MoveUpRight size={24} className="text-gray-900 font-extrabold " />
        </div>
      </div>

      
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:blur-sm group-hover:brightness-75 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Cards  */}
      <div className="py-4 pb-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 font-sans">
          <span className="bg-white py-2 rounded-3xl text-gray-600 text-[15px] leading-tight flex items-center gap-1.5">
            <img src={img2} alt={author} className="w-5 h-5 rounded-full" />
            {author}
          </span>
          <span className="flex text-[15px] bg-white px-3 py-2 rounded-3xl font-semibold items-center gap-1">
            <CiStopwatch /> {readTime}
          </span>
        </div>
        <p className="text-grey-900 text-2xl md:text-[23px] font-sans-primary font-medium leading-[0.95] tracking-tight">
          {title}
        </p>
      </div>
    </div>
  )
}

export function BlogCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
      {cards.map((card, i) => (
        <BlogCard key={i} {...card} />
      ))}
    </div>
  )
}