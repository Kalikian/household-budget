import AmountInput from "./AmountInput";
import TransactionTypeSelect from "./TransactionTypeSelect";

export default function TransactionForm() {
  return (
    <div>
      <TransactionTypeSelect />
      <AmountInput />
    </div>
  );
}
