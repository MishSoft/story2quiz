import React from "react";

export default function page() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">AI განათლება</h1>
        <p className="mt-4 text-gray-600 text-lg">
          გაიგე, როგორ იყენებს ჩვენი პლატფორმა ხელოვნურ ინტელექტს იმისთვის, რომ
          დაგეხმაროს ტესტების სწრაფ და ხარისხიან შექმნაში.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Section 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-indigo-600">
            🤖 როგორ მუშაობს AI ტესტ გენერატორი?
          </h3>
          <p className="mt-4 text-gray-700">
            ჩვენი AI მოდელი ამოიცნობს ტექსტში მთავარ თემებს, ამუშავებს 문წერფებს
            და ქმნის კითხვებს სხვადასხვა ტიპის მიხედვით (მრავალპასუხიანი, ღია
            კითხვა და ა.შ.).
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-indigo-600">
            📚 როგორ შეგვიძლია მისი გამოყენება სწავლებაში?
          </h3>
          <p className="mt-4 text-gray-700">
            მასწავლებლები დროის ეკონომიით ქმნიან ტესტებს, ახდენენ კითხვების
            ადაპტაციას და შეუძლიათ სწრაფად გაზიარონ ტესტები სტუდენტებთან.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-indigo-600">
            🎯 რატომ უნდა ენდო AI-ს?
          </h3>
          <p className="mt-4 text-gray-700">
            ხელოვნური ინტელექტი არ არის ადამიანის შეცვლისთვის, არამედ —
            დასახმარებლად. იგი გეხმარება დაიზოგოს დრო, შენარჩუნდეს ხარისხი და
            შეიქმნას მრავალფეროვანი ტესტები.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-indigo-600">
            💡 AI + პედაგოგიკა = მომავალი
          </h3>
          <p className="mt-4 text-gray-700">
            ტესტის შექმნა უკვე აღარ არის რუტინა — შენი კრეატიულობა და AI-ის
            შესაძლებლობები ქმნიან უკეთეს სასწავლო გამოცდილებას.
          </p>
        </div>
      </div>
    </section>
  );
}
