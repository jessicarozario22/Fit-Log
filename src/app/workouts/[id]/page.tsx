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
    (workout: IWorkout) => String(workout.id) === String(id)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  console.log(id, "id");
  console.log(workout, "workout");

  return (
    <div className="container mx-auto py-10">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={400}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {workout.name}
          </h2>

          <p>{workout.description}</p>

          <p>
            <strong>Muscle Groups:</strong>{" "}
            {workout.muscleGroups.join(", ")}
          </p>

          <p>
            <strong>Equipment:</strong>{" "}
            {workout.equipment}
          </p>

          <p>
            <strong>Difficulty:</strong>{" "}
            {workout.difficulty}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {workout.duration} minutes
          </p>

          <p>
            <strong>Calories:</strong>{" "}
            {workout.caloriesBurned}
          </p>

          <p>
            <strong>Sets:</strong>{" "}
            {workout.sets}
          </p>

          <p>
            <strong>Reps:</strong>{" "}
            {workout.reps}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {workout.rating}
          </p>

          <div>
            <h3 className="font-bold">Instructions</h3>

            <ul className="list-disc pl-5">
              {workout.instructions.map(
                (instruction, index) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ul>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;