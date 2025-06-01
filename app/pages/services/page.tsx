import React from "react";

const plans = [
  {
    name: "უფასო გეგმა",
    price: "₾0",
    features: [
      "PDF ატვირთვა",
      "ავტომატური კითხვების გენერაცია (დაწყებითი)",
      "ტესტის რედაქტირება",
    ],
    cta: "დაწყება უფასოდ",
    popular: false,
  },
  {
    name: "პრემიუმ გეგმა",
    price: "₾15 / თვეში",
    features: [
      "განვითარებული AI მოდელი კითხვებისთვის",
      "შეუზღუდავი PDF ატვირთვა",
      "გადმოწერა Google Forms-ში",
      "ტესტის დაზღვევა და შენახვა ღრუბელში",
    ],
    cta: "გადახდა და გაწევრიანება",
    popular: true,
  },
];

export default function page() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">აირჩიე შენი გეგმა</h2>
        <p className="mt-4 text-gray-600">
          დაიწყე უფასოდ ან გააფართოვე შესაძლებლობები პრემიუმ სერვისით.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`border rounded-2xl p-6 shadow-lg ${
              plan.popular
                ? "border-indigo-600 ring-2 ring-indigo-200"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="mb-4 inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                ყველაზე პოპულარული
              </div>
            )}
            <h3 className="text-2xl font-semibold text-gray-900">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-indigo-600 my-4">
              {plan.price}
            </p>

            <ul className="text-left text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
