function BackgroundAnimations() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary ambient glow - top left with breathing animation */}
      <div className="bg-accent-500/15 absolute -top-24 -left-24 h-96 w-96 animate-pulse rounded-full blur-3xl"></div>

      {/* Secondary glow - bottom right with slower pulse */}
      <div
        className="bg-primary-400/12 absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          animation: "pulse 4s ease-in-out infinite",
        }}
      ></div>

      {/* Tertiary accent - middle left with floating motion */}
      <div
        className="bg-accent-300/10 absolute top-1/2 -left-16 h-64 w-64 -translate-y-1/2 transform rounded-full blur-2xl"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      ></div>

      {/* Top right accent with gentle scale animation */}
      <div
        className="bg-accent-400/8 absolute top-16 right-16 h-48 w-48 rounded-full blur-xl"
        style={{
          animation: "breathe 5s ease-in-out infinite",
        }}
      ></div>

      {/* New: Additional moving element for more life */}
      <div
        className="bg-accent-200/6 absolute top-1/3 right-1/3 h-32 w-32 rounded-full blur-2xl"
        style={{
          animation: "drift 8s ease-in-out infinite",
        }}
      ></div>

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* More visible vertical lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.15) 25px, rgba(255,255,255,0.15) 26px, transparent 27px)`,
            backgroundSize: "100px 100%",
          }}
        ></div>
      </div>
    </div>
  )
}
export default BackgroundAnimations
