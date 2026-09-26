"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IWorkout } from "@/types/workout.types";

interface IWorkoutProps {
  workout: IWorkout;
}

const WorkoutCards = ({ workout }: IWorkoutProps) => {
  return (
    <div className="card bg-black shadow-md hover:shadow-xl transition hover:scale-105">
      <figure>
        <Image
          src={workout.image}
          alt={workout.name}
          width={800}
          height={600}
          className="h-60 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {/* Muscle groups */}
        <div className="flex flex-wrap gap-2 mt-2">
          {workout.muscleGroups.map((group, idx) => (
            <div key={idx} className="badge bg-lime-400 font-bold text-black">
              {group}
            </div>
          ))}
        </div>
           {/* <div className="badge badge-secondary">{workout.difficulty}</div> */}
        </h2>
           <h1 className="text-2xl font-bold"> {workout.name}</h1>
        <p className="text-sm text-gray-600">{workout.description}</p>

        

        {/* Sets / Reps / Calories */}
        <div className="flex gap-2 mt-3">
          <div className="badge badge-outline">{workout.sets} sets</div>
          <div className="badge badge-outline">{workout.reps} reps</div>
          <div className="badge badge-outline">{workout.caloriesBurned} cal</div>
        </div>

        {/* Duration + Rating */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">⏱️ {workout.duration} min</span>
          <div className="rating rating-sm">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${workout.id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={Math.round(workout.rating) === i + 1}
                readOnly
              />
            ))}
          </div>

          <Link href={'workouts/${workout.workoutsid}'} >
          <button className=" btn w-full rounded-full bg-lime-500 text-black hover:bg-emerald-700">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCards;
