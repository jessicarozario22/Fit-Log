"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const SaveForLater = ({ workout }) => {
  const { saveForLater } = useContext(WorkoutContext);

  return (
    <button
      onClick={() => saveForLater(workout)}
      className="flex items-center gap-2 rounded-xl border border-[#39404d] bg-transparent px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-[#171b21]"
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default SaveForLater;
