/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">ჩვენს შესახებ</h2>
        <p className="mt-4 text-lg text-gray-600">
          ჩვენ ვქმნით ხელსაწყოს, რომელიც ეხმარება მასწავლებლებს PDF მასალიდან
          მარტივად და სწრაფად შექმნან ტესტები — ხელოვნური ინტელექტის დახმარებით.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            ვინ ვართ ჩვენ?
          </h3>
          <p>
            ჩვენი გუნდი შედგება პედაგოგების, დეველოპერების და დიზაინერებისგან,
            რომლებსაც სურთ თანამედროვე ტექნოლოგიებით განახლდეს განათლების
            სექტორი საქართველოში. გვჯერა, რომ სწავლის პროცესი შეიძლება იყოს უფრო
            მარტივი, ეფექტური და ციფრულად მოქნილი.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
            რატომ ვქმნით ამ პლატფორმას?
          </h3>
          <p>
            მასწავლებლებს ყოველდღე დიდი დრო სჭირდებათ ტესტების შექმნაზე. ჩვენი
            მიზანია — ეს პროცესი გახდეს ავტომატიზებული, ინტელექტუალური და
            მოსახერხებელი. ხელოვნური ინტელექტი აქ არ ცვლის ადამიანს — ის
            ეხმარება.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1584697964154-dc0dca06ce1f"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
