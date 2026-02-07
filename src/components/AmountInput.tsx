import React, { useState } from "react";

export default function AmountInput() {
  const [amount, setAmount] = useState<string | number>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const regex = /^\d+(\.\d{0,2})?$/;
    if (inputValue === "") {
      setAmount("");
      return;
    }
    if (!regex.test(inputValue)) {
      return;
    }
    const numValue = Number(inputValue);
    setAmount(numValue);
  }

  return (
    <div>
      <label htmlFor="amount">
        Amount:
        <input
          className=""
          name="inputAmount"
          id="amount"
          onChange={handleChange}
          value={amount}
          placeholder="Enter amount"
          type="number"
          min={0}
          step={0.01}
          inputMode="decimal"
        ></input>
      </label>
    </div>
  );
}
