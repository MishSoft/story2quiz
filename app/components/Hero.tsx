/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          ავტომატური ტესტების გენერირება PDF-დან
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          ატვირთეთ სასწავლო მასალა PDF ფაილის სახით და მიიღეთ ტესტი კითხვებითა
          და სავარაუდო პასუხებით – მარტივი, სწრაფი და მოსახერხებელი
          მასწავლებლებისთვის.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            ატვირთე PDF
          </button>
          <a
            href="/pages/howitworks"
            className="bg-white border border-gray-300 px-6 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            ნახე როგორ მუშაობს
          </a>
        </div>
        <div className="mt-16">
          <img
            src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5521.jpg"
            alt="Teacher uploading PDF to generate test"
            className="mx-auto w-full max-w-50 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
