export default function EntryCategory() {
  return (
    <div className="flex items-center justify-between w-full">
      <label htmlFor="category">Entry Category:</label>
      <select id="category" name="category">
        <option>Housing</option>
        <option>Utilities</option>
        <option>Food</option>
        <option>Transportation</option>
        <option>Healthcare</option>
        <option>Insurance</option>
        <option>Debt Payments</option>
        <option>Personal Care</option>
        <option>Entertainment</option>
        <option>Clothing</option>
        <option>Other</option>
      </select>
    </div>
  );
}
