"use client";

export default function TaskList({
  tasks,
  filter,
  onFilterChange,
  onToggleComplete,
  onDelete,
}) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Your tasks{" "}
          <span className="text-gray-400 dark:text-gray-500 text-base">
            {tasks.length}
          </span>
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {tasks.length} tasks
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        {["all", "pending", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`pb-2 text-sm font-medium capitalize transition ${
              filter === f
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {f === "all" ? "All Tasks" : f}
          </button>
        ))}
      </div>

      {/* Task items */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-500 py-8">
            No tasks found
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm transition-colors"
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => onToggleComplete(task.id)}
                  className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition ${
                    task.status === "completed"
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {task.status === "completed" && "✓"}
                </button>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-medium ${
                      task.status === "completed"
                        ? "line-through text-gray-400 dark:text-gray-500"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                    {task.description}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        task.status === "completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                      }`}
                    >
                      {task.status === "completed" ? "Completed" : "Pending"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {task.priority}
                    </span>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-1 transition"
                >
                  🗑
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {tasks.length > 0 && (
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
          Showing {tasks.length} of {tasks.length} tasks
        </p>
      )}
    </div>
  );
}