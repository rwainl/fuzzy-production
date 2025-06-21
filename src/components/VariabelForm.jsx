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
        values.sPred,
      );
      resetForm();
    },
  });

  return (
    <>
      <div className="max-w-6xl mx-auto mt-6 border rounded-lg px-6 py-4 flex flex-col">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-lg font-semibold mb-4 mt-4">Input Data</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2">
            <div className="flex flex-col border rounded-lg px-4 py-4 shadow-lg">
              <label htmlFor="" className="mb-2">
                Permintaan
              </label>
              <input
                name="dLow"
                type="number"
                placeholder="Minimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usia}
              />
              <input
                name="dHigh"
                type="number"
                placeholder="Maksimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usia}
              />
              {(formik.touched.dLow && formik.errors.dLow) ||
              (formik.touched.dHigh && formik.errors.dHigh) ? (
                <>
                  <p className="text-red-400 text-sm">{formik.errors.dLow}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col border rounded-lg px-4 py-4 shadow-lg">
              <label htmlFor="" className="mb-2">
                Persediaan
              </label>
              <input
                name="sLow"
                type="number"
                placeholder="Minimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.beratBadan}
              />
              <input
                name="sHigh"
                type="number"
                placeholder="Maksimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.beratBadan}
              />
              {(formik.touched.sLow && formik.errors.sLow) ||
              (formik.touched.sHigh && formik.errors.sHigh) ? (
                <>
                  <p className="text-red-400 text-sm">{formik.errors.sLow}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col border rounded-lg px-4 py-4 shadow-lg">
              <label htmlFor="" className="mb-2">
                Produksi
              </label>
              <input
                name="pLow"
                type="number"
                placeholder="Minimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tinggiBadan}
              />
              <input
                name="pHigh"
                type="number"
                placeholder="Maksimal"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tinggiBadan}
              />
              {(formik.touched.pLow && formik.errors.pLow) ||
              (formik.touched.pHigh && formik.errors.pHigh) ? (
                <>
                  <p className="text-red-400 text-sm">{formik.errors.pLow}</p>
                </>
              ) : null}
            </div>
          </div>
          <h1 className="text-lg mt-6 font-semibold mb-4">Data yang akan diprediksi</h1>
          <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 sm:grid-cols-2">
            <div className="flex flex-col border rounded-lg px-4 py-4 shadow-lg">
              <label htmlFor="" className="mb-2">
                Permintaan
              </label>
              <input
                name="dPred"
                type="number"
                placeholder="Permintaan Prediksi"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usia}
              />
              {formik.touched.dPred && formik.errors.dPred ? (
                <>
                  <p className="text-red-400 text-sm">{formik.errors.dPred}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col border rounded-lg px-4 py-4 shadow-lg">
              <label htmlFor="" className="mb-2">
                Persediaan
              </label>
              <input
                name="sPred"
                type="number"
                placeholder="Stock Prediksi"
                className="border rounded-lg py-2 px-2 mr-4 mb-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usia}
              />
              {formik.touched.sPred && formik.errors.sPred ? (
                <>
                  <p className="text-red-400 text-sm">{formik.errors.sPred}</p>
                </>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="border rounded-lg shadow-lg py-2 px-2 mt-4 self-end"
            disabled={(!formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            Check
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
