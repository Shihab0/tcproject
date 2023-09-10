import Link from "next/link";
import React from "react";

const ExplorePage = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold py-3">
          Click on image for explore
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-2">
        <Link
          className="border-2 bg-tutors border-red-50 rounded-lg w-80 h-96 relative"
          href="/tutors"
        >
          <span className="absolute bottom-1 right-3 text-2xl font-semibold">
            Qualified Tutors
          </span>
        </Link>
        <Link
          className="border-red-50 bg-progress border-2 rounded-lg w-80 h-96 relative"
          href="/tracking"
        >
          <span className="absolute bottom-1 right-3 text-2xl font-semibold">
            Progress Tracking
          </span>
        </Link>
        <Link
          className="border-red-50 bg-rank border-2 rounded-lg w-80 h-96 relative"
          href="/rank"
        >
          <span className="absolute bottom-1 right-3 text-2xl font-semibold">
            Students Rank
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
