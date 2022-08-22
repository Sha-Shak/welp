import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./style.css";

export default function App() {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div>
      <h1>Add Fruits</h1>

      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter to add new tag</em>
    </div>
  );
}