'use client';

export default function GridBackground() {
  return (
    <div className="w-full h-[856px] absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      
      {/* 1. Base Grid Lines - Garis-garis tipis teal */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #14b8a6 1px, transparent 1px),
            linear-gradient(to bottom, #14b8a6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px', // Sesuaikan ukuran kotak grid
        }}
      />
      
      {/* 2. Plus Signs (+) Markers - Muncul di setiap persimpangan tertentu */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="plus-pattern" 
            x="0" 
            y="0" 
            width="160" // Mengatur jarak antar tanda plus
            height="160" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 0 -6 L 0 6 M -6 0 L 6 0" 
              fill="none" 
              stroke="#14b8a6" 
              strokeWidth="1.5"
              transform="translate(80, 80)" // Menempatkan plus di tengah pattern
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plus-pattern)" />
      </svg>
      
      {/* 3. Radial Gradient (The Glow) - Efek cahaya dari pojok kiri atas */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at 0% 0%, 
            rgba(21, 154, 175, 0.5) 0%, 
            rgba(20, 184, 166, 0.1) 60%, 
            transparent 70%
          )`
        }}
      />

      {/* 4. Dark Overlay - Memastikan teks Hero mudah dibaca (Transisi ke hitam) */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at 0% 0%,
            transparent 20%,
            rgba(0, 0, 0, 0.4) 40%,
            rgba(0, 0, 0, 1) 70%
          )`
        }}
      />
      
    </div>
  );
}