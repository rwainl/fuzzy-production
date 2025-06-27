import React from "react";

function Card() {
  return (
    <>
      <div className="bg-purple-50 border border-purple-200 rounded-xl px-6 py-6 mx-4 sm:mx-auto max-w-2xl mt-8 shadow-sm">
        <h1 className="text-xl font-bold text-purple-700 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 108 8 8.01 8.01 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6z"></path>
            <path d="M9 9h2v4H9zm0-4h2v2H9z"></path>
          </svg>
          Prediksi Total Produksi
        </h1>
        <p className="text-gray-700 mt-4 text-justify">
          Website ini dirancang untuk memprediksi total produksi menggunakan
          logika fuzzy. Anda cukup mengisi data permintaan dan persediaan, baik
          nilai minimum, maksimum, maupun nilai yang ingin diprediksi. Sistem
          akan melakukan fuzzifikasi, menerapkan aturan fuzzy (rule base),
          menghitung hasil implikasi, dan menentukan nilai prediksi produksi
          melalui metode defuzzifikasi. Hasil prediksi akan ditampilkan secara
          interaktif untuk membantu pengambilan keputusan produksi yang lebih
          tepat.
        </p>
      </div>
    </>
  );
}

export default Card;
