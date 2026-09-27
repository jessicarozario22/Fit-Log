"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";



const AddToPlan = ({ workout }) => {
  const { addToPlan } = useContext(WorkoutContext);

  const handleAdd = () => {
    addToPlan(workout);

    toast.success("Workout added to your plan!");
  };

  return (
    <button
      onClick={handleAdd}
      className="flex items-center gap-2 rounded-xl border border-[#39404d] bg-lime-300 px-6 py-3 text-sm font-semibold
       text-black transition hover:text-black hover:font-semibold hover:bg-lime-400"
    >
      Add to Today's Plan
    </button>
  );
};

export default AddToPlan;