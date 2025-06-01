import React from "react";

const features = [
  {
    title: "ავტომატური ტესტის გენერაცია",
    description:
      "ატვირთე PDF და მიიღე კითხვები და სავარაუდო პასუხები წამებში — ხელით არაფრის გაკეთება არ გიწევს.",
    icon: (
      <svg
        className="h-6 w-6 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4M7 21h10a2 2 0 0 0 2-2V7l-6-6H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: "რედაქტირების შესაძლებლობა",
    description:
      "შეგიძლია შეცვალო კითხვები, დაამატო საკუთარი ვარიანტები და მოარგო ტესტი შენს საჭიროებებს.",
    icon: (
      <svg
        className="h-6 w-6 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 20h9M12 4h9M4 9h16M4 15h16" />
      </svg>
    ),
  },
  {
    title: "გადმოწერა PDF ან Google Forms-ად",
    description:
      "მზადყოფნაში მყოფ ტესტს შეგიძლია გადმოწერო PDF ფაილად ან გადაიტანო Google Forms-ზე ერთი კლიკით.",
    icon: (
      <svg
        className="h-6 w-6 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Პროგრამის უპირატესობები
          </h2>
          <p className="mt-4 text-gray-600">
            ჩვენი პლატფორმა ეხმარება მასწავლებლებს სწრაფად და მარტივად შექმნან
            ტესტები PDF დოკუმენტებიდან.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
