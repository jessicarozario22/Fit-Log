
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F1115] text-neutral-content px-10 py-6">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={40}
            height={40}
          />

          <h2 className="text-2xl font-bold">FITLOG</h2>
        </div>

        {/* Right - Copyright */}
        <div>
          <p className="text-sm text-gray-400 text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

