import WorkoutCards from "@/components/shared/WorkoutCards";
import { IWorkout } from "@/types/workout.types";
import fs from "fs/promises";
import path from "path";

const Workouts = async () => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "workoutsData.json"
  );

  const file = await fs.readFile(filePath, "utf-8");
  const workoutsData: IWorkout[] = JSON.parse(file);

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