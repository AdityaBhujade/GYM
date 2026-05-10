const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayShort = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const classColors = {
  crossfit: { bar: '#C1272D', label: '#C1272D', bg: 'rgba(193,39,45,0.07)' },
  strength: { bar: '#E8A020', label: '#E8A020', bg: 'rgba(232,160,32,0.07)' },
  cardio:   { bar: '#3ABFA0', label: '#3ABFA0', bg: 'rgba(58,191,160,0.07)' },
  yoga:     { bar: '#8A7FB5', label: '#8A7FB5', bg: 'rgba(138,127,181,0.07)' },
  boxing:   { bar: '#C07BE0', label: '#C07BE0', bg: 'rgba(192,123,224,0.07)' },
}

const slots = [
  {
    period: 'MORNING',
    time: '06:00 AM',
    classes: [
      { day: 'MON', name: 'CrossFit WOD', coach: 'Alex M.', dur: '60 min', type: 'crossfit', spots: 8 },
      { day: 'TUE', name: 'Powerlifting', coach: 'Jade L.', dur: '75 min', type: 'strength', spots: 6 },
      { day: 'WED', name: 'Cardio Burn', coach: 'Ryan T.', dur: '45 min', type: 'cardio', spots: 12 },
      { day: 'THU', name: 'CrossFit WOD', coach: 'Alex M.', dur: '60 min', type: 'crossfit', spots: 8 },
      { day: 'FRI', name: 'Boxing', coach: 'Maria C.', dur: '60 min', type: 'boxing', spots: 10 },
      { day: 'SAT', name: 'Open Lifting', coach: 'Staff', dur: '90 min', type: 'strength', spots: 20 },
    ],
  },
  {
    period: 'MID-MORNING',
    time: '08:30 AM',
    classes: [
      { day: 'MON', name: 'Yoga Recovery', coach: 'Priya D.', dur: '60 min', type: 'yoga', spots: 14 },
      { day: 'TUE', name: 'Cardio Burn', coach: 'Ryan T.', dur: '45 min', type: 'cardio', spots: 12 },
      { day: 'WED', name: 'CrossFit WOD', coach: 'Alex M.', dur: '60 min', type: 'crossfit', spots: 8 },
      { day: 'THU', name: 'Powerlifting', coach: 'Jade L.', dur: '75 min', type: 'strength', spots: 6 },
      { day: 'FRI', name: 'Yoga Recovery', coach: 'Priya D.', dur: '60 min', type: 'yoga', spots: 14 },
      { day: 'SAT', name: 'Boxing', coach: 'Maria C.', dur: '60 min', type: 'boxing', spots: 10 },
    ],
  },
  {
    period: 'AFTERNOON',
    time: '12:00 PM',
    classes: [
      { day: 'MON', name: 'Cardio Burn', coach: 'Ryan T.', dur: '45 min', type: 'cardio', spots: 12 },
      { day: 'TUE', name: 'Boxing', coach: 'Maria C.', dur: '60 min', type: 'boxing', spots: 10 },
      { day: 'THU', name: 'Yoga Recovery', coach: 'Priya D.', dur: '60 min', type: 'yoga', spots: 14 },
      { day: 'FRI', name: 'Powerlifting', coach: 'Jade L.', dur: '75 min', type: 'strength', spots: 6 },
    ],
  },
  {
    period: 'EVENING',
    time: '06:00 PM',
    classes: [
      { day: 'MON', name: 'Powerlifting', coach: 'Jade L.', dur: '75 min', type: 'strength', spots: 6 },
      { day: 'TUE', name: 'CrossFit WOD', coach: 'Alex M.', dur: '60 min', type: 'crossfit', spots: 8 },
      { day: 'WED', name: 'Boxing', coach: 'Maria C.', dur: '60 min', type: 'boxing', spots: 10 },
      { day: 'THU', name: 'Cardio Burn', coach: 'Ryan T.', dur: '45 min', type: 'cardio', spots: 12 },
      { day: 'FRI', name: 'CrossFit WOD', coach: 'Alex M.', dur: '60 min', type: 'crossfit', spots: 8 },
    ],
  },
]

function ClassCard({ cls }) {
  const c = classColors[cls.type]
  return (
    <div className="sched-card" style={{ borderLeft: `3px solid ${c.bar}`, background: c.bg }}>
      <div className="sched-class-type" style={{ color: c.label }}>{cls.type.toUpperCase()}</div>
      <div className="sched-class-name">{cls.name}</div>
      <div className="sched-class-meta">
        <span className="sched-coach">{cls.coach}</span>
        <span className="sched-dur">{cls.dur}</span>
      </div>
      <div className="sched-spots">
        <svg width="9" height="9" viewBox="0 0 10 10" style={{ marginRight: 5, opacity: 0.5 }}>
          <circle cx="5" cy="3" r="2.2" fill="currentColor"/>
          <path d="M1 9.5c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="currentColor" opacity=".5"/>
        </svg>
        {cls.spots} spots
      </div>
    </div>
  )
}

function EmptyCell() {
  return <div className="sched-empty" />
}

export default function Schedule() {
  return (
    <section className="schedule" id="classes">
      <div className="schedule-inner">

        {/* Header */}
        <div style={{ position: 'relative', marginBottom: 56 }}>
          <div className="section-label">Weekly Timetable</div>
          <h2 className="section-heading">CLASS<br />SCHEDULE</h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 14, color: 'var(--text-muted)', marginTop: 16, maxWidth: 480, lineHeight: 1.7 }}>
            Every session is coached, capped, and structured for real results. Book your spot — classes fill fast.
          </p>
          <div className="section-number" style={{ right: 0, top: -10 }}>03</div>
        </div>

        {/* Legend */}
        <div className="sched-legend">
          {Object.entries(classColors).map(([key, val]) => (
            <div key={key} className="sched-legend-item">
              <span className="sched-legend-dot" style={{ background: val.bar }} />
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Schedule board */}
        <div className="sched-board">
          {/* Day headers */}
          <div className="sched-day-headers">
            <div className="sched-period-col" />
            {dayShort.map((d, i) => (
              <div key={d} className="sched-day-header">
                <span className="sched-day-abbr">{d}</span>
                <span className="sched-day-full">{days[i]}</span>
              </div>
            ))}
          </div>

          {/* Rows by time slot */}
          {slots.map((slot) => (
            <div key={slot.time} className="sched-row">
              {/* Period label + time */}
              <div className="sched-period-col">
                <div className="sched-period-label">{slot.period}</div>
                <div className="sched-period-time">{slot.time}</div>
              </div>

              {/* Day cells */}
              {dayShort.map((d) => {
                const cls = slot.classes.find(c => c.day === d)
                return (
                  <div key={d} className="sched-cell">
                    {cls ? <ClassCard cls={cls} /> : <EmptyCell />}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="sched-footer">
          <p className="sched-note">
            All classes require pre-registration. Walk-ins accommodated based on availability.
          </p>
          <a href="#contact" className="btn-ghost">View Full Schedule</a>
        </div>
      </div>
    </section>
  )
}
