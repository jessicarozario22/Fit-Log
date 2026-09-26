import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      {/* Left / Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <Image src={logo} alt="Logo" width={40} height={40} />
            <h2 className="text-2xl font-bold">FITLOG</h2>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:bg-lime-400/5 hover:rounded-full hover:text-lime-400 hover:font-semibold">
              <Link href="/workouts" className="rounded-full">
                Workouts
              </Link>
            </li>

            <li className="hover:bg-lime-400/5 hover:rounded-full hover:text-lime-400 hover:font-semibold">
              <Link href="/my-plan" className="rounded-full">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG Logo" width={40} height={40} />
          <h2 className="text-2xl font-bold">FITLOG</h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-lime-400/5 hover:rounded-full hover:text-lime-400 hover:font-semibold  active:text-lime-400 hover:font-semibold ">
            <Link href="/workouts" className="rounded-full">
              Workouts
            </Link>
          </li>

          <li className="hover:bg-lime-400/5 hover:rounded-full hover:text-lime-400 hover:font-semibold">
            <Link href="/my-plan" className="rounded-full">
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* Plan / Saved */}
      <div className="navbar-end gap-2">
        <Link className="btn-ntg" href="/my-plan">
          Plan
        </Link>

        <Link className="btn-ntg" href="/my-plan">
          Saved
        </Link>
      </div>
    </div>
  );
};

export default Nav;