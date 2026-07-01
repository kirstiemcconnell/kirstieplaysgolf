import type { ReactNode } from "react";

/* Reusable iPhone-style frame: titanium rail, black bezel, Dynamic Island
   and home indicator. Screen is a 9:19.5 area that holds `children`
   (a video, cover image, or placeholder). */
export default function PhoneFrame({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Titanium rail */}
      <div className="rounded-[1.6rem] p-[2px] bg-gradient-to-b from-[#45474c] via-[#1f1f21] to-[#3b3d42] shadow-xl">
        {/* Black bezel */}
        <div className="rounded-[1.5rem] p-[4px] bg-black">
          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] rounded-[1.2rem] overflow-hidden bg-forest">
            {children}
            {/* Dynamic Island */}
            <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[34%] h-[8px] rounded-full bg-black z-20" />
            {/* Home indicator */}
            <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-2/5 h-[3px] rounded-full bg-white/60 z-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
