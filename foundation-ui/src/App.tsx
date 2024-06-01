import React from "react";
import ReactDOM from "react-dom/client";

import Button from "../src/components/Button";
import Checkbox from "./components/Checkbox";
import TextBox from "./components/TextBox";
import RadioButton from "./components/RadioButton";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <p>Yo BOY</p>

    <Button label="Hello Button" />

    <Checkbox
      id="foundation-checkbox-id"
      checked={false}
      indeterminate={false}
      onChange={() => alert("changed")}
      label="Test checkbox"
    />

    <TextBox inputId="textbox-id" labelText="Hello label" />

    <RadioButton id="all" radioLabel="All" radioName="test" radioValue="all" />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
