import React, { useState, useEffect, useRef } from 'react';
import './Calendar.css';

function fmt(d) {
  if (!d) return '';
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}

function monthMatrix(year, month) {
  // Return a 6x7 matrix of Date objects covering the full grid
  const first = new Date(year, month, 1);
  const startDay = first.getDay(); // 0..6 (Sun..Sat)
  const days = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const weeks = [];
  // build 6 weeks to keep predictable layout
  for (let w = 0; w < 6; w++) {
    const week = new Array(7).fill(null);
    for (let d = 0; d < 7; d++) {
      const idx = w * 7 + d;
      const cellIndex = idx - startDay;
      if (cellIndex < 0) {
        // previous month
        const val = prevDays + cellIndex + 1;
        week[d] = new Date(year, month - 1, val);
      } else if (cellIndex >= 0 && cellIndex < days) {
        week[d] = new Date(year, month, cellIndex + 1);
      } else {
        // next month
        const val = cellIndex - days + 1;
        week[d] = new Date(year, month + 1, val);
      }
    }
    weeks.push(week);
  }
  return weeks;
}

export default function Calendar({ mode = 'range', initialStart = null, initialEnd = null, onClose, onConfirm }) {
  const today = new Date();
  const [leftMonth, setLeftMonth] = useState(startOfMonth(today));
  const [start, setStart] = useState(initialStart ? new Date(initialStart) : null);
  const [end, setEnd] = useState(initialEnd ? new Date(initialEnd) : null);
  const overlayRef = useRef();

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function pickDay(d) {
    if (!d) return;
    if (mode === 'single') {
      setStart(d);
      setEnd(null);
      onConfirm && onConfirm(d);
      onClose && onClose();
      return;
    }
    // range mode
    if (!start || (start && end)) {
      setStart(d);
      setEnd(null);
    } else {
      if (d < start) {
        setEnd(start);
        setStart(d);
      } else {
        setEnd(d);
      }
    }
  }

  function isInRange(d) {
    if (!start) return false;
    if (!end) return d.getTime() === start.getTime();
    return d >= start && d <= end;
  }

  function applyConfirm() {
    onConfirm && onConfirm(start, end);
    onClose && onClose();
  }

  function presets(name) {
    const now = new Date();
    let s = null, e = null;
    switch (name) {
      case 'Hoje': s = new Date(now); e = new Date(now); break;
      case 'Ontem': s = new Date(now); s.setDate(now.getDate() - 1); e = new Date(s); break;
      case 'Esta semana': {
        const d = new Date(now); const diff = d.getDay(); s = new Date(d); s.setDate(d.getDate() - diff); e = new Date(now); break;
      }
      case 'Este mês': s = new Date(now.getFullYear(), now.getMonth(), 1); e = new Date(now.getFullYear(), now.getMonth()+1, 0); break;
      case 'Últimos 30 dias': e = new Date(now); s = new Date(now); s.setDate(now.getDate() - 30); break;
      default: return;
    }
    setStart(s); setEnd(e);
  }

  return (
    <div className="calendar-overlay">
      <div className="calendar-card" ref={overlayRef} role="dialog">
        <div className="calendar-left">
          <div className="calendar-presets">
            <button onClick={() => presets('Hoje')}>Select Item</button>
            <button onClick={() => presets('Ontem')}>Ontem</button>
            <button onClick={() => presets('Esta semana')}>Esta semana</button>
            <button onClick={() => presets('Esta semana')}>Semana anterior</button>
            <button onClick={() => presets('Este mês')}>Este mês</button>
            <button onClick={() => presets('Este mês')}>Mês anterior</button>
            <button onClick={() => presets('Últimos 30 dias')}>Últimos 30 dias</button>
          </div>
        </div>

        <div className="calendar-main">
          <div className="calendar-months">
            {[0,1].map((off)=>{
              const m = addMonths(leftMonth, off);
              const weeks = monthMatrix(m.getFullYear(), m.getMonth());
              return (
                <div className="cal-month" key={off}>
                  <div className="cal-header">
                    <button className="nav" onClick={()=>setLeftMonth(addMonths(leftMonth,-1))} aria-label="Prev">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" aria-hidden>
                        <path d="M15 6 L9 12 L15 18" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </button>
                    <div className="cal-title">{m.toLocaleString(undefined,{month:'long'})} {m.getFullYear()}</div>
                    <button className="nav" onClick={()=>setLeftMonth(addMonths(leftMonth,1))} aria-label="Next">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" aria-hidden>
                        <path d="M9 6 L15 12 L9 18" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </button>
                  </div>
                  <div className="cal-weekdays">
                    {['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d=> <div key={d} className="wd">{d}</div>)}
                  </div>
                  <div className="cal-days">
                    {weeks.map((w,wi)=> (
                      <div className="cal-week" key={wi}>
                        {w.map((day,di)=> {
                          const isToday = day && day.toDateString()===new Date().toDateString();
                          const disabled = day && day.getMonth() !== m.getMonth();
                          const isStart = start && day && day.getTime() === start.getTime();
                          const isEnd = end && day && day.getTime() === end.getTime();
                          const inRange = day && isInRange(day);
                          const classes = ['cal-day'];
                          if (disabled) classes.push('disabled');
                          if (inRange) classes.push('in-range');
                          if (isStart) classes.push('start');
                          if (isEnd) classes.push('end');
                          if (isToday) classes.push('today');
                          return (
                            <div key={di} className={classes.join(' ')} onClick={()=>day && pickDay(day)}>
                              {day? day.getDate(): ''}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="calendar-footer">
            <div className="calendar-inputs">
              <input readOnly value={fmt(start)} placeholder="dd/mm/yyyy" />
              <span className="sep">-</span>
              <input readOnly value={fmt(end)} placeholder="dd/mm/yyyy" />
            </div>
            <div className="calendar-actions">
              <button className="btn-outline" onClick={()=>{ setStart(null); setEnd(null); onClose && onClose(); }}>Fechar</button>
              <button className="btn-primary" onClick={applyConfirm}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
