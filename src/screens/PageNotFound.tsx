import React from "react";

export default function PageNotFound() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
