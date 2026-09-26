"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "MyPlanPage must be used inside WorkoutProvider"
    );
  }

  const {
    addWorkouts,
    setAddWorkouts,
    savedWorkouts,
    moveToPlan,
  } = context;

  const [activeTab, setActiveTab] =
    useState<"today" | "saved">("today");

  // Remove workout from plan
  const removeWorkout = (
    id: string | number,
    index: number
  ) => {
    setAddWorkouts((prev) =>
      prev.filter(
        (workout, i) =>
          !(workout.id === id && i === index)
      )
    );
  };

  // Current list
  const workouts =
    activeTab === "today"
      ? addWorkouts
      : savedWorkouts;

  // Summary
  const totalExercises = addWorkouts.length;

  const totalMinutes = addWorkouts.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = addWorkouts.reduce(
    (total, workout) =>
      total +
      Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">

      <main className="mx-auto max-w-[1184px] px-6 py-[42px]">

        {/* Heading */}
        <h1 className="text-[32px] font-black leading-none tracking-tight">
          MY PLAN
        </h1>

        <p className="mt-3 text-[14px] text-[#8c939f]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Summary */}
        <section className="mt-6 h-[122px] rounded-[17px] border border-[#282e38] bg-[#13171d]">

          <div className="grid h-full grid-cols-3">

            <div className="flex flex-col justify-center border-r border-[#282e38] px-6">
              <span className="text-[12px] text-[#9299a5]">
                Exercises
              </span>

              <span className="mt-1 text-[40px] font-black leading-none text-[#b6ff00]">
                {totalExercises}
              </span>
            </div>

            <div className="flex flex-col justify-center border-r border-[#282e38] px-8">
              <span className="text-[12px] text-[#9299a5]">
                Minutes
              </span>

              <span className="mt-1 text-[40px] font-black leading-none">
                {totalMinutes}
              </span>
            </div>

            <div className="flex flex-col justify-center px-8">
              <span className="text-[12px] text-[#9299a5]">
                Calories
              </span>

              <span className="mt-1 text-[40px] font-black leading-none">
                {totalCalories}
              </span>
            </div>

          </div>
        </section>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-between">

          <div className="flex h-[40px] rounded-[11px] border border-[#292f39] bg-[#151920] p-[4px]">

            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-[8px] px-4 text-[12px] transition ${
                activeTab === "today"
                  ? "bg-[#242a35] font-semibold text-white"
                  : "text-[#7e8693]"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-[8px] px-5 text-[12px] transition ${
                activeTab === "saved"
                  ? "bg-[#242a35] font-semibold text-white"
                  : "text-[#7e8693]"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-[12px] text-[#8a919c]">
              Sort By
            </span>

            <button className="flex h-[34px] items-center gap-3 rounded-[9px] border border-[#2b313b] bg-[#11151a] px-3 text-[12px]">
              Duration

              <span className="text-[#858c97]">
                ⌄
              </span>
            </button>

          </div>

        </div>

        {/* Content */}

        {workouts.length === 0 ? (

          <div className="mt-6 rounded-[16px] border border-[#282e38] bg-[#13171d] p-12 text-center">

            <p className="text-[14px] font-semibold">
              NOTHING HERE YET
            </p>

            <p className="mt-2 text-[13px] text-[#737b87]">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save a workout to see it here later."}
            </p>

          </div>

        ) : (

          <div className="mt-6 flex flex-col gap-4">

            {workouts.map((workout, index) => (

              <div
                key={`${workout.id}-${index}`}
                className="flex min-h-[114px] items-center rounded-[16px] border border-[#282e38] bg-[#13171d] px-4 py-4"
              >

                {/* Image */}

                <div className="relative h-[80px] w-[144px] shrink-0 overflow-hidden rounded-[10px]">

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />

                </div>

                {/* Information */}

                <div className="ml-4 min-w-0 flex-1">

                  <h2 className="truncate text-[16px] font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-[12px] text-[#8c939f]">
                    {workout.equipment}
                  </p>

                  <div className="mt-2 flex items-center gap-4 text-[12px] text-[#a4aab4]">

                    <span className="flex items-center gap-1.5">
                      <span className="text-[15px] text-[#b6ff00]">
                        ◷
                      </span>

                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                      <span className="text-[14px] text-[#b6ff00]">
                        ♨
                      </span>

                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                      <span className="text-[16px] text-[#b6ff00]">
                        ☆
                      </span>

                      {workout.rating}
                    </span>

                  </div>

                </div>

                {/* Actions */}

                <div className="ml-5 flex shrink-0 items-center gap-3">

                  <button
                    className="h-[35px] rounded-full border border-[#38404d] px-5 text-[12px] text-[#e0e3e7] transition hover:border-[#b6ff00] hover:text-[#b6ff00]"
                  >
                    View Details
                  </button>

                  {activeTab === "today" && (
                    <button
                      onClick={() =>
                        removeWorkout(
                          workout.id,
                          index
                        )
                      }
                      className="flex h-[35px] items-center gap-2 rounded-full bg-[#b6ff00] px-5 text-[12px] font-bold text-black transition hover:bg-[#c8ff45]"
                    >
                      <span>✓</span>
                      Mark as Done
                    </button>
                  )}

                  {activeTab === "saved" && (
                    <button
                      onClick={() =>
                        moveToPlan(
                          workout.id,
                          index
                        )
                      }
                      className="flex h-[35px] items-center gap-2 rounded-full bg-[#b6ff00] px-5 text-[12px] font-bold text-black transition hover:bg-[#c8ff45]"
                    >
                      Add to Plan
                    </button>
                  )}

                  {activeTab === "today" && (
                    <button
                      onClick={() =>
                        removeWorkout(
                          workout.id,
                          index
                        )
                      }
                      aria-label="Remove workout"
                      className="ml-1 flex h-8 w-8 items-center justify-center text-[19px] text-[#68717f] transition hover:text-red-400"
                    >
                      ×
                    </button>
                  )}

                </div>

              </div>

            ))}

          </div>
        )}

      </main>
    </div>
  );
};

export default MyPlanPage;