import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">story2quiz</h2>
            <p className="mt-2 text-gray-600">
              მარტივი და სწრაფი გზა PDF დოკუმენტიდან ტესტის შესაქმნელად —
              იდეალური მასწავლებლებისთვის.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-2">
              ბმულები
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  მთავარი
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Პირატესობები
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  როგორ მუშაობს
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  კონტაქტი
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-2">
              კონტაქტი
            </h3>
            <p className="text-gray-600">Email: info@testmaker.ge</p>
            <p className="text-gray-600 mt-1">ტელ: +995 555 12 34 56</p>

            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11 9.95v-7.05H8v-2.9h3V9.5c0-3 1.79-4.65 4.5-4.65 1.3 0 2.66.24 2.66.24v3h-1.5c-1.48 0-1.94.92-1.94 1.86v2.25h3.3l-.53 2.9h-2.77V22A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.6 3H4.4A1.4 1.4 0 003 4.4v15.2A1.4 1.4 0 004.4 21h15.2a1.4 1.4 0 001.4-1.4V4.4A1.4 1.4 0 0019.6 3zM8.75 17H6.5v-7h2.25v7zM7.63 9.25a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zM18 17h-2.25v-3.5c0-.84-.7-1.5-1.5-1.5s-1.5.66-1.5 1.5V17H10.5v-7H12v1.08c.4-.62 1.25-1.08 2.25-1.08 1.65 0 3 1.35 3 3V17z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TestMaker. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
}
