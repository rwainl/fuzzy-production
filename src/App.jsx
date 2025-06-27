import React from "react";
import useDataC from "./hooks/DataC.js";
import Card from "./components/Card.jsx";
import Form from "./components/VariabelForm.jsx";
import Result from "./components/Result.jsx";
import Toast from "./components/Toast.jsx";
import { useToast } from "./components/ToastContext.jsx";

function App() {
  const {showToast} = useToast();
  const { data, addHandler, deleteHandler } = useDataC(showToast);

  return (
    <>
      <Card />
      <Form onAdd={addHandler} />
      <Result data={data} onDelete={deleteHandler} />
    </>
  );
}

export default App;
