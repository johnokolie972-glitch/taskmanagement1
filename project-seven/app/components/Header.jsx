"use client";

export default function Header({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-xl active:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">
        JO
      </div>
    </header>
  );
}