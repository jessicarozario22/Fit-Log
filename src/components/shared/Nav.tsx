"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

const Nav = () => {
  const pathname = usePathname();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("Nav must be used inside WorkoutProvider");
  }

  const { addWorkouts, savedWorkouts } = context;

  const isWorkoutsActive = pathname === "/workouts";
  const isMyPlanActive = pathname === "/ListedWorkouts";

  return (
    <div className=" navbar bg-[#0F1115] shadow-sm px-4 lg:px-8">

      {/* LEFT — Logo + Name */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={40}
            height={40}
          />

          <h2 className="text-2xl font-bold">FITLOG</h2>
        </Link>

        {/* Mobile Menu */}
        <div className="dropdown ml-2 lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm"
          >
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/workouts"
                className={
                  isWorkoutsActive
                    ? "text-lime-400 font-semibold bg-lime-400/2"
                    : ""
                }
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/ListedWorkouts"
                className={
                  isMyPlanActive
                    ? "text-lime-400 font-semibold bg-lime-400/5"
                    : ""
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
      </div>


      {/* MIDDLE — Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">

          {/* Workouts */}
          <li>
            <Link
              href="/workouts"
              className={`rounded-full px-4 ${
                isWorkoutsActive
                  ? "text-lime-400 font-semibold bg-lime-400/5"
                  : "hover:bg-lime-400/5 hover:text-lime-400"
              }`}
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/ListedWorkouts"
              className={`rounded-full px-4 ${
                isMyPlanActive
                  ? "text-lime-400 font-semibold bg-lime-400/5"
                  : "hover:bg-lime-400/5 hover:text-lime-400"
              }`}
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>


      {/* RIGHT — Plan + Saved */}
      <div className="navbar-end">
        <div className="flex items-center gap-4 lg:gap-6 text-[13px]">

          {/* Plan */}
          <div className="flex items-center gap-2 text-[#d0d4da]">
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[11px] font-bold text-black">
              {addWorkouts.length}
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-[#9299a5]">
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#303640] px-1 text-[11px]">
              {savedWorkouts.length}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Nav;