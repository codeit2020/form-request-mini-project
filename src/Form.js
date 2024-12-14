import { useState } from "react";
import "./form.css";
import Popup from "./Popup";

export default function Form() {
  const formObject = {
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  };
  const [form, setForm] = useState(formObject);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleNameInput(event) {
    setForm({ ...form, name: event.target.value });
  }
  function handlePhoneNumberInput(event) {
    setForm({ ...form, phoneNumber: event.target.value });
    setIsSubmitted(false);
  }
  function handleAgeInput(event) {
    setForm({ ...form, age: event.target.value });
    setIsSubmitted(false);
  }

  function checkIfEmployee(event) {
    setForm({ ...form, isEmployee: event.target.checked });
  }
  function handleSalaryOption(event) {
    setForm({ ...form, salary: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }
  const isFormValid = form.name && form.phoneNumber && form.age && form.salary;

  //   function editClassName() {
  //     return isFormValid === true ? "submitButton" : "disabled";
  //   }

  let isDisabled = "";
  isFormValid ? (isDisabled = "") : (isDisabled = "disabled");

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Request for buying a house</h3>
        <hr></hr>
        <label>Name</label>
        <input className="input" value={form.name} onChange={handleNameInput} />

        <label>PhoneNumber</label>
        <input
          className="input"
          value={form.phoneNumber}
          onChange={handlePhoneNumberInput}
        />

        <label>Age</label>
        <input className="input" value={form.age} onChange={handleAgeInput} />

        <label> Are you an employee?</label>
        <input
          className="input"
          type="checkbox"
          checked={form.isEmployee}
          onClick={checkIfEmployee}
        />

        <label> Salary range</label>
        <select value={form.salary} onChange={handleSalaryOption}>
          <option></option>
          <option value="less than 500$">less than 500$</option>
          <option value="500$ to 1000$">500$ to 1000$</option>
          <option value="more than 1000$">more than 1000$</option>
        </select>
        <button className={isDisabled} disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {isSubmitted && <Popup phoneNumber={form.phoneNumber} age={form.age} />}
    </div>
  );
}
