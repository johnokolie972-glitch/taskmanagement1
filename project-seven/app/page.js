"use client";

import { useState } from "react";
import Header from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
import StatsGrid from "./components/StatsGrid";
import TaskList from "./components/TaskList";
import TaskOverview from "./components/TaskOverview";
import SideNav from "./components/SideNav";
import AddTaskModal from "./AddTaskModal";
import GuideModal from "./components/GuideModal";

const initialTasks = [
  {
    id: "1",
    title: "Prepare the weekly team report",
    description: "Compile project updates, key milestones, and team highlights for the weekly review.",
    status: "pending",
    priority: "High",
  },
  {
    id: "2",
    title: "Review the project requirements",
    description: "Review the scope and confirm deliverables with the product team.",
    status: "completed",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Organize the development schedule",
    description: "Plan the upcoming sprint and align priorities across the development team.",
    status: "pending",
    priority: "Medium",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((t) => t.status === "pending").length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <WelcomeCard onAddClick={() => setIsModalOpen(true)} />

        <div className="mt-6">
          <StatsGrid
            total={totalTasks}
            pending={pendingTasks}
            completed={completedTasks}
            rate={completionRate}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TaskList
              tasks={filteredTasks}
              filter={filter}
              onFilterChange={setFilter}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          </div>

          <div>
            <TaskOverview
              completed={completedTasks}
              pending={pendingTasks}
              rate={completionRate}
            />
          </div>
        </div>
      </main>

      <SideNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filter={filter}
        onFilterChange={setFilter}
        tasks={tasks}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTask}
      />

      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}