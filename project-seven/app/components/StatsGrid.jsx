export default function StatsGrid({ total, pending, completed, rate }) {
  const cards = [
    {
      label: "Total Tasks",
      value: total,
      sub: "Across your workspace",
      icon: "☰",
      iconBg: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
    },
    {
      label: "Pending Tasks",
      value: pending,
      sub: "Ready to move forward",
      icon: "◷",
      iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300",
    },
    {
      label: "Completed Tasks",
      value: completed,
      sub: "Great work, keep it up",
      icon: "✓",
      iconBg: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300",
    },
    {
      label: "Completion Rate",
      value: `${rate}%`,
      sub: "Of all tasks completed",
      icon: "↗️",
      iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-tight">
              {c.label}
            </span>
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${c.iconBg}`}
            >
              {c.icon}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {c.value}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-tight">
            {c.sub}
          </p>
        </div>
      ))}
    </div>
  );
}