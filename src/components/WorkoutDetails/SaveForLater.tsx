
"use client";

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import { Bookmark } from "lucide-react";

interface SaveForLaterProps {
  workout: IWorkout;
}

const SaveForLater = ({ workout }: SaveForLaterProps) => {
  const workoutContext = useContext(WorkoutContext);
  const [saved, setSaved] = useState(false);

  if (!workoutContext) {
    return null;
  }

  const { saveForLater } = workoutContext;

  const handleSave = () => {
    saveForLater(workout);
    setSaved(true);

    toast.success("Workout saved for later!");
  };

  return (
    <button
      onClick={handleSave}
      className={`flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition ${
        saved
          ? "border-lime-400/40 bg-lime-400/10 text-lime-400"
          : "border-[#39404d] bg-transparent text-gray-200 hover:bg-lime-300/5"
      }`}
    >
      <Bookmark
        size={18}
        strokeWidth={2}
        fill={saved ? "currentColor" : "none"}
      />

      <span>Save for later</span>
    </button>
  );
};

export default SaveForLater;

