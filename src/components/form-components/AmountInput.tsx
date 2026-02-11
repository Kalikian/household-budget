type AmountInputProps = {
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AmountInput({ value, handleChange }: AmountInputProps) {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="amount" className="">
        Amount:
      </label>
      <input
        className="border border-solid rounded-md border-gray-400 p-2 w-32"
        name="inputAmount"
        id="amount"
        onChange={handleChange}
        value={value}
        placeholder="Enter amount"
        type="number"
        min={0}
        step={1}
        inputMode="decimal"
      ></input>
    </div>
  );
}
