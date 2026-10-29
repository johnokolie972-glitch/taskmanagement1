"use client";

export default function SideNav({
  isOpen,
  onClose,
  filter,
  onFilterChange,
  tasks = [],
  onOpenGuide,
}) {
  if (!isOpen) return null;

  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const completed = tasks.filter((t) => t.status === "completed").length;

  const handleClick = (value) => {
    onFilterChange(value);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-[280px] max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              BE
            </div>
            <span className="font-semibold text-lg text-gray-900 dark:text-white">
              BrightEdge.
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl active:bg-gray-100 dark:active:bg-gray-800"
          >
            ×
          </button>
        </div>

        <div className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
          Workspace
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          <button
            onClick={() => handleClick("all")}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition ${
              filter === "all"
                ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800"
            }`}
          >
            <span className="text-lg">▦</span>
            Dashboard
          </button>

          <button
            onClick={() => handleClick("all")}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition ${
              filter === "all"
                ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800"
            }`}
          >
            <span className="text-lg">☰</span>
            All Tasks
            <span className="ml-auto text-sm text-gray-400">{total}</span>
          </button>

          <button
            onClick={() => handleClick("pending")}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition ${
              filter === "pending"
                ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800"
            }`}
          >
            <span className="text-lg">◷</span>
            Pending Tasks
            <span className="ml-auto text-sm text-gray-400">{pending}</span>
          </button>

          <button
            onClick={() => handleClick("completed")}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition ${
              filter === "completed"
                ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800"
            }`}
          >
            <span className="text-lg">✓</span>
            Completed Tasks
            <span className="ml-auto text-sm text-gray-400">{completed}</span>
          </button>

          {/* GUIDE / HELP */}
          <button
            onClick={() => {
              onOpenGuide();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 active:bg-gray-50 dark:active:bg-gray-800 transition"
          >
            <span className="text-lg">📖</span>
            Guide / Help
          </button>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
              BE
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                BrightEdge Technologies
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Team workspace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}