"use client";

export default function GuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-5 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              ?
            </div>
            <h2 className="text-lg font-bold text-gray-900">How to use BrightEdge</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 text-xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 text-sm text-gray-700">
          {/* Welcome */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-1">Welcome to BrightEdge</h3>
            <p>
              This is your team workspace for managing tasks. You can create, track, complete and delete tasks easily.
            </p>
          </section>

          {/* Navigation */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">1. Navigation</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Click the <strong>☰ menu icon</strong> (top left) to open the side navigation.
              </li>
              <li>
                From the side menu you can switch between:
                <ul className="ml-5 mt-1 space-y-1">
                  <li>• Dashboard / All Tasks</li>
                  <li>• Pending Tasks</li>
                  <li>• Completed Tasks</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Adding Tasks */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">2. Adding a New Task</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Click the <strong>+ Add New Task</strong> button on the welcome card.
              </li>
              <li>Fill in the task title (required).</li>
              <li>Optionally add a description and choose priority (Low / Medium / High).</li>
              <li>Click <strong>+ Create task</strong>.</li>
            </ul>
          </section>

          {/* Managing Tasks */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">3. Managing Tasks</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Complete a task</strong> → click the checkbox (✓) next to the task.
              </li>
              <li>
                <strong>Delete a task</strong> → click the trash icon.
              </li>
              <li>
                Use the tabs <strong>All / Pending / Completed</strong> above the task list to filter.
              </li>
            </ul>
          </section>

          {/* Stats */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">4. Understanding the Stats</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Total Tasks</strong> – all tasks in your workspace</li>
              <li><strong>Pending Tasks</strong> – tasks still to be done</li>
              <li><strong>Completed Tasks</strong> – finished tasks</li>
              <li><strong>Completion Rate</strong> – percentage of tasks completed</li>
            </ul>
          </section>

          {/* Tips */}
          <section className="bg-indigo-50 rounded-xl p-4">
            <h3 className="font-semibold text-indigo-800 mb-1">Quick Tips</h3>
            <ul className="space-y-1 text-indigo-700">
              <li>• New tasks appear at the top of the list.</li>
              <li>• You can filter tasks anytime from the side menu or the tabs.</li>
              <li>• The guide button (bottom right) is always available if you need help.</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t px-5 py-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}