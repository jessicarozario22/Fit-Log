"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IWorkout } from "@/types/workout.types";
import { Clock } from "lucide-react";

interface IWorkoutProps {
  workout: IWorkout;
}

const WorkoutCards = ({
  workout,
}: IWorkoutProps) => {
  return (
    <div className="card bg-[#15171D] shadow-md transition hover:scale-105 hover:shadow-xl">

      {/* Image */}
      <figure>
        <Image
          src={workout.image}
          alt={workout.name}
          width={800}
          height={600}
          className="h-60 w-full rounded-t-lg object-cover"
        />
      </figure>

      <div className="card-body">

        {/* Muscle Groups */}
        <div className="mt-2 flex flex-wrap gap-2">
          {workout.muscleGroups.map(
            (group, idx) => (
              <div
                key={idx}
                className="badge bg-lime-300 font-bold text-black"
              >
                {group}
              </div>
            )
          )}
        </div>

        {/* Workout Name */}
        <h1 className="text-2xl font-bold">
          {workout.name}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {workout.description}
        </p>

        {/* Sets / Reps / Calories */}
        <div className="mt-3 flex gap-2">
          <div className="badge badge-outline">
            {workout.sets} sets
          </div>

          <div className="badge badge-outline">
            {workout.reps} reps
          </div>

          <div className="badge badge-outline">
            {workout.caloriesBurned} cal
          </div>
        </div>

        {/* Duration / Rating / View Details */}
        <div className="mt-4 flex items-center justify-between gap-2">

          <span className="text-sm text-gray-500">
            <Clock /> {workout.duration} min
          </span>

          <div className="rating rating-sm">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${workout.id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={
                  Math.round(workout.rating) ===
                  i + 1
                }
                readOnly
              />
            ))}
          </div>

          <Link
            href={`/workouts/${workout.id}`}
            className="btn w-[126px] rounded-md bg-lime-300 text-black hover:bg-lime-400"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WorkoutCards;