import React from "react";

const steps = [
  {
    title: "ატვირთე PDF",
    description:
      "აირჩიე სასურველი ტესტი ან მასალა PDF ფორმატში და ატვირთე ჩვენს პლატფორმაზე რამდენიმე წამში.",
    number: "1",
  },
  {
    title: "დაელოდე გენერაციას",
    description:
      "ჩვენი სისტემა ავტომატურად ამოიცნობს კითხვებს, შექმნის სავარაუდო პასუხებს და მოამზადებს ტესტს.",
    number: "2",
  },
  {
    title: "დაარედაქტირე და მოარგე",
    description:
      "შეგიძლია შეცვალო კითხვები ან დაამატო ახალი, მოარგო ფორმატი და შეადგინო ტესტი როგორც გსურს.",
    number: "3",
  },
  {
    title: "გადმოწერე ან გააზიარე",
    description:
      "შედეგი შეგიძლია გადმოწერო PDF ფაილში ან გადაიტანო Google Forms-ში სტუდენტებისთვის გასაზიარებლად.",
    number: "4",
  },
];

export default function Steps() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">როგორ მუშაობს?</h2>
          <p className="mt-4 text-gray-600">
            ტესტის შექმნა არასოდეს ყოფილა ასეთი მარტივი – უბრალოდ მიჰყევი 4
            ნაბიჯს.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition duration-300 text-center"
            >
              <div className="text-indigo-600 text-4xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
