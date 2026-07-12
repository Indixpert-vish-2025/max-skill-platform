"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardShell({
  children,
  sidebarVariant = "instructor",
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell">

      <aside className={`dashboard-sidebar ${sidebarOpen ? "show" : ""}`}>
        <Sidebar variant={sidebarVariant} />
      </aside>

      <div className="dashboard-main">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="dashboard-content">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

    </div>
  );
}