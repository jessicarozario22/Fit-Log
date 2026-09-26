"use client";

import React, { createContext, useState } from "react";

export const WorkoutContext = createContext(null);

const WorkoutProvider = ({ children }) => {
  const [addWorkouts, setAddWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Add workout to My Plan
  const addToPlan = (workout) => {
    setAddWorkouts((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyAdded) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Save workout for later
  const saveForLater = (workout) => {
    setSavedWorkouts((prev) => {
      const alreadySaved = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadySaved) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Saved → My Plan
  const moveToPlan = (id, index) => {
    const workout = savedWorkouts[index];

    if (!workout) return;

    setAddWorkouts((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyAdded) {
        return prev;
      }

      return [...prev, workout];
    });

    setSavedWorkouts((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        addWorkouts,
        setAddWorkouts,

        savedWorkouts,
        setSavedWorkouts,

        addToPlan,
        saveForLater,
        moveToPlan,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;