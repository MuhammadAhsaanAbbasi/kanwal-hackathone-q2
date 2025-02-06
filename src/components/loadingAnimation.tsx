// "use client";

// import React from "react";

// export default function LoadingAnimation() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center  bg-[#2A254B] z-50">
//       {/* Ball animation */}
//       <div className="relative">
//         <div className="w-16 h-16 bg-white rounded-full animate-ball-zoom"></div>
//         {/* Light effect */}
//         <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/50 via-white/10 to-transparent blur-xl opacity-60 animate-pulse"></div>
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";

export default function LoadingAnimation() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#2A254B] z-50"
      aria-label="Loading animation"
      role="alert"
    >
      {/* Ball animation */}
      <div className="relative" aria-hidden="true">
        <div
          className="w-16 h-16 bg-white rounded-full animate-ball-zoom"
          style={{
            willChange: "transform, opacity", // Improves performance by optimizing animations
          }}
        ></div>

        {/* Light effect */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-radial from-white/50 via-white/10 to-transparent blur-xl opacity-60 animate-pulse"
          style={{
            willChange: "opacity",
          }}
        ></div>
      </div>
    </div>
  );
}
