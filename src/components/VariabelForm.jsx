import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form({ onAdd }) {
  const formik = useFormik({
    initialValues: {
      dLow: "",
      dHigh: "",
      sLow: "",
      sHigh: "",
      pLow: "",
      pHigh: "",
      dPred: "",
      sPred: "",
    },
    validationSchema: Yup.object({
      dLow: Yup.number().required("Tidak boleh kosong"),
      dHigh: Yup.number().required("Tidak boleh kosong"),
      sLow: Yup.number().required("Tidak boleh kosong"),
      sHigh: Yup.number().required("Tidak boleh kosong"),
      pLow: Yup.number().required("Tidak boleh kosong"),
      pHigh: Yup.number().required("Tidak boleh kosong"),
      dPred: Yup.number().required("Tidak boleh kosong"),
      sPred: Yup.number().required("Tidak boleh kosong"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(
        values.dLow,
        values.dHigh,
        values.sLow,
        values.sHigh,
        values.pLow,
        values.pHigh,
        values.dPred,
        values.sPred
      );
      resetForm();
    },
  });

  return (
    <>
      <div className="max-w-6xl mx-auto mt-6 px-4 py-6">
        <form onSubmit={formik.handleSubmit} className="space-y-10">
          <h1 className="text-2xl font-bold text-purple-700 mb-6">
            Input Data
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="flex flex-col bg-purple-50 border border-purple-200 rounded-xl px-6 py-4 shadow-sm">
              <label htmlFor="" className="text-purple-700 font-semibold mb-2">
                Permintaan
              </label>
              <input
                name="dLow"
                type="number"
                placeholder="Minimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dLow}
              />
              <input
                name="dHigh"
                type="number"
                placeholder="Maksimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dHigh}
              />
              {(formik.touched.dLow && formik.errors.dLow) ||
              (formik.touched.dHigh && formik.errors.dHigh) ? (
                <>
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.dLow}
                  </p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col bg-purple-50 border border-purple-200 rounded-xl px-6 py-4 shadow-sm">
              <label htmlFor="" className="text-purple-700 font-semibold mb-2">
                Persediaan
              </label>
              <input
                name="sLow"
                type="number"
                placeholder="Minimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sLow}
              />
              <input
                name="sHigh"
                type="number"
                placeholder="Maksimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sHigh}
              />
              {(formik.touched.sLow && formik.errors.sLow) ||
              (formik.touched.sHigh && formik.errors.sHigh) ? (
                <>
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.sLow}
                  </p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col bg-purple-50 border border-purple-200 rounded-xl px-6 py-4 shadow-sm">
              <label htmlFor="" className="text-purple-700 font-semibold mb-2">
                Produksi
              </label>
              <input
                name="pLow"
                type="number"
                placeholder="Minimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pLow}
              />
              <input
                name="pHigh"
                type="number"
                placeholder="Maksimal"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pHigh}
              />
              {(formik.touched.pLow && formik.errors.pLow) ||
              (formik.touched.pHigh && formik.errors.pHigh) ? (
                <>
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.pLow}
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-purple-700 mt-10">
            Data yang akan diprediksi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div className="flex flex-col bg-purple-50 border border-purple-200 rounded-xl px-6 py-4 shadow-sm">
              <label htmlFor="" className="text-purple-700 font-semibold mb-2 ">
                Permintaan
              </label>
              <input
                name="dPred"
                type="number"
                placeholder="Permintaan Prediksi"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dPred}
              />
              {formik.touched.dPred && formik.errors.dPred ? (
                <>
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.dPred}
                  </p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col bg-purple-50 border border-purple-200 rounded-xl px-6 py-4 shadow-sm">
              <label htmlFor="" className="text-purple-700 font-semibold mb-2">
                Persediaan
              </label>
              <input
                name="sPred"
                type="number"
                placeholder="Stock Prediksi"
                className="border border-purple-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sPred}
              />
              {formik.touched.sPred && formik.errors.sPred ? (
                <>
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.sPred}
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md py-2 px-6 transition duration-300 shadow-md disabled:opacity-50"
              disabled={
                (!formik.isValid && formik.dirty) || formik.isSubmitting
              }
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
