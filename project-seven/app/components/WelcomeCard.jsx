export default function WelcomeCard({ onAddClick }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-5 sm:p-6 text-white shadow-lg">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs font-medium tracking-wider uppercase opacity-90">
            Team Workspace
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-1">Welcome back, John!</h2>
        <p className="text-sm opacity-90 mb-5 leading-relaxed">
          Here’s an overview of your team’s tasks — let’s make today count.
        </p>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2.5 rounded-xl text-sm shadow-sm active:scale-95 transition"
        >
          <span className="text-lg">+</span> Add New Task
        </button>

        <div className="mt-5 flex items-center gap-2 text-xs opacity-80">
          <span>📅</span>
          <span>Wed, Oct 28, 2026</span>
        </div>
      </div>
    </div>
  );
}