"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    seconds: number;
    minutes: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date("2024-12-31T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const totalSeconds = Math.floor(distance / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);

      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <nav className="text-white flex max-w-screen-xl mx-auto justify-between h-20 items-center">
        <Logo />
        <ul className="flex gap-4">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center h-full mt-16">
        <h1 className="bg-text-gradient bg-clip-text text-transparent text-[8rem] font-extrabold inline-block w-fit">
          Coming Soon
        </h1>
        <p className="text-5xl mt-4 font-semibold bg-text-gradient text-transparent bg-clip-text">
          {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m  : ${timeLeft.seconds}s`}
        </p>
      </div>
    </main>
  );
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-12"
  >
    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
    <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
