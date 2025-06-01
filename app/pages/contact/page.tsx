import React from "react";

export default function page() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">დაგვიკავშირდით</h2>
        <p className="mt-4 text-gray-600">
          გაქვთ შეკითხვა, იდეა ან უბრალოდ გსურთ დაგველაპარაკოთ? მოგვწერეთ ქვემოთ
          მოცემული ფორმით.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              თქვენი სახელი
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="მაგ: ეკა გიორგაძე"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ელ-ფოსტა
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="მაგ: teacher@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              შეტყობინება
            </label>
            <textarea
              id="message"
              //   rows="s"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="აქ დაწერეთ თქვენი შეკითხვა ან გზავნილი..."
              required
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              გაგზავნა
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
