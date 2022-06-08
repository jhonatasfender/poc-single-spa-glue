import { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";

export default function Root({ name }) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent(
      new CustomEvent("@wiz/react-form/add/task", {
        detail: { id: uuid(), describe: task },
      })
    );
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task} />

        <button type="submit">Send</button>
      </form>

      <Parcel config={() => System.import("@wiz/angular-table")} />
    </>
  );
}
