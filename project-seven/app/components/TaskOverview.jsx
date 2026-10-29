export default function TaskOverview({ completed, pending, rate }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Progress Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center transition-colors">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 self-start">
          Task overview
        </h4>

        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="3"
              strokeDasharray={`${rate}, 100`}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {rate}%
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500">
              completed
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mt-3 text-[11px] w-full text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>Completed {completed}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span>Pending {pending}</span>
          </div>
        </div>
      </div>

      {/* Motivation Card */}
      <div className="bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl p-4 border border-indigo-100 dark:border-indigo-900 flex flex-col justify-between transition-colors">
        <div>
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-3 text-sm">
            ✓
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
            Small steps.
            <br />
            Big progress.
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            {pending === 0
              ? "Everything is checked off. Take a moment to celebrate."
              : `You have ${pending} task${pending > 1 ? "s" : ""} to move forward. One task at a time.`}
          </p>
        </div>
        <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-3 flex items-center gap-1">
          ⏰ Make today count.
        </p>
      </div>
    </div>
  );
}