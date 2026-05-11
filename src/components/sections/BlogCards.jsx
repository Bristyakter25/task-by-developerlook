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
      {/* Cursor-following arrow */}
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
          <MoveUpRight size={24} className="text-gray-900 font-extrabold" />
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
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(0)
  const dragStartX = useRef(0)
  const baseOffset = useRef(0)
  const isDragging = useRef(false)

  function getCardWidth() {
    const card = trackRef.current?.children[0]
    return card ? card.offsetWidth + 16 : 0
  }

  function goTo(index) {
    const clamped = Math.max(0, Math.min(index, cards.length - 1))
    setActiveIndex(clamped)
    const offset = clamped * getCardWidth()
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
      trackRef.current.style.transform = `translateX(-${offset}px)`
    }
  }

  function onMouseDown(e) {
    isDragging.current = true
    dragStartX.current = e.clientX
    baseOffset.current = activeIndex * getCardWidth()
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }
  function onMouseMove(e) {
    if (!isDragging.current || !trackRef.current) return
    const delta = e.clientX - dragStartX.current
    trackRef.current.style.transform = `translateX(${-baseOffset.current + delta}px)`
  }
  function onMouseUp(e) {
    if (!isDragging.current) return
    isDragging.current = false
    const delta = e.clientX - dragStartX.current
    if (delta < -50) goTo(activeIndex + 1)
    else if (delta > 50) goTo(activeIndex - 1)
    else goTo(activeIndex)
  }
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
    baseOffset.current = activeIndex * getCardWidth()
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }
  function onTouchMove(e) {
    if (!trackRef.current) return
    const delta = e.touches[0].clientX - touchStartX.current
    trackRef.current.style.transform = `translateX(${-baseOffset.current + delta}px)`
  }
  function onTouchEnd(e) {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -50) goTo(activeIndex + 1)
    else if (delta > 50) goTo(activeIndex - 1)
    else goTo(activeIndex)
  }

  return (
    <>
      {/* ── MOBILE: drag/swipe slider ── */}
      <div
        className="md:hidden overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          ref={trackRef}
          className="flex gap-4 px-6 will-change-transform cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[75vw]">
              <BlogCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots — mobile only */}
      <div className="md:hidden flex justify-center gap-[6px] mt-5 items-center">
        {cards.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full bg-black cursor-pointer transition-all duration-300 ${
              i === activeIndex ? 'w-9 opacity-100' : 'w-3.5 opacity-20'
            }`}
          />
        ))}
      </div>

      {/* ── DESKTOP: original 3-col grid, zero changes ── */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
        {cards.map((card, i) => (
          <BlogCard key={i} {...card} />
        ))}
      </div>
    </>
  )
}