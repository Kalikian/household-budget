//EntryType union for income and expense
export type EntryType = "expense" | "income";

export type Entry = {
    id: string;
    type: EntryType;
    amount: number;
    category: string;
    date: string;
    note?: string;
};

export type Category = {
    id: string;
    type: EntryType;
    name: string;
};

//einmal die Kategorien als Daten definieren und dann den Typ ableiten
//single source of truth (Sicher und mehr Wartbar) die Kategorien nur hier ändern
export const EXPENSE_CATEGORIES = [
    "Housing",
    "Utility",
    "Food",
    "Transportation",
    "Healthcare",
    "Insurance",
    "Debt Payments",
    "Personal Care",
    "Entertainment",
    "Clothing",
    "Other Expense",
] as const;

export type ExpenseCategoryType = (typeof EXPENSE_CATEGORIES)[number];

export const INCOME_CATEGORIES = [
    "Salary",
    "Bonus",
    "Freelance / Contract",
    "Government Benefits",
    "Gifts",
    "Refunds",
    "Other Income"
] as const;

export type IncomeCategoryType = (typeof INCOME_CATEGORIES)[number];
