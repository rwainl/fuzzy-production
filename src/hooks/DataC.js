import { useEffect, useState } from "react";

const useDataC = (showToast) => {
  const [data, setData] = useState(() => {
    const localSaved = localStorage.getItem("data");
    return localSaved ? JSON.parse(localSaved) : [];
  });
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const countValue = (
    demandLow,
    demandHigh,
    supplyLow,
    supplyHigh,
    demandPred,
    supplyPred
  ) => {
    const round = (num) => Number(num.toFixed(2));
    let demandMinResult;
    let demandMaxResult;
    let supplyMinResult;
    let supplyMaxResult;
    let rule1Result;
    let rule2Result;
    let rule3Result;
    let rule4Result;
    let z1;
    let z2;
    let z3;
    let z4;

    if (demandPred < demandLow) {
      demandMinResult = 1;
    } else if (demandPred > demandHigh) {
      demandMinResult = 0;
    } else {
      demandMinResult = round(
        (demandHigh - demandPred) / (demandHigh - demandLow)
      );
    }

    if (demandPred > demandHigh) {
      demandMaxResult = 1;
    } else if (demandPred < demandLow) {
      demandMaxResult = 0;
    } else {
      demandMaxResult = round(
        (demandPred - demandLow) / (demandHigh - demandLow)
      );
    }

    if (supplyPred < supplyLow) {
      supplyMinResult = 1;
    } else if (supplyPred > supplyHigh) {
      supplyMinResult = 0;
    } else {
      supplyMinResult = round(
        (supplyHigh - supplyPred) / (supplyHigh - supplyLow)
      );
    }

    if (supplyPred > supplyHigh) {
      supplyMaxResult = 1;
    } else if (supplyPred < supplyLow) {
      supplyMaxResult = 0;
    } else {
      supplyMaxResult = round(
        (supplyPred - supplyLow) / (supplyHigh - supplyLow)
      );
    }

    rule1Result = round(Math.min(demandMinResult, supplyMaxResult));
    rule2Result = round(Math.min(demandMinResult, supplyMinResult));
    rule3Result = round(Math.min(demandMaxResult, supplyMaxResult));
    rule4Result = round(Math.min(demandMaxResult, supplyMinResult));

    z1 = round(supplyPred - demandPred);
    z2 = round(demandPred);
    z3 = round(demandPred);
    z4 = round(0.5 * supplyPred - demandPred);

    return {
      demandMinResult,
      demandMaxResult,
      supplyMinResult,
      supplyMaxResult,
      rule1Result,
      rule2Result,
      rule3Result,
      rule4Result,
      z1,
      z2,
      z3,
      z4,
    };
  };

  const dataCharts = (
    demandLow,
    demandHigh,
    supplyLow,
    supplyHigh,
    rule1Result,
    rule2Result,
    rule3Result,
    rule4Result,
    z1,
    z2,
    z3,
    z4
  ) => {
    const middleDemand = (demandLow + demandHigh) / 2;
    const middleSupply = (supplyLow + supplyHigh) / 2;

    const demandGraph = [
      { x: 0, turun: 1, naik: 0 },
      { x: demandLow, turun: 1, naik: 0 },
      { x: middleDemand, turun: 0.5, naik: 0.5 },
      { x: demandHigh, turun: 0, naik: 1 },
      { x: demandHigh + 50, turun: 0, naik: 1 },
    ];

    const supplyGraph = [
      { x: 0, sedikit: 1, banyak: 0 },
      { x: supplyLow, sedikit: 1, banyak: 0 },
      { x: middleSupply, sedikit: 0.5, banyak: 0.5 },
      { x: supplyHigh, sedikit: 0, banyak: 1 },
      { x: supplyHigh + 50, sedikit: 0, banyak: 1 },
    ];

    const implicationArea = (z, alpha, width = 50) => {
      return [
        { x: (z - width) / 2, y: alpha },
        { x: (z - width) / 2, y: alpha },
        { x: (z + width) / 2, y: alpha },
        { x: (z + width) / 2, y: alpha },
      ];
    };

    const implicationAreaZ1 = implicationArea(z1, rule1Result);
    const implicationAreaZ2 = implicationArea(z2, rule2Result);
    const implicationAreaZ3 = implicationArea(z3, rule3Result);
    const implicationAreaZ4 = implicationArea(z4, rule4Result);

    return {
      demandGraph,
      supplyGraph,
      implicationAreaZ1,
      implicationAreaZ2,
      implicationAreaZ3,
      implicationAreaZ4,
    };
  };

  const ruleComposition = (
    rule1Result,
    rule2Result,
    rule3Result,
    rule4Result,
    productionLow,
    productionHigh
  ) => {
    const intervalProduction = productionHigh - productionLow;
    const alphaArray = [rule1Result, rule2Result, rule3Result, rule4Result];
    const sorted = [...alphaArray].sort((a, b) => b - a);

    const alpha1 = sorted[0];
    const alpha2 = sorted[1];

    const a1 = Number(
      (alpha1 * productionLow + intervalProduction).toFixed(2)
    );
    const a2 = Number(
      (alpha2 * productionLow + intervalProduction).toFixed(2)
    );

    return {
      alpha1,
      alpha2,
      a1,
      a2,
    };
  };

  const centroid = (productionHigh, a1) => {
    const interval = productionHigh - a1 + 1;
    const result = (((interval)*(a1 + productionHigh))/2)/interval;
    const momValue = Math.ceil(result);

    return{
      momValue,
    }
  }

  const addHandler = (
    demandLow,
    demandHigh,
    supplyLow,
    supplyHigh,
    productionLow,
    productionHigh,
    demandPred,
    supplyPred
  ) => {
    const {
      demandMinResult,
      demandMaxResult,
      supplyMinResult,
      supplyMaxResult,
      rule1Result,
      rule2Result,
      rule3Result,
      rule4Result,
      z1,
      z2,
      z3,
      z4,
    } = countValue(
      demandLow,
      demandHigh,
      supplyLow,
      supplyHigh,
      demandPred,
      supplyPred
    );

    const {
      demandGraph,
      supplyGraph,
      implicationAreaZ1,
      implicationAreaZ2,
      implicationAreaZ3,
      implicationAreaZ4,
    } = dataCharts(
      demandLow,
      demandHigh,
      supplyLow,
      supplyHigh,
      rule1Result,
      rule2Result,
      rule3Result,
      rule4Result,
      z1,
      z2,
      z3,
      z4
    );

    const { alpha1, alpha2, a1, a2 } = ruleComposition(
      rule1Result,
      rule2Result,
      rule3Result,
      rule4Result,
      productionLow,
      productionHigh
    );

    const {momValue} = centroid(productionHigh, a1);

    setData([
      ...data,
      {
        id: +new Date(),
        time: new Date().toLocaleString(),
        demandLow,
        demandHigh,
        supplyLow,
        supplyHigh,
        productionLow,
        productionHigh,
        demandPred,
        supplyPred,
        demandGraph,
        supplyGraph,
        demandMinResult,
        demandMaxResult,
        supplyMinResult,
        supplyMaxResult,
        rule1Result,
        rule2Result,
        rule3Result,
        rule4Result,
        z1,
        z2,
        z3,
        z4,
        implicationAreaZ1,
        implicationAreaZ2,
        implicationAreaZ3,
        implicationAreaZ4,
        alpha1,
        alpha2,
        a1,
        a2,
        momValue,
      },
    ]);
    showToast("Data berhasil ditambahkan");
  };

  const deleteHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    showToast("Data berhasil dihapus");
  };

  return {
    data,
    addHandler,
    deleteHandler,
  };
};

export default useDataC;
