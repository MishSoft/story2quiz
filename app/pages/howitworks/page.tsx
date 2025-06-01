import React from "react";

export default function page() {
  const steps = [
    {
      title: "1. ატვირთე PDF დოკუმენტი",
      description:
        "აირჩიე დოკუმენტი შენი კომპიუტერიდან. სისტემა ავტომატურად ამოიცნობს ტექსტს და დაიწყებს ანალიზს.",
      icon: "📄",
    },
    {
      title: "2. გენერირდება კითხვები და პასუხები",
      description:
        "AI დაამუშავებს ტექსტს და შექმნის ტესტს — კითხვებითა და სავარაუდო პასუხებით.",
      icon: "🤖",
    },
    {
      title: "3. დაარედაქტირე ტესტი სურვილისამებრ",
      description:
        "შეგიძლია შეცვალო კითხვები, დაამატო ან წაშალო პასუხები და მოარგო ტესტი შენს საჭიროებებს.",
      icon: "✏️",
    },
    {
      title: "4. გადმოწერე ან გააზიარე",
      description:
        "მზადყოფნაში მყოფი ტესტი შეგიძლია გადმოწერო PDF-ად ან გააზიარო Google Forms ბმულით.",
      icon: "📤",
    },
  ];
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">როგორ მუშაობს?</h2>
        <p className="mt-4 text-gray-600">
          მარტივი 4 ნაბიჯი — და მიიღებ სრულყოფილ ტესტს AI-ის დახმარებით.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
