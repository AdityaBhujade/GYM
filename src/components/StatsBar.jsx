import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 2400, suffix: '+', label: 'Elite Members' },
  { num: 45, suffix: '+', label: 'Programs' },
  { num: 12, suffix: '', label: 'Years Operating' },
  { num: 98, suffix: '%', label: 'Success Rate' },
]

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatItem({ num, suffix, label, active }) {
  const count = useCountUp(num, 1600, active)
  return (
    <div className={`stat-item ${active ? 'visible' : ''}`}>
      <div className="stat-num">
        {count.toLocaleString()}<span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-bar" ref={ref}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} active={active} />
        ))}
      </div>
    </section>
  )
}
