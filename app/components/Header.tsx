import React from "react";

export default function Header() {
  return (
    <header className="p-5 flex items-center justify-between">
      <a href="" className="bg-gray-100 inline-block p-2 rounded-3xl">
        <img className="w-[30px]" src="/book.svg" alt="Logo" />
      </a>

      {/* Navigation bar */}
      <nav className="flex items-center gap-[20px]">
        <a
          className="p-2 bg-gray-100 rounded-3xl hover:bg-gray-50 transition-all duration-200"
          href="#"
        >
          მთავარი
        </a>
        <a
          className="p-2 bg-gray-100 rounded-3xl hover:bg-gray-50 transition-all duration-200"
          href="#"
        >
          სერვისები
        </a>
        <a
          className="p-2 bg-gray-100 rounded-3xl hover:bg-gray-50 transition-all duration-200"
          href="#"
        >
          AI განათლება
        </a>
        <a
          className="p-2 bg-gray-100 rounded-3xl hover:bg-gray-50 transition-all duration-200"
          href="#"
        >
          ჩვენს შესახებ
        </a>
        <a
          className="p-2 bg-gray-100 rounded-3xl hover:bg-gray-50 transition-all duration-200"
          href="#"
        >
          კონტაქტი
        </a>
      </nav>

      {/* Log out */}
      <a
        href="/pages/login"
        className="pl-5 pr-5 bg-blue-500 pt-2 pb-2 rounded-2xl text-white cursor-pointer"
      >
        Log out
      </a>
    </header>
  );
}
