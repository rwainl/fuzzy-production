import React from "react";
import useDataC from "./hooks/DataC.js";
import Card from "./components/Card.jsx";
import Form from "./components/VariabelForm.jsx";
import Result from "./components/Result.jsx";

function App() {
  const { data, addHandler, getDMin, getDMax } = useDataC();

  return (
    <>
      <Card />
      <Form onAdd={addHandler} />
      <Result data={data} dMin={getDMin} dMax={getDMax}/>
    </>
  );
}

export default App;
