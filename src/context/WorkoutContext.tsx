"use client";

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const WorkoutContext = createContext(null);

const WorkoutProvider = ({ children }) => {
  const [addWorkouts, setAddWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // --------------------------------
  // Load data from localStorage
  // --------------------------------

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setAddWorkouts(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // --------------------------------
  // Save My Plan
  // --------------------------------

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(addWorkouts)
    );
  }, [addWorkouts, isLoaded]);

  // --------------------------------
  // Save Saved Workouts
  // --------------------------------

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, isLoaded]);

  // --------------------------------
  // Add workout to My Plan
  // --------------------------------

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

  // --------------------------------
  // Save workout for later
  // --------------------------------

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

  // --------------------------------
  // Saved → My Plan
  // --------------------------------

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

        isLoaded,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;