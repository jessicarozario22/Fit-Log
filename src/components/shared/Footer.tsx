import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
  <nav>
    <h6 className="footer-title">FitLog</h6>
    <a className="link link-hover">Workout Library</a>
    <a className="link link-hover">Today's Plan</a>
    <a className="link link-hover">Saved Workouts</a>
    <a className="link link-hover">Workout Details</a>
  </nav>

  <nav>
    <h6 className="footer-title">Workouts</h6>
    <a className="link link-hover">Chest</a>
    <a className="link link-hover">Arms</a>
    <a className="link link-hover">Legs</a>
    <a className="link link-hover">Core</a>
  </nav>

  <nav>
    <h6 className="footer-title">Your Plan</h6>
    <a className="link link-hover">Today's Plan</a>
    <a className="link link-hover">Saved</a>
    <a className="link link-hover">Completed</a>
    <a className="link link-hover">Workout Stats</a>
  </nav>

  <nav>
    <h6 className="footer-title">Features</h6>
    <a className="link link-hover">Workout Library</a>
    <a className="link link-hover">Sort Workouts</a>
    <a className="link link-hover">Track Progress</a>
    <a className="link link-hover">Save for Later</a>
  </nav>

  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Exercise Guide</a>
    <a className="link link-hover">Training Tips</a>
    <a className="link link-hover">Workout Instructions</a>
    <a className="link link-hover">Fitness Library</a>
  </nav>

  <nav>
    <h6 className="footer-title">Connect</h6>
    <a className="link link-hover">GitHub</a>
    <a className="link link-hover">LinkedIn</a>
    <a className="link link-hover">Portfolio</a>
    <a className="link link-hover">Contact</a>
  </nav>
</footer>

    );
};

export default Footer;