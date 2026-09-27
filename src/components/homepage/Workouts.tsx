
import React from "react";
import WorkoutCard from "../shared/WorkoutCards";
import { IWorkout } from "@/types/workout.types";

const Workouts = async () => {
  let workoutsData: IWorkout[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/workoutsData.json`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workouts data");
    }

    workoutsData = await response.json();
  } catch (error) {
    console.error("Error fetching workouts data:", error);
  }

  return (
    <section className="container mx-auto py-[70px]">
      <h2 className="mb-6 text-3xl font-bold">
        THE LIBRARY
      </h2>

      <p className="mb-6 text-1xl">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workoutsData.slice(0, 9).map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default Workouts;
