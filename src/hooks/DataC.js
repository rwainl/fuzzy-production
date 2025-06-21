import { useState } from "react";

const useDataC = () => {
  const [data, setData] = useState([]);

  const addHandler = (dLow, dHigh, sLow, sHigh, pLow, pHigh, dPred, sPred) => {
    setData([
      ...data,
      {
        dLow,
        dHigh,
        sLow,
        sHigh,
        pLow,
        pHigh,
        dPred,
        sPred,
      },
    ]);
  };

  const getDMin = () => {
    const valueDMin = data.map((item) => {
      if (item.dPred >= item.dLow && item.dPred <= item.dHigh) {
        return (item.dHigh - item.dPred) / (item.dHigh - item.dLow);
      } else if (item.dPred > item.dLow) {
        return 1;
      } else {
        return 0;
      }
    });
    return valueDMin;
  };
  const getDMax = () => {
    const valueDMax = data.map((item) => {
      if (item.dPred >= item.dLow && item.dPred <= item.dHigh) {
        return (item.dPred - item.dLow) / (item.dHigh - item.dLow);
      } else if (item.dPred > item.dLow) {
        return 0;
      } else {
        return 1;
      }
    });
    return valueDMax;
  };

  return {
    data,
    addHandler,
    getDMin,
    getDMax,
  };
};

export default useDataC;
