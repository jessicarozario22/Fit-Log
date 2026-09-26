import AddToPlan from "@/components/WorkoutDetails/AddToPlan";
import SaveForLater from "@/components/WorkoutDetails/SaveForLater";
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsPage {
  params: {
    id: string;
  };
}

const listworkouts = async () => {
  const response = await fetch(
    "http://localhost:3000/workoutsData.json"
  );

  const data = await response.json();

  return data;
};

const WorkoutDetailsPage = async ({
  params,
}: IWorkoutDetailsPage) => {
  const { id } = await params;

  const workoutsData = await listworkouts();

  const workout = workoutsData.find(
    (workout: IWorkout) =>
      String(workout.id) === String(id)
  );

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] text-white">
        <h1 className="text-2xl font-bold">
          Workout not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">

      <section className="mx-auto max-w-[1220px] px-6 py-12 lg:px-8 lg:py-12">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-14">

          {/* IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={workout.image}
                alt={workout.name}
                width={800}
                height={1200}
                priority
                className="h-auto max-h-[735px] w-full object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map(
                (group: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#b7ff00] px-4 py-1 text-sm font-bold text-black"
                  >
                    {group}
                  </span>
                )
              )}
            </div>

            {/* Stats */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#272c35] bg-[#151920]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#272c35] px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Rating
                </span>

                <span className="text-sm text-gray-200">
                  {workout.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-8">

              <h2 className="text-lg font-black uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map(
                  (
                    instruction: string,
                    index: number
                  ) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-300"
                    >
                      <span className="shrink-0 text-gray-400">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>

            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <AddToPlan workout={workout} />
              <SaveForLater workout={workout} />

            </div>
          </div>
        </div>
      </section>



    </main>
  );
};

export default WorkoutDetailsPage;