"use client";

import React, { useEffect, useState } from "react";
import WorkoutCard from "../shared/WorkoutCards";
import { IWorkout } from "@/types/workout.types";

const listworkouts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/workoutsData.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workouts data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

const Workouts = () => {
  const [workoutsData, setWorkoutsData] =
    useState<IWorkout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listworkouts();
      setWorkoutsData(data);
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

        {workoutsData
          .slice(0, 9)
          .map((workout, index) => (
            <WorkoutCard
              key={index}
              workout={workout}
            />
          ))}

      </div>

    </section>
  );
};

export default Workouts;