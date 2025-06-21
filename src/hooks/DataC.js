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

  const getDMin = (dLow, dHigh, dPred) => {
    if (dPred >= dLow && dPred <= dHigh) {
        return (dHigh - dPred)/(dHigh-dLow);
    } else if (dPred > dLow) {
        return 1;
    } else {
        return 0;
    }
  };
  const getDMax = (dLow, dHigh, dPred) => {
    if (dPred >= dLow && dPred <= dHigh) {
        return (dPred - dLow)/(dHigh-dLow);
    } else if (dPred > dLow) {
        return 0;
    } else {
        return 1;
    }
  };

  return {
    data,
    addHandler,
    getDMin,
    getDMax,
  };
};

export default useDataC;
