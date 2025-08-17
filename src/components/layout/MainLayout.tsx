import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation/NavigationBar";
import { Toaster } from "../ui/sonner";

export default function MainLayout() {
  return (
    <div className="flex flex-row bg-zinc-100 w-screen h-screen text-zinc-800 tracking-wide overflow-hidden">
      {/* Navigation Sidebar */}
      <NavigationBar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-white m-3 rounded-lg shadow-sm">
          <div className="p-3 h-full">
            <Outlet />
          </div>
        </main>

        {/* Toast Notifications */}
        <Toaster
        // position="top-right"
        // toastOptions={{
        //   duration: 4000,
        //   style: {
        //     background: "white",
        //     color: "#3f3f46",
        //     border: "1px solid #e4e4e7",
        //     borderRadius: "8px",
        //   },
        // }}
        />
      </div>
    </div>
  );
}
