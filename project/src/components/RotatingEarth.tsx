import { useEffect, useRef } from 'react';

export const RotatingEarth = () => {
  const earthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const earth = earthRef.current;
    if (!earth) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      earth.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 shadow-2xl shadow-blue-500/50">
        <div
          ref={earthRef}
          className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-blue-700 relative overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.8) 20%, transparent 20%),
              radial-gradient(circle at 70% 20%, rgba(34, 197, 94, 0.6) 15%, transparent 15%),
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.7) 25%, transparent 25%),
              radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.5) 18%, transparent 18%)
            `,
            animation: 'spin 20s linear infinite',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      {/* Orbital rings */}
      <div className="absolute -inset-8 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
      <div className="absolute -inset-16 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '120s', animationDirection: 'reverse' }} />
    </div>
  );
};