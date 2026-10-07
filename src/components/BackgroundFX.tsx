export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px]" />
      <div className="absolute top-1/3 -left-40 h-112 w-md rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-112 w-md rounded-full bg-cyan-500/20 blur-[120px]" />
    </div>
  );
}
