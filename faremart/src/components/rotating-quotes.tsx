"use client";

import { useEffect, useRef, useState } from 'react';

const QUOTES = [
  'Faremart brings everyday essentials to our community with care and consistency.',
  'From friendly service to fair prices — Faremart is built around people, not profit.',
  'We focus on keeping our prices low and our community happy.',
  'Official Harvesta subsidiary since 2024.',
];

export default function RotatingQuotes({ interval = 10000 }: { interval?: number }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const len = QUOTES.length;

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, interval);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goTo(i: number) {
    setIndex(i);
    startTimer();
  }

  return (
    <section className="w-full py-2 md:py-4 -mt-36 md:-mt-48">
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <div className="h-20 md:h-24 relative">
          {QUOTES.map((q, i) => (
            <p
              key={i}
              className={`absolute inset-0 flex items-center justify-center text-center px-6 text-sm md:text-lg transition-opacity duration-700 ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <span aria-live={i === index ? 'polite' : 'off'} className="max-w-3xl">
                {q}
              </span>
            </p>
          ))}
        </div>

        {/* Dots */}
  <div className="mt-4 flex items-center justify-center gap-3">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show quote ${i + 1}`}
              aria-pressed={i === index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
