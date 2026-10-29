"use client";

export default function TaskItem({ task, onToggle }) {
  const isDone = task.status === "completed";

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="flex gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition active:scale-90
            ${isDone ? "bg-green-500 border-green-500 text-white" : "border-gray-300"}`}
        >
          {isDone && (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold text-gray-900 text-[15px] leading-snug ${
              isDone ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{task.description}</p>

          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full
                ${isDone ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
            >
              • {isDone ? "Completed" : "Pending"}
            </span>
            <span
              className={`text-xs font-medium ${
                task.priority === "High" ? "text-red-600" : "text-amber-600"
              }`}
            >
              • {task.priority}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 active:bg-gray-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 active:bg-red-50 active:text-red-500 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}