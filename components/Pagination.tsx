"use client";
import { INITIAL_LIMIT } from "@/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  totalItems: number;
};

const Pagination = ({ totalItems }: Props) => {
  const params = useSearchParams();
  const currentPage = Number(params.get("page")) || 1;
  const start = INITIAL_LIMIT * (currentPage - 1);
  const end = INITIAL_LIMIT * currentPage;
  const totalPages = Math.ceil(totalItems / INITIAL_LIMIT);

  return (
    <div className="flex items-center justify-between py-4 border-t border-t-gray-500">
      <span className="text-sm text-gray-800">
        Showing <span className="font-semibold text-black">{start + 1}</span> to{" "}
        <span className="font-semibold text-black">
          {end > totalItems ? totalItems : end}
        </span>{" "}
        of <span className="font-semibold text-black">{totalItems}</span> Posts
      </span>
      <div className="inline-flex mt-2 xs:mt-0 gap-4">
        {currentPage <= 1 ? (
          <div className="flex cursor-not-allowed bg-gray-100 items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg">
            Prev
          </div>
        ) : (
          <Link
            href={`?page=${currentPage - 1}`}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Prev
          </Link>
        )}

        {currentPage >= totalPages ? (
          <div className="flex cursor-not-allowed bg-gray-100 items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg">
            Next
          </div>
        ) : (
          <Link
            href={`?page=${currentPage + 1}`}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
