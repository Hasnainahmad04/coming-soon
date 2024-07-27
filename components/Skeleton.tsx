import React from "react";

const Skeleton = () => {
  return (
    <article className="p-2 my-2">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      </div>

      <div className="flex gap-4 my-2">
        <div className="bg-gray-300 py-1 px-3 rounded-full w-16 h-6 animate-pulse"></div>
        <div className="bg-gray-300 py-1 px-3 rounded-full w-16 h-6 animate-pulse"></div>
        <div className="bg-gray-300 py-1 px-3 rounded-full w-16 h-6 animate-pulse"></div>
      </div>

      <div className="inline-flex items-center gap-1 text-gray-500 me-2">
        <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-10 animate-pulse"></div>
      </div>

      <div className="inline-flex items-center gap-1 text-gray-500">
        <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-10 animate-pulse"></div>
      </div>
    </article>
  );
};

export default Skeleton;
