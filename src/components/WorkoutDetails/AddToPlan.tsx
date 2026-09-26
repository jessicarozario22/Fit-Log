"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const AddToPlan = ({ workout }) => {
  const { addToPlan } = useContext(WorkoutContext);

  return (
    <button
      onClick={() => addToPlan(workout)}
      className="mt-4 rounded bg-lime-500 px-4 py-2 text-black font-semibold"
    >
      Add to Plan
    </button>
  );
};

export default AddToPlan;
