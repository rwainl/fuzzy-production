import React from "react";

function Card() {
  return (
    <>
      <div className="border rounded-lg px-6 py-4 mx-auto max-w-2xl mt-6">
        <h1 className="text-lg font-semibold mt-4">Prediksi Total Produksi</h1>
        <p className="text-justify my-4">
          Masukkan variabel dibawah sesuai untuk memprediksi total produksi
          dengan menggunakan logika fuzzy. Sistem akan memproses data dan
          menampilkan prediksi.
        </p>
      </div>
    </>
  );
}

export default Card;
