
import React from "react";
import { LoaderCircle } from "lucide-react";

const WorkoutsLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0C0D10] text-white">
      <div className="flex items-center gap-3">
        <LoaderCircle
          size={24}
          className="animate-spin text-lime-300"
        />

        <span className="text-sm font-medium text-gray-300">
          Loading workout...
        </span>
      </div>
    </div>
  );
};

export default WorkoutsLoading;
 
