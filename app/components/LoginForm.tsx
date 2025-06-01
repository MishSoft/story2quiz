"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { FaInfo } from "react-icons/fa";
import data from "@/app/data/data";

export default function LoginForm() {
  const [isPopUp, setIsPopUp] = useState(false);
  const outsideRef = useRef<HTMLDivElement | null>(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(event.target as Node)
      ) {
        setIsPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === data.userName && password === data.password) {
      console.log("Sworia");
      document.location = "/pages/home";
    } else {
      console.log("Arasworia");
    }
  };

  const handleInfoPopUp = () => {
    setIsPopUp((prev) => !prev);
  };

  return (
    <div className="flex relative w-full min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div
        ref={outsideRef}
        className="absolute gap-2  flex flex-col items-end  top-20 right-20"
      >
        <button
          onClick={handleInfoPopUp}
          className="border-1  p-2 rounded-2xl border-gray-500 text-gray-500 cursor-pointer"
        >
          <FaInfo />
        </button>
        <div
          className={`${
            isPopUp ? "block" : "hidden"
          } bg-gray-100 p-2 rounded-2xl max-w-[200px]`}
        >
          <p className="font-semibold text-gray-600">
            This platform is designed for teachers and lecturers, where you can
            create tests for your students.
          </p>
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/book.svg" alt="image" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleUser}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                onChange={(e) => setUserName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
