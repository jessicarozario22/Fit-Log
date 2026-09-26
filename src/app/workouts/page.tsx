"use client";

import React, { useEffect, useState } from 'react';
import WorkoutCards from '@/components/shared/WorkoutCards';
import { IWorkout } from '@/types/workout.types';

const listworkouts = async () => {
  const response = await fetch('/workoutsData.json'); 
  const data = await response.json();
  return data;
};

const Workouts = () => {
  const [workoutsData, setWorkoutsData] = useState<IWorkout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listworkouts();
      setWorkoutsData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="container mx-auto py-[70px]">
      <h2 className="text-3xl font-bold mb-6">EXPLORE ALL WORKOUTS</h2>
      <p className="text-1xl mb-6">Twelve lifts covering every major muscle group.</p>
      {/* Grid layout for 3 cards side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutsData.map((workout, index) => (
          <WorkoutCards key={index} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;
