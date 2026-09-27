
"use client";

import React, { useEffect, useState } from "react";
import WorkoutCards from "@/components/shared/WorkoutCards";
import { IWorkout } from "@/types/workout.types";

const Workouts = () => {
  const [workoutsData, setWorkoutsData] = useState<IWorkout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/workoutsData.json");

        if (!response.ok) {
          throw new Error("Failed to fetch workouts data");
        }

        const data = await response.json();

        setWorkoutsData(data);
      } catch (error) {
        console.error("Error fetching workouts data:", error);
      }
    };

    fetchData();
  }, []);

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
          <WorkoutCards
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default Workouts;
